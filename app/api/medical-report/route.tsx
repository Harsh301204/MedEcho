import { client } from "@/config/openAI";
import { NextRequest, NextResponse } from "next/server";

const report_gen_prompt = `
You are an AI Medical Voice Agent that just completed a conversation with a patient.
Analyze the conversation and generate a structured medical report.

Include the following fields:

1. sessionId: a unique session identifier
2. agent: the medical specialist name (e.g., "General Physician AI")
3. user: name of the patient or "Anonymous" if not provided
4. timestamp: current date and time in ISO format
5. chiefComplaint: one-sentence summary of the main health concern
6. summary: a 2–3 sentence summary of the conversation, symptoms, and advice provided
7. symptoms: list of symptoms mentioned by the user
8. duration: how long the user has experienced the symptoms
9. severity: mild, moderate, or severe
10. medicationsMentioned: list of any medicines mentioned
11. recommendations: list of AI suggestions (e.g., rest, see a doctor)

Return the result in this JSON format:

{
  "sessionId": "string",
  "agent": "string",
  "user": "string",
  "timestamp": "ISO Date string",
  "chiefComplaint": "string",
  "summary": "string",
  "symptoms": ["symptom1", "symptom2"],
  "duration": "string",
  "severity": "string",
  "medicationsMentioned": ["med1", "med2"],
  "recommendations": ["rec1", "rec2"]
}

Only include valid fields. Respond with nothing else.
`;

export async function POST(req: NextRequest) {
  const { messages, sessionDetail, sessionId } = await req.json();

  try {
    const userInput = "AI Doctor Agent Info :" + JSON.stringify(sessionDetail) + ", conversation : " + JSON.stringify(messages)
    const apiResponse = await client.chat.completions.create({
      model: "google/gemma-4-31b-it:free",
      messages: [
        {
          role: "system" as const,
          content: JSON.stringify(report_gen_prompt),
        },
        {
          role: "user" as const,
          content: JSON.stringify(userInput)
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
    console.log("type of curr :", typeof currRes);

    const JSONres = JSON.parse(currRes);
    console.log("JSON response", JSONres);
    return NextResponse.json(JSONres);
  } catch (error) {
    console.log(error);
  }
}
