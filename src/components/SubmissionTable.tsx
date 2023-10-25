import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";
import { SubmissionServiceModel } from "../typings/submission";

const columns = [
  { name: "PROBLEM", uid: "problem" },
  { name: "STATUS", uid: "status" },
];

export interface SubmissionTableProps {
  data: SubmissionServiceModel.SubmissionInfo[];
  showActions?: boolean;
  enableNavigation?: boolean;
  className?: string;
}

const SubmissionTable: React.FC<SubmissionTableProps> = (props) => {
  const navigate = useNavigate();

  const renderCell = React.useCallback(
    (
      submissionInfo: SubmissionServiceModel.SubmissionInfo,
      columnUid: React.Key,
    ) => {
      if (columnUid === "problem") {
        return submissionInfo.problem.title;
      }
      if (columnUid === "status") {
        return submissionInfo.status;
      }
      return null;
    },
    [],
  );

  return (
    <Table className={props.className} aria-label="Submission Table">
      <TableHeader
        columns={columns.filter((col) => {
          if (!props.showActions) {
            return col.uid !== "actions";
          }
          return true;
        })}
      >
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={props.data}>
        {(item) => (
          <TableRow
            className={joinClasses(
              props.enableNavigation && "cursor-pointer hover:bg-gray-50",
            )}
            key={item.uid}
            onClick={() => {
              if (props.enableNavigation) {
                navigate(`/submission/${item.uid}`);
              }
            }}
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SubmissionTable;
