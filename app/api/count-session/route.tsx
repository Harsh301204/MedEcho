import { db } from "@/config/db";
import { sessionChatTable } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { count, eq } from "drizzle-orm";
import { NextResponse } from "next/server";




export async function GET() {
    const { userId } = await auth();

    if (!userId) {
    return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    // @ts-ignore
    const  user  = await currentUser();

    const [{total}] = await db.select({total : count()}).from(sessionChatTable).
    // @ts-ignore
    where(eq(sessionChatTable.createdBy , user?.primaryEmailAddress?.emailAddress))

    return NextResponse.json({
        total
    })
}

