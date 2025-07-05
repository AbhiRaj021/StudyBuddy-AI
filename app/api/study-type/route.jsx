import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId, studyType } = await req.json();

  if (studyType == "ALL") {
    const notes = await db
      .select()
      .from(CHAPTER_NOTES_TABLE)
      .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

    // Get all other study type records
    const contentList = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
      .where(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId));
    
    // Log the full content list to check what's actually in the database
    console.log("Raw contentList from DB:", JSON.stringify(contentList, null, 2));

    // Fix case sensitivity issues by normalizing to lowercase for comparison
    const result = {
      notes: contentList?.find(item => item.type.toLowerCase() === 'notes')?.content || notes, // ✅ FIXED: Look for 'notes' type and fallback to CHAPTER_NOTES_TABLE
      flashcards: contentList?.find(item => item.type.toLowerCase() === 'flashcards')?.content || [],
      quiz: contentList?.find(item => item.type.toLowerCase() === 'quiz')?.content || [],
      qa: contentList?.find(item => item.type.toLowerCase() === 'qa')?.content || [],
    };

    console.log("Processed result:", JSON.stringify(result, null, 2));

    return NextResponse.json({result});
  }
  else if (studyType === 'notes')
  {
    // Check both STUDY_TYPE_CONTENT_TABLE and CHAPTER_NOTES_TABLE for notes
    const notesFromContent = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
      .where(and(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
      eq(STUDY_TYPE_CONTENT_TABLE?.type, 'notes')));
    
    if (notesFromContent.length > 0) {
      return NextResponse.json({notes: notesFromContent[0].content});
    }
    
    // Fallback to chapter notes
    const notes = await db.select().from(CHAPTER_NOTES_TABLE)
    .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

    return NextResponse.json({notes});
  }
  else {
    const result = await db.select().from(STUDY_TYPE_CONTENT_TABLE)
    .where(and(eq(STUDY_TYPE_CONTENT_TABLE?.courseId, courseId),
    eq(STUDY_TYPE_CONTENT_TABLE?.type, studyType)));
    return NextResponse.json( result.length > 0 ? result[0].content : [] );
  }
}
