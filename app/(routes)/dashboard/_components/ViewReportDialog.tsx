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
import { Stethoscope, StethoscopeIcon } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type props = {
  record: sessionDetail;
};

function ViewReportDialog({ record }: props) {
    dayjs.extend(relativeTime);
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button size={"sm"} variant={"link"}>
            View Report
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          {/* @ts-ignore */}
          <DialogTitle aschild="true">
            <div className="flex justify-center gap-2">
              <StethoscopeIcon />
              <div className="text-blue-500 text-xl font-extrabold">
                MedEcho Voice Agent Report
              </div>
            </div>
          </DialogTitle>
          <div className="border-b-2 border-blue-500 mt-5">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Session Info
            </div>
          </div>

          <div className="grid grid-cols-2 text-gray-600 gap-3 mb-1">
            <div>
                <span className="font-bold">Doctor : </span> {record.selectedDoctor.specialist}
            </div>
            <div>
                <span className="font-bold">User : </span> {record.id}
            </div>
            <div>
                <span className="font-bold">Consulted On : </span> {dayjs(record.createdOn).format('YYYY-MM-DD , HH:mm')}
            </div>
            <div>
                <span className="font-bold">Agent : </span> {record.selectedDoctor.voiceId}
            </div>
          </div>

            <div className="border-b-2 border-blue-500 mt-5">
                <div className="flex items-start font-bold text-xl text-blue-400">
                    Chief Complaint
                </div>
            </div>

            <div className="font-bold text-l text-gray-600">
                {/* @ts-ignore */}
                {record.report.chiefComplaint}
            </div>
          
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
