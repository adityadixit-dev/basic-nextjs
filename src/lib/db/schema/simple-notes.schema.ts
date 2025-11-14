import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestampsHelper } from "./timestamps.helpers";

export const simpleNotes = pgTable("simple_notes", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  title: text("title").notNull().unique(),
  note: text("note").notNull(),
  ...timestampsHelper,
});
