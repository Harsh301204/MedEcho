"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Doctor } from "../../_components/DoctorAgentCard";
import { Circle, PhoneCall, PhoneOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Vapi from "@vapi-ai/web";

type sessionDetail = {
  id: number;
  sessionId: string;
  notes: string;
  report: JSON;
  selectedDoctor: Doctor;
  createdBy: string;
};

type messages = {
  role : string;
  text : string;
}

function MedicalVoiceAgent() {
  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState<sessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const [isSpeaking , setIsSpeaking] = useState(false);
  const [currRole , setCurrRole] = useState<string | null>()
  const [liveTypeScript , setLiveTypeScript] = useState<string>()
  const [messages , setMessages] = useState<messages[]>([])
  const vapiRef = useRef<Vapi | null>(null);

  const handleStartCall = () => {
    setCallStarted(true);
  };

  const handleEndCall = () => {
    setCallStarted(false);
  };

  const handleMessage = (message: any) => {
    if (message.type === "transcript") {
      const {role , transcriptType , transcript} = message
      console.log(`${message.role}: ${message.transcript}`);
      if(transcriptType == 'partial') {
        setLiveTypeScript(transcript);
        setCurrRole(role)
      } else if(transcriptType == 'final'){
        setMessages((prev : any) => [...prev , {role : role , text : transcript}])
        setLiveTypeScript("");
        setCurrRole(null)
      }

    }
  };

  useEffect(() => {
    sessionId && getSessionDetails();
  }, [sessionId]);

  useEffect(() => {
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_API_KEY!);

    vapiRef.current.on("call-start", handleStartCall);

    vapiRef.current.on("call-end", handleEndCall);

    vapiRef.current?.on("message", handleMessage);

    vapiRef.current?.on("speech-start", () => {
      console.log("Assistant started speaking");
      setCurrRole("assistant")
    });
    vapiRef.current?.on("speech-end", () => {
      console.log("Assistant stopped speaking");
      setCurrRole("user")
    });

    return () => {
      vapiRef.current?.stop();
      vapiRef.current?.off("call-start", handleStartCall);
      vapiRef.current?.off("call-end", handleEndCall);
      vapiRef.current?.off("message", handleMessage);
    };
  }, []);

  const getSessionDetails = async () => {
    const result = await axios.get("/api/session-chat?sessionId=" + sessionId);
    console.log(result.data);
    setSessionDetail(result.data);
  };

  const startCall = () => {
    vapiRef.current?.start(process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID!);
  };

  const endCall = () => {
    vapiRef.current?.stop();
  };
  return (
    <div className="p-5 border rounded-3xl  bg-secondary">
      <div className="flex justify-between">
        <h2 className="border rounded-md flex p-1 gap-2 px-2 items-center">
          <Circle
            className={`h-4 w-4 rounded-full ${callStarted ? "bg-green-500" : "bg-red-500"}`}
          />{" "}
          {callStarted ? "Connected.." : "Not Connected"}
        </h2>
        <h2 className="font-bold text-xl text-gray-500">00:00</h2>
      </div>

      {sessionDetail && (
        <div className="flex flex-col justify-center items-center mt-10">
          <Image
            src={sessionDetail?.selectedDoctor?.image}
            alt={sessionDetail?.selectedDoctor?.specialist}
            height={120}
            width={120}
            className="rounded-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-3">
            {sessionDetail.selectedDoctor.specialist}
          </h2>
          <p className="text-sm text-gray-400">AI Medical Voice Agent</p>

          <div className="mt-32 overflow-y-auto">
            {messages?.slice(-4).map((msg , index) => (
                <h2 key={index} className="text-gray-400"> {msg.role} : {msg.text}</h2>
            ))}

            {liveTypeScript && liveTypeScript?.length > 0 && <h2 className="text-lg justify-center">{currRole} : {liveTypeScript}</h2>}
          </div>
          {!callStarted ? (
            <Button className="mt-10 p-2 px-4 text-xl" onClick={startCall}>
              <PhoneCall /> Start Call
            </Button>
          ) : (
            <Button
              onClick={endCall}
              variant={"destructive"}
              className={"mt-10 p-2 px-4 text-xl"}
            >
              <PhoneOff /> Disconnect
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default MedicalVoiceAgent;
