import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { JudgeModel } from "../typings/judge";

const columns = [
  { name: "RESULT", uid: "result" },
  { name: "TIME USAGE", uid: "time_usage" },
  { name: "MEMORY USAGE", uid: "memory_usage" },
];

export interface JudgeVerdictTableProps {
  data: JudgeModel.JudgeVerdict[];
}

const JudgeVerdictTable: React.FC<JudgeVerdictTableProps> = (props) => {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={props.data}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Chip
                color={item.verdict === "Accepted" ? "success" : "danger"}
                variant="bordered"
              >
                {item.verdict}
              </Chip>
            </TableCell>
            <TableCell>{item.time_usage}</TableCell>
            <TableCell>{item.memory_usage}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default JudgeVerdictTable;
