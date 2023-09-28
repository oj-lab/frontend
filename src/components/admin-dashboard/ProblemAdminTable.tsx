import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  Chip,
  Button,
} from "@nextui-org/react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ProblemServiceModel } from "../../typings/problem";

const columns = [
  { name: "SLUG", uid: "slug" },
  { name: "TITLE", uid: "title" },
  { name: "TAGS", uid: "tags" },
  { name: "ACTIONS", uid: "actions" },
];

export interface ProblemAdminTableProps {
  data: ProblemServiceModel.ProblemInfo[];
}

const ProblemAdminTable: React.FC<ProblemAdminTableProps> = (props) => {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={props.data}>
        {(item) => (
          <TableRow key={item.slug}>
            <TableCell>{item.slug}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                {item.tags.map((tag) => (
                  <Chip variant="bordered" key={tag.slug}>
                    {tag.name}
                  </Chip>
                ))}
              </div>
            </TableCell>
            <TableCell className="flex gap-4">
              <Button
                className="min-w-7 min-h-7 h-7 w-7"
                size="sm"
                variant="light"
                color="primary"
                isIconOnly
              >
                <PencilSquareIcon className="h-5 w-5" />
              </Button>
              <Button
                className="min-w-7 min-h-7 h-7 w-7"
                size="sm"
                variant="light"
                color="danger"
                isIconOnly
              >
                <TrashIcon className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProblemAdminTable;
