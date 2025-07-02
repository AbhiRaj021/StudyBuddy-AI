// import { courseOutlineAIModel } from "@/configs/AiModel";
// import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
// import { db } from "@/configs/db";
// import { NextResponse } from "next/server";
// import { inngest } from "@/inngest/client";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { courseId, courseType, topic, difficultyLevel, createdBy } = body;

//     // 🛑 Validate request data
//     if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
//       console.error("❌ Missing fields:", body);
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // 📝 Construct AI Prompt
//     const PROMPT = `Generate a Study Material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of course, List of Chapters along with summary for each chapter, Topic List in each chapter in JSON Format`;

//     // 🤖 Generate Course Layout Using AI
//     try {
//       const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
//       const aiText = await aiResp.response.text(); // Modified this line - removed .response

//       if (!aiText) {
//         return NextResponse.json(
//           { error: "AI failed to generate response" },
//           { status: 500 }
//         );
//       }

//       // ✅ Parse AI Response
//       let aiResult;
//       try {
//         aiResult = JSON.parse(aiText);
//       } catch (parseError) {
//         console.error("❌ JSON Parsing Error:", parseError);
//         return NextResponse.json(
//           { error: "Failed to parse AI response", rawText: aiText },
//           { status: 500 }
//         );
//       }

//       // 💾 Save to Database
//       const dbResult = await db
//         .insert(STUDY_MATERIAL_TABLE)
//         .values({
//           courseId,
//           courseType,
//           createdBy,
//           topic,
//           courseLayout: aiResult,
//         })
//         .returning("*");

//       console.log("✅ DB Inserted:", dbResult);

//       if (!dbResult || dbResult.length === 0) {
//         return NextResponse.json(
//           { error: "Failed to insert study material into database" },
//           { status: 500 }
//         );
//       }

//       // Trigger the Inngest function to generate chapter notes
//       const result = await inngest.send({
//         name: "notes.generate",
//         data: {
//           course: dbResult[0], // Modified: removed .resp
//         },
//       });
//       console.log("Inngest result:", result);

//       return NextResponse.json({ success: true, data: dbResult[0] });
//     } catch (aiError) {
//       console.error("🔥 AI Error:", aiError);
//       return NextResponse.json(
//         { error: "AI Service Error", details: aiError.message },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("🔥 Internal Server Error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";
import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";
import res from "express/lib/response";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { courseId, courseType, topic, difficultyLevel, createdBy } = body;

//     // 🛑 Validate request data
//     if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
//       console.error("❌ Missing fields:", body);
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // 📝 Construct AI Prompt
//     const PROMPT = `Generate a Study Material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of course, List of Chapters along with summary for each chapter, Topic List in each chapter in JSON Format`;

//     // 🤖 Generate Course Layout Using AI
//     try {
//       // Send the message to the AI model
//       const aiResponse = await courseOutlineAIModel.sendMessage(PROMPT);

//       // Extract the text from the Gemini model response
//       // Based on your model configuration, the response should have a 'text' property
//       const responseText = await aiResponse.response.text();
//       console.log("✅ Raw AI Response Text:", responseText);

//       if (!responseText) {
//         return NextResponse.json(
//           { error: "AI failed to generate response text" },
//           { status: 500 }
//         );
//       }

//       console.log("AI Response text sample:", responseText.substring(0, 100));

//       // Process the response - for Gemini models, we need to handle
//       // responses that might include code blocks with ```json
//       let parsedContent;
//       try {
//         // Clean up the response text - remove any ```json and ``` markers
//         let cleanedText = responseText.replace(/```(json|html)?/g, "").trim();

//         // Parse the JSON content
//         parsedContent = JSON.parse(cleanedText);
//       } catch (parseError) {
//         console.error("❌ JSON Parsing Error:", parseError.message);
//         console.error("Raw text:", responseText);
//         return NextResponse.json(
//           { error: "Failed to parse AI response as JSON", rawText: responseText.substring(0, 500) },
//           { status: 500 }
//         );
//       }

//       // 💾 Save to Database
//       const dbResult = await db
//         .insert(STUDY_MATERIAL_TABLE)
//         .values({
//           courseId,
//           courseType,
//           createdBy,
//           topic,
//           courseLayout: parsedContent,
//         })
//         .returning("*");

//       console.log("✅ DB Inserted successfully");

//       if (!dbResult || dbResult.length === 0) {
//         return NextResponse.json(
//           { error: "Failed to insert study material into database" },
//           { status: 500 }
//         );
//       }

//       // Trigger the Inngest function to generate chapter notes
//       try {
//         const result = await inngest.send({
//           name: "notes.generate",
//           data: {
//             course: dbResult[0], // Use the first result
//           },
//         });
//         console.log("Inngest event sent");
//       } catch (inngestError) {
//         console.error("Warning: Inngest event failed:", inngestError.message);
//         // Continue anyway since the DB insertion was successful
//       }

//       return NextResponse.json({
//         success: true,
//         data: dbResult[0],
//         message: "Study material created successfully"
//       });
//     } catch (aiError) {
//       console.error("🔥 AI Service Error:", aiError.message);
//       return NextResponse.json(
//         { error: "AI Service Error", details: aiError.message },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("🔥 Internal Server Error:", error.message);
//     return NextResponse.json(
//       { error: "Internal Server Error", details: error.message },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const { courseId, courseType, topic, difficultyLevel, createdBy } = body;

    // 🛑 Validate request data
    if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
      console.error("❌ Missing fields:", body);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 📝 Construct AI Prompt
    const PROMPT = `Generate a Study Material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of course, List of Chapters along with summary and Emoji icon for each chapter, Topic List in each chapter in JSON Format`;

    // 🤖 Generate Course Layout Using AI
    try {
      // Send the message to the AI model
      const aiResponse = await courseOutlineAIModel.sendMessage(PROMPT);

      // Extract the text from the Gemini model response
      const rawText = await aiResponse.response.text();
      if (!rawText) {
        return NextResponse.json(
          { error: "AI failed to generate response text" },
          { status: 500 }
        );
      }

      let parsedContent;
      try {
        let cleanedText = rawText.replace(/```(json)?/g, "").trim();
        parsedContent = JSON.parse(cleanedText);
      } catch (err) {
        return NextResponse.json(
          { error: "Failed to parse AI response", rawText: rawText },
          { status: 500 }
        );
      }

      // 💾 Save to Database
      const dbResult = await db
        .insert(STUDY_MATERIAL_TABLE)
        .values({
          courseId: courseId,
          courseType: courseType,
          createdBy: createdBy,
          topic: topic,
          courseLayout: parsedContent,
        })
        .returning({ resp: STUDY_MATERIAL_TABLE });

      console.log("✅ DB Inserted successfully");

      //Trigger the Inngest function to generate chapter notes
      try {
        const result = await inngest.send({
          name: "notes.generate",
          data: {
            course: dbResult[0].resp, // Use the first result
          },
        });
        console.log("Inngest event sent");
      } catch (inngestError) {
        console.error("Warning: Inngest event failed:", inngestError.message);
        // Continue anyway since the DB insertion was successful
      }

      return NextResponse.json({ result: dbResult[0] });

      // Trigger the Inngest function to generate chapter notes
      // try {
      //   const result = await inngest.send({
      //     name: "notes.generate",
      //     data: {
      //       course: dbResult[0], // Use the first result
      //     },
      //   });
      //   console.log("Inngest event sent");
      // } catch (inngestError) {
      //   console.error("Warning: Inngest event failed:", inngestError.message);
      //   // Continue anyway since the DB insertion was successful
      // }

      // return NextResponse.json({
      //   success: true,
      //   data: dbResult[0],
      //   message: "Study material created successfully",
      // });
    } catch (aiError) {
      console.error("🔥 AI Service Error:", aiError.message);
      return NextResponse.json(
        { error: "AI Service Error", details: aiError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("🔥 Internal Server Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
