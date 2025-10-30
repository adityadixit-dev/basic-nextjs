import { defineConfig } from "drizzle-kit";
import cfg from "./src/lib/config";

export default defineConfig({
  schema: "./src/lib/db/schema/**/*.ts",
  out: "./src/lib/db/migrations/prod",
  dialect: "postgresql",
  dbCredentials: {
    url: cfg.db.url,
    ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
  },
});
