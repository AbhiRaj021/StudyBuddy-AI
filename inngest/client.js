// import { Inngest } from "inngest";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "ai-study-material-gen" });

import { Inngest } from "inngest";

// 🔥 CRITICAL: Add proper configuration for production
export const inngest = new Inngest({ 
  id: "ai-study-material-gen",
  // Only add keys if they exist (for development compatibility)
  ...(process.env.INNGEST_EVENT_KEY && { 
    eventKey: process.env.INNGEST_EVENT_KEY 
  }),
  ...(process.env.INNGEST_SIGNING_KEY && { 
    signingKey: process.env.INNGEST_SIGNING_KEY 
  }),
});
