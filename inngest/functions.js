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

      Chapters?.forEach(async (chapter) => {
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
      });
      return { status: "Success", message: "Notes generation completed" };
    });
    // const notesResult = await step.run("Generate Chapter Notes", async () => {
    //   const Chapters = course?.courseLayout?.chapters;

    //   if (!Chapters || Chapters.length === 0) {
    //     throw new Error("No chapters found in course layout.");
    //   }

    //   let index = 0;
    //   for (const chapter of Chapters) {
    //     const PROMPT = `Generate exam material for chapter: ${JSON.stringify(
    //       chapter
    //     )}. Output should be in HTML format (without HTML, head, body, title tags).`;

    //       try {
    //         const result = await generateNotesAiModel.sendMessage(PROMPT);
    //         const aiResp = result.response.text();

    //         await db.insert(CHAPTER_NOTES_TABLE).values({
    //           chapterId: index,
    //           courseId: course?.courseId,
    //           notes: aiResp,
    //         });
    //         index++;
    //       } catch (error) {
    //         console.error(`Error generating notes for chapter ${index}:`, error);
    //       }
    //   };
    //   return "Completed";
    // });

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

export const GenerateStudyTypeContent = inngest.createFunction(
  { id: "Generate Study Type Content" },
  { event: "studyType.content" },

  async ({ event, step }) => {
    const { studyType, prompt, courseId, recordId } = event.data;

    const AIResult = await step.run(
      "Generating content using AI",
      async () => {
        // const result = 
        // studuType === "Flashcard" ?
        // await GenerateStudyTypeContentAiModel.sendMessage(prompt) :
        // await GenerateQuizAiModel.sendMessage(prompt);
        // await GenerateQuestionAnswerAiModel.sendMessage(prompt);
        // const AIResult = JSON.parse(result.response.text());
        // return AIResult;

        let result;
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

        const AIResult = JSON.parse(result.response.text());
        return AIResult;
      }
    );

    // Save the result

    const DBResult = await step.run("Save Result to DB", async () => {
      const result = await db
        .update(STUDY_TYPE_CONTENT_TABLE)
        .set({
          content: AIResult,
          status: "Ready",
        })
        .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));

      return "Data Inserted SuccessFully";
    });
  }
);
