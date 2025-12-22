import { Inngest } from "inngest";

export const inngest = new Inngest({ 
  id: "ai-study-material-gen",
  ...(process.env.INNGEST_EVENT_KEY && { 
    eventKey: process.env.INNGEST_EVENT_KEY 
  }),
  ...(process.env.INNGEST_SIGNING_KEY && { 
    signingKey: process.env.INNGEST_SIGNING_KEY 
  }),
});
