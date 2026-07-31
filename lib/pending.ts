import { db } from "@/config/db";
import { sessionChatTable } from "@/db/schema";
import { and, eq, isNull } from "drizzle-orm";

export async function deletePendingSession(userId: string) {
  await db
    .delete(sessionChatTable)
    .where(
      and(
        // @ts-ignore
        eq(sessionChatTable.createdBy, userId?.primaryEmailAddress?.emailAddress),
        isNull(sessionChatTable.report)
      )
    );
}