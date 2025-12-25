// import { db } from "@/configs/db";
// import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
// import { inngest } from "@/inngest/client";
// import { NextResponse } from "next/server";

// // Type mapping function to convert frontend types to Inngest types
// function mapStudyTypeForInngest(frontendType) {
//     const typeMapping = {
//         'notes': 'Notes',   // Notes/Chapters → Flashcard
//         'flashcards': 'Flashcard',   // Flashcard → Flashcard
//         'quiz': 'Quiz',              // Quiz → Quiz
//         'qa': 'QA',                  // QA → QA
//     };

//     return typeMapping[frontendType] || frontendType;
// }

// // Type mapping function to convert frontend types to database display names
// function mapStudyTypeForDatabase(frontendType) {
//     const typeMapping = {
//         'notes': 'Notes/Chapters',  // Frontend notes → Database Notes/Chapters
//         'flashcards': 'Flashcard',  // Frontend flashcards → Database Flashcard
//         'quiz': 'Quiz',             // Frontend quiz → Database Quiz
//         'qa': 'QA',                 // Frontend qa → Database QA
//     };

//     return typeMapping[frontendType] || frontendType;
// }


// export async function POST(req) {
//     const {chapters, courseId, type} = await req.json();

//     // Map the frontend type to the Inngest expected type
//     const inngestType = mapStudyTypeForInngest(type);

//     // Map the frontend type to the database expected type
//     const databaseType = mapStudyTypeForDatabase(type);

//     let PROMPT = "";
//     if(inngestType === "Notes"){
//         PROMPT = "Generate detailed notes on topic: " + chapters + " in JSON format with comprehensive content, Maximum 15";
//     }
//     else if(inngestType === "Flashcard"){
//         PROMPT = "Generate the flashcard on topic: " + chapters + " in JSON format with front back content, Maximum 15";
//     } else if(inngestType === "Quiz"){
//         PROMPT = "Generate Quiz on topic : " + chapters + " with Question and Options along with correct answer in JSON format, (Max 10)";
//     } else if(inngestType === "QA"){
//         PROMPT = "Generate Question Answer on topic: " + chapters + " in JSON format with question answer content, Maximum 10";
//     }

//    // Add logging to debug
//     console.log("Request type:", type);
//     console.log("Mapped Inngest type:", inngestType);
//     console.log("Mapped Database type:", databaseType);
//     console.log("Generated PROMPT:", PROMPT);

//     // Insert Record to DB, update status to Generating...
//     const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
//         courseId: courseId,
//         type: databaseType,
//     }).returning({id: STUDY_TYPE_CONTENT_TABLE.id});

//     // Trigger Inngest Function
//     const inngestResult = inngest.send({
//         name: 'studyType.content',
//         data: {
//             studyType: inngestType, // Consider fixing typo: y -> studyType
//             prompt: PROMPT,
//             courseId: courseId,
//             recordId: result[0].id,
//         }
//     })

//     console.log("Inngest event sent successfully:", inngestResult);

//     return NextResponse.json(result[0].id)
// }

import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// 🔥 Import AI models for direct generation
import {
    generateNotesAiModel,
    GenerateStudyTypeContentAiModel,
    GenerateQuizAiModel,
    GenerateQuestionAnswerAiModel,
} from "@/configs/AiModel";

// Type mapping functions (keep existing)
function mapStudyTypeForInngest(frontendType) {
    const typeMapping = {
        'notes': 'Notes',
        'flashcards': 'Flashcard',
        'quiz': 'Quiz',
        'qa': 'QA',
    };
    return typeMapping[frontendType] || frontendType;
}

function mapStudyTypeForDatabase(frontendType) {
    const typeMapping = {
        'notes': 'Notes/Chapters',
        'flashcards': 'Flashcard',
        'quiz': 'Quiz',
        'qa': 'QA',
    };
    return typeMapping[frontendType] || frontendType;
}

export async function POST(req) {
    try {
        const { chapters, courseId, type } = await req.json();

        const inngestType = mapStudyTypeForInngest(type);
        const databaseType = mapStudyTypeForDatabase(type);

        let PROMPT = "";
        if (inngestType === "Notes") {
            PROMPT = "Generate detailed notes on topic: " + chapters + " in JSON format with comprehensive content, Maximum 15";
        }
        else if (inngestType === "Flashcard") {
            PROMPT = "Generate the flashcard on topic: " + chapters + " in JSON format with front back content, Maximum 15";
        } else if (inngestType === "Quiz") {
            PROMPT = "Generate Quiz on topic : " + chapters + " with Question and Options along with correct answer in JSON format, (Max 10)";
        } else if (inngestType === "QA") {
            PROMPT = "Generate Question Answer on topic: " + chapters + " in JSON format with question answer content, Maximum 10";
        }

        console.log("🚀 Generating content for:", { type, courseId, chapters });

        // Insert Record to DB
        const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
            courseId: courseId,
            type: databaseType,
            status: "Generating...",
        } as any).returning({ id: STUDY_TYPE_CONTENT_TABLE.id });

        // 🔥 BYPASS INNGEST: Generate content directly
        try {
            console.log("📝 Generating content directly...");

            let aiResult;
            if (inngestType === "Notes") {
                aiResult = await generateNotesAiModel.sendMessage(PROMPT);
            } else if (inngestType === "Flashcard") {
                aiResult = await GenerateStudyTypeContentAiModel.sendMessage(PROMPT);
            } else if (inngestType === "Quiz") {
                aiResult = await GenerateQuizAiModel.sendMessage(PROMPT);
            } else if (inngestType === "QA") {
                aiResult = await GenerateQuestionAnswerAiModel.sendMessage(PROMPT);
            }

            // Parse AI response with robust error handling
            const rawText = aiResult.response.text();
            console.log("🤖 Raw AI response length:", rawText.length);

            let cleanedText = rawText.replace(/```(json)?/g, "").trim();

            let parsedContent;
            try {
                parsedContent = JSON.parse(cleanedText);
                console.log("✅ Successfully parsed AI response");
            } catch (parseError) {
                console.log("⚠️ Initial parse failed, trying fallback...");

                // Fallback: try to extract JSON from text
                const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    try {
                        parsedContent = JSON.parse(jsonMatch[0]);
                        console.log("✅ Fallback parsing successful");
                    } catch (fallbackError) {
                        console.error("❌ All parsing methods failed");
                        throw new Error("Failed to parse AI response");
                    }
                } else {
                    // Last resort: return raw text in array format
                    parsedContent = [{ content: rawText, error: "Could not parse as JSON" }];
                    console.log("⚠️ Using raw text fallback");
                }
            }

            // Update database with generated content
            await db.update(STUDY_TYPE_CONTENT_TABLE)
                .set({
                    content: parsedContent,
                    status: "Ready",
                } as any)
                .where(eq(STUDY_TYPE_CONTENT_TABLE.id, result[0].id));

            console.log("✅ Content saved to database successfully");

            return NextResponse.json({
                success: true,
                id: result[0].id,
                message: "Content generated successfully",
                contentPreview: Array.isArray(parsedContent) ?
                    `Generated ${parsedContent.length} items` :
                    "Content generated"
            });

        } catch (generationError) {
            console.error("❌ Content generation error:", generationError);

            // Update status to failed
            await db.update(STUDY_TYPE_CONTENT_TABLE)
                .set({
                    status: "Failed",
                    content: { error: generationError.message }
                } as any)
                .where(eq(STUDY_TYPE_CONTENT_TABLE.id, result[0].id));

            return NextResponse.json({
                error: "Failed to generate content",
                details: generationError.message
            }, { status: 500 });
        }

    } catch (error) {
        console.error("❌ API route error:", error);
        return NextResponse.json({
            error: "Internal server error",
            details: error.message
        }, { status: 500 });
    }
}