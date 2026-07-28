"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UpgradeDialog() {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants(), "mt-2 w-full")}>
        Start Consultation
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upgrade to MedEcho Pro</DialogTitle>

          <DialogDescription>
            This specialist is available only for Pro members. Upgrade to unlock
            premium consultations.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-4">
            <Link href="/dashboard/billing">
            <Button className="w-full">Upgrade Now</Button>
            </Link>
          

        <DialogClose className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
            Maybe Later
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
