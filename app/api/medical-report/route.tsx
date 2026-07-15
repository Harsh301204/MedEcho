import { NextRequest } from "next/server";

export async function POST(req : NextRequest) {
    const {messages , sessionDetail , sessionId} = await req.json()
}