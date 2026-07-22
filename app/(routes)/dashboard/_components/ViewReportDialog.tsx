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
        </DialogHeader>

        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Session Info
            </div>
          </div>

          <div className="grid grid-cols-2 text-gray-600 gap-3 mb-1 mt-2">
            <div>
              <span className="font-bold">Doctor : </span>{" "}
              {record.selectedDoctor.specialist}
            </div>
            <div>
              <span className="font-bold">User : </span> {record.id}
            </div>
            <div>
              <span className="font-bold">Consulted On : </span>{" "}
              {dayjs(record.createdOn).format("YYYY-MM-DD , HH:mm")}
            </div>
            <div>
              <span className="font-bold">Agent : </span>{" "}
              {record.selectedDoctor.voiceId}
            </div>
          </div>

          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Chief Complaint
            </div>
          </div>

          <div className="font-bold text-l text-gray-600 mt-2">
            {/* @ts-ignore */}
            {record.report.chiefComplaint}
          </div>

          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Summary
            </div>
          </div>

          <div className="font-bold text-l text-gray-600 mt-2">
            {/* @ts-ignore */}
            {record.report.summary}
          </div>

          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Symptoms
            </div>
          </div>

          <div className="font-bold text-l text-gray-600 mt-2">
            <ul className="list-disc list-inside">
              {/* @ts-ignore */}
              {record.report.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Medications Suggested
            </div>
          </div>

          <div className="font-bold text-lg text-gray-600 mt-2">
            {/* @ts-ignore */}
            {record.report.medicationsMentioned.length > 0 ? (
              <ul className="list-disc list-inside">
                {/* @ts-ignore */}
                {record.report.medicationsMentioned.map((medication, index) => (
                  <li key={index}>{medication}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 font-bold text-sm">
                No medications suggested
              </p>
            )}
          </div>

          <div className="border-b-2 border-blue-500 mt-3">
            <div className="flex items-start font-bold text-xl text-blue-400">
              Recommendations
            </div>
          </div>

          <div className="font-bold text-l text-gray-600 mt-2">
            <ul className="list-disc list-inside">
              {/* @ts-ignore */}
              {record.report.recommendations.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReportDialog;
