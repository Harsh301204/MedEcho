import React from "react";
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
import { Button } from "@/components/ui/button";
import { sessionDetail } from "../medical-agent/[sessionId]/page";

type props = {
    record : sessionDetail
}

function ViewReportDialog({record} : props) {
  return (
    <Dialog>
      <DialogTrigger 
        render={<Button size={'sm'} variant={'link'} >View Report</Button>}
      />
      <DialogContent>
        <DialogHeader>
            {/* @ts-ignore */}
          <DialogTitle className='text-2xl text-center'>
            <span>Hello</span>
            <br />
            Detailed Report
          </DialogTitle>
          <DialogDescription>
            {record.notes}
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReportDialog;
