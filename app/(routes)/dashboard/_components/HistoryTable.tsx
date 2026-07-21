import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sessionDetail } from "../medical-agent/[sessionId]/page";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  historyList: sessionDetail[];
};

function HistoryTable({ historyList }: Props) {
    dayjs.extend(relativeTime);
  return (
    <div>
      <Table>
        <TableCaption>Previous Consultation Reports</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Specialist</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyList.map((record: sessionDetail, id: number) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{record.selectedDoctor.specialist}</TableCell>
              <TableCell>{record.notes}</TableCell>
              <TableCell>{dayjs(record.createdOn).fromNow()}</TableCell>
              <TableCell className="text-right"><Button size={'sm'} variant={'link'} >View Report</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HistoryTable;
