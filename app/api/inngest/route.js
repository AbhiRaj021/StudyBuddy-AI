import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { CreateNewUser, GenerateNotes, GenerateStudyTypeContent, helloWorld } from "@/inngest/functions";
// export const runtime = "edge";
// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld,
    CreateNewUser,
    GenerateNotes,
    GenerateStudyTypeContent,
  ],
 // 🔥 Add error handling
  onError: (error) => {
    console.error("Inngest serve error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  },
  
  // 🔥 Add environment-based configuration
  ...(process.env.NODE_ENV === 'production' && {
    landingPage: false,
    logLevel: "error"
  }),
  
  ...(process.env.NODE_ENV === 'development' && {
    landingPage: true,
    logLevel: "debug"
  })
});

// 🔥 Configure runtime for Vercel
export const runtime = "nodejs";
export const maxDuration = 60; // Reduce to 60 seconds for registration
