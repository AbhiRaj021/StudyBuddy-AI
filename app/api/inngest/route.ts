import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { CreateNewUser, GenerateNotes, GenerateStudyTypeContent, helloWorld } from "@/inngest/functions";
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser,
    GenerateNotes,
    GenerateStudyTypeContent,
  ],


  ...(process.env.NODE_ENV === 'production' && {
    landingPage: false,
    logLevel: "error"
  }),

  ...(process.env.NODE_ENV === 'development' && {
    landingPage: true,
    logLevel: "debug"
  })
});


export const runtime = "nodejs";
export const maxDuration = 60;
