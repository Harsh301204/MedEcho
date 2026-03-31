import { db } from "@/config/db";
import { usersTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// Here we are on server side , so we can directly access current user using CurrentUser which is provided by clerk

export async function POST(req : NextRequest) {
    const user = await currentUser();

    if(!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const clerkId = user.id;
    const email = user.primaryEmailAddress?.emailAddress;
    const name = user.fullName ?? "Anonymous";

    if(!email) {
        return NextResponse.json({error : "Email Missing"} , {status : 401})
    }


    try {
        // check if user already exists in our Database or not
        const users = await db.select().from(usersTable).where(eq(usersTable.clerkId , clerkId));

        if(users?.length == 0) {
            // if not , then we will create new user 
            const result = await db.insert(usersTable).values({
                name : name,
                clerkId: clerkId,
                email: email
            }).returning()


            return NextResponse.json(result[0]);
        }

        return NextResponse.json(users[0]);
        
    } catch (error) {
        return NextResponse.json(error);
    }


}