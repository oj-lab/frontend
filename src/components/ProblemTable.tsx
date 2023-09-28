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
import { ProblemServiceModel } from "../typings/problem";
import React from "react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";

const columns = [
  { name: "SLUG", uid: "slug" },
  { name: "TITLE", uid: "title" },
  { name: "TAGS", uid: "tags" },
  { name: "ACTIONS", uid: "actions" },
];

export interface ProblemTableProps {
  data: ProblemServiceModel.ProblemInfo[];
  showActions?: boolean;
  enableNavigation?: boolean;
}

const ProblemTable: React.FC<ProblemTableProps> = (props) => {
  const navigate = useNavigate();

  const renderCell = React.useCallback(
    (problemInfo: ProblemServiceModel.ProblemInfo, columnUid: React.Key) => {
      if (columnUid === "actions") {
        return <Actions />;
      }
      if (columnUid === "tags") {
        return <Tags tags={problemInfo.tags} />;
      }
      if (columnUid === "title") {
        return problemInfo.title;
      }
      if (columnUid === "slug") {
        return problemInfo.slug;
      }
      return null;
    },
    [],
  );

  return (
    <Table>
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
            key={item.slug}
            onClick={() => {
              if (props.enableNavigation) {
                navigate(`/problem/${item.slug}`);
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

const Actions: React.FC = () => {
  return (
    <div className="flex gap-4">
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
    </div>
  );
};

const Tags: React.FC<{ tags: ProblemServiceModel.AlgorithmTag[] }> = (
  props,
) => {
  return (
    <div className="flex gap-1">
      {props.tags.map((tag) => (
        <Chip variant="bordered" key={tag.slug}>
          {tag.name}
        </Chip>
      ))}
    </div>
  );
};

export default ProblemTable;
