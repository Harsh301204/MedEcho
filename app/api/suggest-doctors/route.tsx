import { client } from "@/config/openAI";
import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { notes } = await req.json();
    console.log("Here are notes");
    console.log(notes);
    const apiResponse = await client.chat.completions.create({
      model: "google/gemma-4-31b-it:free",
      messages: [
        {
          role: "system" as const,
          content: JSON.stringify(AIDoctorAgents),
        },
        {
          role: "user" as const,
          content:
            "User notes/Symptoms:" +
            notes +
            ",analyze these notes and suggest list of doctors , Make sure to return response in a JSON object only",
        },
      ],
    });

    const response = apiResponse.choices[0].message || "";
    console.log("here is the response from api");
    console.log("Content:", response.content);
    console.log("Type:", typeof response.content);
    // @ts-ignore
    const currRes = response.content
      .trim()
      .replace("```json", "")
      .replace("```", "");

    console.log("Cleaned:", currRes);
    console.log("type of curr :", typeof currRes)

    const JSONres = JSON.parse(currRes);
    console.log('JSON response' ,JSONres);
    return NextResponse.json(JSONres);
  } catch (error) {
    console.log("Here we are with error");
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
