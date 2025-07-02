import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://AI-Study-Material-Gen_owner:1PWecC2QJHAi@ep-lucky-dew-a1serbwv.ap-southeast-1.aws.neon.tech/AI-Study-Material-Gen?sslmode=require",
  },
  // Add port configuration
  server: {
    port: 3333, // Using a different port
    hostname: 'localhost'
  }
});
