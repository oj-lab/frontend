import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { ProblemModel } from "../typings/problem";

const columns = [
  { name: "SLUG", uid: "slug" },
  { name: "TITLE", uid: "title" },
  { name: "TAGS", uid: "tags" },
];

export interface ProblemAdminTableProps {
  data: ProblemModel.ProblemInfo[];
}

const ProblemAdminTable: React.FC<ProblemAdminTableProps> = (props) => {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={props.data}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{item.slug}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                {item.tags.map((tag) => (
                  <Chip variant="bordered" key={tag.id}>
                    {tag.title}
                  </Chip>
                ))}
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProblemAdminTable;
