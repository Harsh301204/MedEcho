"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useState } from "react";
import DoctorAgentCard, { Doctor } from "./DoctorAgentCard";
import SuggestedDoctorCard from "./SuggestedDoctorCard";

function DialogSession() {
  const [note, setNote] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [suggestedDoctors, setSuggestedDoctors] = useState<Doctor[]>();
  const [selectedDoctor , setSelectedDoctor] = useState<Doctor>()

  const tempData = [
    {
      id: 8,
      specialist: "Orthopedic",
      description: "Helps with bone, joint, and muscle pain.",
      image: "/doctor8.png",
      agentPrompt:
        "You are an understanding Orthopedic AI. Ask where the pain is and give short, supportive advice.",
      voiceId: "aaliyah",
      subscriptionRequired: true,
    },

    {
      id: 2,
      specialist: "Pediatrician",
      description: "Expert in children's health, from babies to teens.",
      image: "/doctor2.png",
      agentPrompt:
        "You are a kind Pediatrician AI. Ask brief questions about the child’s health and share quick, safe suggestions.",
      voiceId: "chris",
      subscriptionRequired: true,
    },
    {
      id: 2,
      specialist: "Pediatrician",
      description: "Expert in children's health, from babies to teens.",
      image: "/doctor2.png",
      agentPrompt:
        "You are a kind Pediatrician AI. Ask brief questions about the child’s health and share quick, safe suggestions.",
      voiceId: "chris",
      subscriptionRequired: true,
    }
  ];

  const onClickNext = async () => {
    setLoading(true);
    const result = await axios.post('/api/suggest-doctors' , {
      notes : note
    })
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // console.log("here we are now after getting response from api");
    // console.log(result);
    // console.log(result.data.suggested_doctors);
    setSuggestedDoctors(result.data.suggested_doctors);
    // console.log(tempData);
    // setSuggestedDoctors(tempData);
    console.log("doctor state");
    console.log(suggestedDoctors);
    // console.log(result.data.suggested_doctors);
    setLoading(false);
  };

  const onStartConsultation = async () => {
    const result = await axios.post('/api/session-chat' , {
      notes : note,
      selectedDoctor : selectedDoctor
    })

    console.log("Here is the resposne of onStart Consulataion")
    console.log(result.data)
  }
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants(), "mt-2 w-full")}>
        Start Consultation
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription>
            {!suggestedDoctors
              ? "Add patient details below."
              : "Suggested doctors based on the entered symptoms."}
          </DialogDescription>
        </DialogHeader>
        {!suggestedDoctors ? (
          <Textarea
            className="mt-4 h-50"
            onChange={(e) => setNote(e.target.value)}
          />
        ) : (
          <div>
            <h2>Select the Doctor</h2>
          <div className="grid grid-cols-2 gap-5 mt-3 mb-4">
            {Array.isArray(suggestedDoctors) &&
              suggestedDoctors.map((doctor, index) => (
                <SuggestedDoctorCard props={doctor} key={index} 
                setSelectedDoctor={() => setSelectedDoctor(doctor)} />
              ))}
          </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
            {" "}
            Cancel{" "}
          </DialogClose>

          {!suggestedDoctors ? (
            <Button disabled={!note || loading} onClick={() => onClickNext()}>
              Next{" "}
              {loading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
            </Button>
          ) : (
            <Button onClick={() => onStartConsultation()}>Start Consultation</Button>
          )}

          {/* <Button disabled={!note} onClick={() => onClickNext()}>Next</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogSession;
