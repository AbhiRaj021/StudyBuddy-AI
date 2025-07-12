import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId, studyType } = await req.json();

  if (studyType === "ALL") {
    // Get all study materials for overview
    const contentList = await db
      .select()
      .from(STUDY_TYPE_CONTENT_TABLE)
      .where(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId));

    // Legacy chapter notes for fallback
    const notes = await db
      .select()
      .from(CHAPTER_NOTES_TABLE)
      .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

    return NextResponse.json({
      result: {
        notes: contentList?.find(item => item.type === 'notes')?.content || notes,
        flashcards: contentList?.find(item => item.type === 'flashcards')?.content || [],
        quiz: contentList?.find(item => item.type === 'quiz')?.content || [],
        qa: contentList?.find(item => item.type === 'qa')?.content || [],
      }
    });
  }
  else if (studyType === 'notes') {
    const notesFromContent = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
      .where(and(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
        eq(STUDY_TYPE_CONTENT_TABLE?.type, 'notes')));

    if (notesFromContent.length > 0) {
      return NextResponse.json({ notes: notesFromContent[0].content });
    }

    const notes = await db.select().from(CHAPTER_NOTES_TABLE)
      .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

    return NextResponse.json({ notes });
  }
  else {
    const result = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
      .where(and(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
        eq(STUDY_TYPE_CONTENT_TABLE?.type, studyType)));
    return NextResponse.json(result.length > 0 ? result[0].content : []);
  }
}