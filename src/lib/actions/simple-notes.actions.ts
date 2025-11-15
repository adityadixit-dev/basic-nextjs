"use server";

import { addActionFunctionCreator } from "@/utils/action-function-creator";
import { simpleNotes } from "../db/schema/simple-notes.schema";

export const createSimpleNoteAction = addActionFunctionCreator(
  simpleNotes,
  "/admin/notes",
);
