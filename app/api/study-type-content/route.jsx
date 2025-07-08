import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

// Type mapping function to convert frontend types to Inngest types
function mapStudyTypeForInngest(frontendType) {
    const typeMapping = {
        'notes': 'Notes',   // Notes/Chapters → Flashcard
        'flashcards': 'Flashcard',   // Flashcard → Flashcard
        'quiz': 'Quiz',              // Quiz → Quiz
        'qa': 'QA',                  // QA → QA
    };
    
    return typeMapping[frontendType] || frontendType;
}

// Type mapping function to convert frontend types to database display names
function mapStudyTypeForDatabase(frontendType) {
    const typeMapping = {
        'notes': 'Notes/Chapters',  // Frontend notes → Database Notes/Chapters
        'flashcards': 'Flashcard',  // Frontend flashcards → Database Flashcard
        'quiz': 'Quiz',             // Frontend quiz → Database Quiz
        'qa': 'QA',                 // Frontend qa → Database QA
    };
    
    return typeMapping[frontendType] || frontendType;
}


export async function POST(req) {
    const {chapters, courseId, type} = await req.json();

    // Map the frontend type to the Inngest expected type
    const inngestType = mapStudyTypeForInngest(type);

    // Map the frontend type to the database expected type
    const databaseType = mapStudyTypeForDatabase(type);

    let PROMPT = "";
    if(inngestType === "Notes"){
        PROMPT = "Generate detailed notes on topic: " + chapters + " in JSON format with comprehensive content, Maximum 15";
    }
    else if(inngestType === "Flashcard"){
        PROMPT = "Generate the flashcard on topic: " + chapters + " in JSON format with front back content, Maximum 15";
    } else if(inngestType === "Quiz"){
        PROMPT = "Generate Quiz on topic : " + chapters + " with Question and Options along with correct answer in JSON format, (Max 10)";
    } else if(inngestType === "QA"){
        PROMPT = "Generate Question Answer on topic: " + chapters + " in JSON format with question answer content, Maximum 10";
    }

   // Add logging to debug
    console.log("Request type:", type);
    console.log("Mapped Inngest type:", inngestType);
    console.log("Mapped Database type:", databaseType);
    console.log("Generated PROMPT:", PROMPT);

    // Insert Record to DB, update status to Generating...
    const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId: courseId,
        type: databaseType,
    }).returning({id: STUDY_TYPE_CONTENT_TABLE.id});

    // Trigger Inngest Function
    const inngestResult = inngest.send({
        name: 'studyType.content',
        data: {
            studyType: inngestType, // Consider fixing typo: y -> studyType
            prompt: PROMPT,
            courseId: courseId,
            recordId: result[0].id,
        }
    })

    console.log("Inngest event sent successfully:", inngestResult);

    return NextResponse.json(result[0].id)
}