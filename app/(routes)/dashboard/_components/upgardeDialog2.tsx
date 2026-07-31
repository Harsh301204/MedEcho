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
import { Search } from "lucide-react";


export default function UpgradeDialog2() {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants(), "mt-2 w-full text-lg p-4")}>
        <Search className="w-4 h-4"/>
        Find the Right Doctor
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upgrade to MedEcho Pro</DialogTitle>

          <DialogDescription>
            This Feature is available only for Pro members. Upgrade to unlock
            AI Based Suggestions
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
