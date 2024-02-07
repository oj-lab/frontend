import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ProblemServiceModel } from "../typings/problem";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  enableRouting?: boolean;
}

const ProblemTable: React.FC<ProblemTableProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className="table" aria-label="Problem Table">
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
            <tr
              key={problemInfo.slug}
              className="hover"
              onClick={() => {
                if (props.enableRouting) navigate(problemInfo.slug);
              }}
            >
              <th>{problemInfo.slug}</th>
              <td>{problemInfo.title}</td>
              <td>
                <div className="space-x-2">
                  {problemInfo.tags.map((tag) => (
                    <div key={tag} className="badge badge-outline">
                      {tag}
                    </div>
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
      <dialog id="delete_confirm_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Confirm</h3>
          <p className="py-4">Are you sure to delete this problem</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm">cancel</button>
            </form>
            <button
              className="btn btn-error btn-sm"
              onClick={() => {
                // delete problem
              }}
            >
              delete
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

const Actions: React.FC = () => {
  return (
    <>
      <div className="flex space-x-2">
        <button className="btn btn-square btn-outline btn-primary btn-xs">
          <PencilSquareIcon className="h-4 w-4" />
        </button>
        <button
          className="btn btn-square btn-outline btn-error btn-xs"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            const modal = document.getElementById(
              "delete_confirm_modal",
            ) as HTMLDialogElement;
            modal?.showModal();
          }}
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default ProblemTable;
