import { sessionChatTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { v4 as uuidv4 } from "uuid";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { notes, selectedDoctor } = await req.json();
    const user = await currentUser();

    const sessionId = uuidv4();
    const result = await db
      .insert(sessionChatTable)
      .values({
        sessionId,
        notes,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        selectedDoctor,
        createdOn: new Date().toString(),
      })
      .returning();

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(error)
  }
}
