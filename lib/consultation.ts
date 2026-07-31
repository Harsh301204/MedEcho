
import { db } from "@/config/db";
import { sessionChatTable } from "@/db/schema";

import { count, eq } from "drizzle-orm";

export async function getConsultationCount(userId: string) {

    const sessions = await db
    .select()
    .from(sessionChatTable)
    // @ts-ignore
    .where(eq(sessionChatTable.createdBy, userId?.primaryEmailAddress?.emailAddress));

    return sessions.length;

}