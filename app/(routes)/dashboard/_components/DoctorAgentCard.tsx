
import { Button } from "@/components/ui/button";
import Image from "next/image";

import DialogSession from "./DialogSession";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import UpgradeDialog from "./upgradeDialog";
import DirectCall from "./DirectCall";


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

export default async function DoctorAgentCard({props} : DoctorProps) {

  const {has} = await auth();

  const hasSubscription = has({ plan: 'pro' })

  const shouldDisable = props.subscriptionRequired && (!hasSubscription)


  return <div className={`relative`}>
  {props.subscriptionRequired && <Badge className="absolute p-3 right-0 text-md">
      Premium
    </Badge>} 
    <Image className={` w-full h-[250] object-cover rounded-2xl`} src={props.image} alt="img" width={200} height={300}/>
    <p className="font-bold text-xl text-center">{props.specialist}</p>
    <p className="line-clamp-2 text-sm text-gray-500 text-center">{props.description}</p>
    {(shouldDisable) ? <UpgradeDialog/> : <DirectCall selectedDoctor={props}/>}
    
  </div>;
}


