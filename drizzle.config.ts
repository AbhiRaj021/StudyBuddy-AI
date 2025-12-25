import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.ts",
  dbCredentials: {
    url: "postgresql://AI-Study-Material-Gen_owner:1PWecC2QJHAi@ep-lucky-dew-a1serbwv.ap-southeast-1.aws.neon.tech/AI-Study-Material-Gen?sslmode=require",
  },
});
