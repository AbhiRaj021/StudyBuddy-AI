import { courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";
import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";

export async function POST(req) {
  try {
    const body = await req.json();
    const { courseId, courseType, topic, difficultyLevel, createdBy } = body;

    if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
      console.error("`Missing fields:", body);
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
        } as any)
        .returning();

      console.log("✅ DB Inserted successfully");

      //Trigger the Inngest function to generate chapter notes
      try {
        const result = await inngest.send({
          name: "notes.generate",
          data: {
            course: dbResult[0], // Use the first result
          },
        });
        console.log("Inngest event sent");
      } catch (inngestError) {
        console.error("Warning: Inngest event failed:", inngestError.message);
        // Continue anyway since the DB insertion was successful
      }

      return NextResponse.json({ result: dbResult[0] });


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
