"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

function DialogSession() {
  const [note , setNote] = useState<string>();
  return (
    <Dialog>
      <DialogTrigger   className={cn(
    buttonVariants(),
    "mt-2 w-full"
  )}>
        Start Consultation
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription>
                Add Symptoms Here
                <Textarea className="mt-1 h-50" 
                onChange={(e) => setNote(e.target.value)}/>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose   className={cn(
    buttonVariants({ variant: "outline" })
  )}> Cancel </DialogClose>
            <Button disabled={!note}>Next <ArrowRight/> </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogSession;
