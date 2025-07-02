import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {chapters, courseId, type} = await req.json();

    let PROMPT = "";

    if(type === "Flashcard"){
        PROMPT = "Generate the flashcard on topic: " + chapters + " in JSON format with front back content, Maximum 15";
    } else if(type === "Quiz"){
        PROMPT = "Generate Quiz on topic : " + chapters + " with Question and Options along with correct answer in JSON format, (Max 10)";
    } else if(type === "QA"){
        PROMPT = "Generate Question Answer on topic: " + chapters + " in JSON format with question answer content, Maximum 10";
    }

    // Add logging to debug
    console.log("Request type:", type);
    console.log("Generated PROMPT:", PROMPT);

    // Insert Record to DB, update status to Generating...
    const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId: courseId,
        type: type,
    }).returning({id: STUDY_TYPE_CONTENT_TABLE.id});

    // Trigger Inngest Function
    inngest.send({
        name: 'studyType.content',
        data: {
            studuType: type, // Consider fixing typo: studuType -> studyType
            prompt: PROMPT,
            courseId: courseId,
            recordId: result[0].id,
        }
    })

    return NextResponse.json(result[0].id)
}