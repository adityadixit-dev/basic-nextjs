import { logErrorToConsoleInDev } from "@/utils/log-in-dev-mode";
import { AnyPgTable } from "drizzle-orm/pg-core";
import { db } from "../..";

export async function addRowToDb<T extends AnyPgTable>(
  dbTable: T,
  validatedData: T["$inferInsert"],
): Promise<T["$inferSelect"] | null> {
  try {
    const [result] = await db.insert(dbTable).values(validatedData).returning();
    return result ?? null;
  } catch (err) {
    logErrorToConsoleInDev(err);
    return null;
  }
}
