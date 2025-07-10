import { db } from "@/configs/db";
import { inngest } from "./client";
import {
  CHAPTER_NOTES_TABLE,
  STUDY_MATERIAL_TABLE,
  STUDY_TYPE_CONTENT_TABLE,
  USER_TABLE,
} from "@/configs/schema";
import { eq } from "drizzle-orm";
import {
  generateNotesAiModel,
  GenerateQuestionAnswerAiModel,
  GenerateQuizAiModel,
  GenerateStudyTypeContentAiModel,
} from "@/configs/AiModel";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const { user } = event.data;

    return await step.run(
      "Check User and create New if not in DB",
      async () => {
        try {
          const existingUser = await db
            .select()
            .from(USER_TABLE)
            .where(
              eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress)
            );

          if (existingUser.length === 0) {
            const userResponse = await db
              .insert(USER_TABLE)
              .values({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
              })
              .returning({ id: USER_TABLE.id });
            return { status: "Success", data: userResponse };
          } else {
            return { status: "Success", data: existingUser };
          }
        } catch (error) {
          console.error("Error in user creation:", error);
          return {
            status: "Error",
            message: "Database operation failed",
            error: error,
          };
        }
      }
    );
  }
);

export const GenerateNotes = inngest.createFunction(
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    const { course } = event.data; // All Record Info

    // Generate Notes for Each Chapter With AI

    const notesResult = await step.run("Generate Chapter Notes", async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;

      // Chapters?.forEach(async (chapter) => {
      //   const PROMPT = `Generate exam material for chapter: ${JSON.stringify(
      //     chapter
      //   )}. Output should be in HTML format (without HTML, head, body, title tags).`;
      //   try {
      //     const result = await generateNotesAiModel.sendMessage(PROMPT);
      //     const aiResp = await result.response.text();
      //     await db.insert(CHAPTER_NOTES_TABLE).values({
      //       chapterId: index,
      //       courseId: course?.courseId,
      //       notes: aiResp,
      //     });
      //     index++;
      //   } catch (error) {
      //     console.error(`Error generating notes for chapter ${index}:`, error);
      //   }
      // });
      for (const chapter of Chapters) {
        const PROMPT = `Generate exam material for chapter: ${JSON.stringify(
          chapter
        )}. Output should be in HTML format (without HTML, head, body, title tags).`;
        try {
          const result = await generateNotesAiModel.sendMessage(PROMPT);
          const aiResp = await result.response.text();
          await db.insert(CHAPTER_NOTES_TABLE).values({
            chapterId: index,
            courseId: course?.courseId,
            notes: aiResp,
          });
          index++;
        } catch (error) {
          console.error(`Error generating notes for chapter ${index}:`, error);
        }
      }
      return { status: "Success", message: "Notes generation completed" };
    });

    // Update Status to 'Ready'
    const updateCourseStatusResult = await step.run(
      "Update Course Status to Ready",
      async () => {
        await db
          .update(STUDY_MATERIAL_TABLE)
          .set({
            status: "Ready",
          })
          .where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId));
        return { status: "Success", message: "Notes generation completed" };
      }
    );
  }
);

// Used to Generate FlashCards, Quiz, Question Answers

// export const GenerateStudyTypeContent = inngest.createFunction(
//   { id: "Generate Study Type Content" },
//   { event: "studyType.content" },

//   async ({ event, step }) => {
//     const { studyType, prompt, courseId, recordId } = event.data;

//     const AIResult = await step.run(
//       "Generating content using AI",
//       async () => {
//         // const result = 
//         // studuType === "Flashcard" ?
//         // await GenerateStudyTypeContentAiModel.sendMessage(prompt) :
//         // await GenerateQuizAiModel.sendMessage(prompt);
//         // await GenerateQuestionAnswerAiModel.sendMessage(prompt);
//         // const AIResult = JSON.parse(result.response.text());
//         // return AIResult;

//         let result;
//         if (studyType === "Notes") {
//           result = await generateNotesAiModel.sendMessage(prompt);
//         } else if (studyType === "Flashcard") {
//           result = await GenerateStudyTypeContentAiModel.sendMessage(prompt);
//         } else if (studyType === "Quiz") {
//           result = await GenerateQuizAiModel.sendMessage(prompt);
//         } else if (studyType === "QA") {
//           result = await GenerateQuestionAnswerAiModel.sendMessage(prompt);
//         } else {
//           throw new Error(`Invalid studyType: ${studyType}`);
//         }

//         // Replace the JSON.parse line with robust parsing:
//         const AIResult = await step.run("Parse AI Response", async () => {
//           try {
//             const rawText = result.response.text();
//             console.log("Raw AI Response:", rawText);

//             // Clean up potential markdown formatting
//             let cleanedText = rawText.replace(/```(json)?/g, "").trim();

//             const parsed = JSON.parse(cleanedText);
//             console.log("Parsed AI Result:", parsed);
//             return parsed;
//           } catch (parseError) {
//             console.error("JSON Parse Error:", parseError);
//             console.error("Raw text that failed to parse:", rawText);

//             // Fallback: try to extract JSON from text
//             const jsonMatch = rawText.match(/\{[\s\S]*\}/);
//             if (jsonMatch) {
//               try {
//                 return JSON.parse(jsonMatch[0]);
//               } catch (fallbackError) {
//                 console.error("Fallback parse also failed:", fallbackError);
//                 throw new Error(`Failed to parse AI response: ${parseError.message}`);
//               }
//             }
//             throw parseError;
//           }
//         });
//         return AIResult;
//       }
//     );

//     // Save the result

//     const DBResult = await step.run("Save Result to DB", async () => {
//       const result = await db
//         .update(STUDY_TYPE_CONTENT_TABLE)
//         .set({
//           content: AIResult,
//           status: "Ready",
//         })
//         .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));

//       return "Data Inserted SuccessFully";
//     });
//   }
// );

export const GenerateStudyTypeContent = inngest.createFunction(
  { id: "Generate Study Type Content" },
  { event: "studyType.content" },
  async ({ event, step }) => {
    const { studyType, prompt, courseId, recordId } = event.data;

    console.log("🚀 Starting Inngest function with:", { studyType, courseId, recordId });

    const AIResult = await step.run(
      "Generating content using AI",
      async () => {
        try {
          let result;
          
          console.log(`📝 Generating ${studyType} content...`);
          
          if(studyType === "Notes") {
            result = await generateNotesAiModel.sendMessage(prompt);
          } else if (studyType === "Flashcard") {
            result = await GenerateStudyTypeContentAiModel.sendMessage(prompt);
          } else if (studyType === "Quiz") {
            result = await GenerateQuizAiModel.sendMessage(prompt);
          } else if (studyType === "QA") {
            result = await GenerateQuestionAnswerAiModel.sendMessage(prompt);
          } else {
            throw new Error(`Invalid studyType: ${studyType}`);
          }

          // Robust JSON parsing
          const rawText = result.response.text();
          console.log("🤖 Raw AI Response length:", rawText.length);
          console.log("🤖 Raw AI Response preview:", rawText.substring(0, 200));
          
          // Clean up potential markdown formatting
          let cleanedText = rawText.replace(/```(json)?/g, "").trim();
          
          try {
            const parsed = JSON.parse(cleanedText);
            console.log("✅ Successfully parsed AI response");
            console.log("📊 Parsed content type:", typeof parsed);
            console.log("📊 Parsed content preview:", Array.isArray(parsed) ? `Array with ${parsed.length} items` : Object.keys(parsed).slice(0, 3));
            
            return parsed;
          } catch (parseError) {
            console.error("❌ JSON Parse Error:", parseError.message);
            console.error("❌ Failed text:", cleanedText.substring(0, 500));
            
            // Fallback: try to extract JSON from text
            const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              try {
                const fallbackParsed = JSON.parse(jsonMatch[0]);
                console.log("✅ Fallback parsing successful");
                return fallbackParsed;
              } catch (fallbackError) {
                console.error("❌ Fallback parse also failed:", fallbackError.message);
              }
            }
            
            // Last resort: return as string wrapped in array
            console.log("⚠️ Using last resort: wrapping in array");
            return [{ content: rawText, error: "Could not parse as JSON" }];
          }
        } catch (aiError) {
          console.error("❌ AI Generation Error:", aiError.message);
          throw aiError;
        }
      }
    );

    // Save the result
    const DBResult = await step.run("Save Result to DB", async () => {
      try {
        console.log("💾 Saving to database...");
        console.log("💾 Record ID:", recordId);
        console.log("💾 Content type:", typeof AIResult);
        console.log("💾 Content preview:", Array.isArray(AIResult) ? `Array with ${AIResult.length} items` : Object.keys(AIResult).slice(0, 3));
        
        const result = await db
          .update(STUDY_TYPE_CONTENT_TABLE)
          .set({
            content: AIResult,
            status: "Ready",
          })
          .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));

        console.log("✅ Database update completed");
        return "Data Inserted Successfully";
      } catch (dbError) {
        console.error("❌ Database Error:", dbError.message);
        throw dbError;
      }
    });

    console.log("🎉 Inngest function completed successfully");
    return DBResult;
  }
);
