"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


type UpgradeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function UpgradeDialog() {
  return (
    <Dialog>
              <DialogTrigger className={cn(buttonVariants(), "mt-2 w-full")}>
            Upgrade to Pro 
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">

        <DialogHeader>
          <DialogTitle>
            Upgrade to MedEcho Pro
          </DialogTitle>

          <DialogDescription>
            This specialist is available only for Pro members.
            Upgrade to unlock premium consultations.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-4">
          <Button className="w-full">
            Upgrade Now
          </Button>

          <Button
            variant="outline"
            className="w-full"
            // onClick={() => onOpenChange(false)}
          >
            Maybe Later
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}