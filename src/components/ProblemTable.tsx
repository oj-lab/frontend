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
  className?: string;
}

const ProblemTable: React.FC<ProblemTableProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className={joinClasses("table")} aria-label="Problem Table">
        <thead>
          <tr>
            {columns.map((column) => {
              if (column.uid === "actions" && !props.showActions) {
                return null;
              }
              return <th key={column.uid}>{column.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((problemInfo) => (
            <tr className="hover" onClick={() => navigate(problemInfo.slug)}>
              <th>{problemInfo.slug}</th>
              <td>{problemInfo.title}</td>
              <td>
                <div className="space-x-2">
                  {problemInfo.tags.map((tag) => (
                    <div className="badge badge-outline">{tag.name}</div>
                  ))}
                </div>
              </td>
              {props.showActions && (
                <td>
                  <Actions />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Actions: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <button className="btn btn-square btn-outline btn-primary btn-xs">
        <PencilSquareIcon className="h-4 w-4" />
      </button>
      <button className="btn btn-square btn-outline btn-error btn-xs">
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ProblemTable;
