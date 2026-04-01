import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
    console.log(props)
  return <div className="flex flex-col justify-center items-center rounded-xl p-2">
    <Image className="w-full h-[250] object-cover rounded-2xl" src={props.image} alt="img" width={200} height={300}/>
    <h2 className="font-bold text-xl">{props.specialist}</h2>
    <p className="line-clamp-2 text-sm text-gray-500">{props.description}</p>
    <Button className="w-full mt-2">Start Consultation</Button>
  </div>;
}

export default DoctorAgentCard;
