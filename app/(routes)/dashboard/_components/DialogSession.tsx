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
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Doctor } from "./DoctorAgentCard";

function DialogSession() {
  const [note, setNote] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [suggestedDoctors, setSuggestedDoctors] = useState<any>();

  const tempData = {
      id: 1,
      specialist: "General Physician",
      description: "Helps with everyday health concerns and common symptoms.",
      image: "/doctor1.png",
      agentPrompt:
        "You are a friendly General Physician AI. Greet the user and quickly ask what symptoms they’re experiencing. Keep responses short and helpful.",
      voiceId: "will",
      subscriptionRequired: false,
    }


  const onClickNext = async () => {
    setLoading(true);
    // const result = await axios.post('/api/suggest-doctors' , {
    //   notes : note
    // })
    console.log("here we are now after getting response from api");
    // console.log(result);
    // console.log(result.data.suggested_doctors);
    // setSuggestedDoctors(result.data.suggested_doctors);
    setSuggestedDoctors(tempData);
    console.log("doctor state");
    console.log(suggestedDoctors);
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants(), "mt-2 w-full")}>
        Start Consultation
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription>
            Add Symptoms Here
            <Textarea
              className="mt-1 h-50"
              onChange={(e) => setNote(e.target.value)}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
            {" "}
            Cancel{" "}
          </DialogClose>
          <Button disabled={!note} onClick={() => onClickNext()}>
            {" "}
            Next <ArrowRight />{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogSession;
