import { logErrorToConsoleInDev } from "@/utils/log-in-dev-mode";
import { AnyPgColumn, type AnyPgTable } from "drizzle-orm/pg-core";
import { db } from "../..";
import { desc } from "drizzle-orm";

export async function getAllRows<T extends AnyPgTable>(
  dbTable: T & { updatedAt: AnyPgColumn },
): Promise<T["$inferSelect"][]> {
  try {
    const results = await db
      .select()
      .from(dbTable as AnyPgTable)
      .orderBy(desc(dbTable.updatedAt));
    return results;
  } catch (err) {
    logErrorToConsoleInDev(err);
    return [];
  }
}
