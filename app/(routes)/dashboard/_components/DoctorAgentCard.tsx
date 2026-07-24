import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DialogSession from "./DialogSession";
import { Badge } from "@/components/ui/badge";

export type Doctor = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId: string;
  subscriptionRequired: boolean;
};

type DoctorProps = {
    props : Doctor
}

function DoctorAgentCard({props} : DoctorProps) {
  // return <div className="flex flex-col justify-center items-center rounded-xl p-2 ">
  return <div className="relative">
  {props.subscriptionRequired && <Badge className="absolute p-3 right-0 text-md">
      Premium
    </Badge>} 
    <Image className="w-full h-[250] object-cover rounded-2xl" src={props.image} alt="img" width={200} height={300}/>
    <p className="font-bold text-xl text-center">{props.specialist}</p>
    <p className="line-clamp-2 text-sm text-gray-500 text-center">{props.description}</p>
    <DialogSession/>
  </div>;
}

export default DoctorAgentCard;
