import { ProblemServiceModel } from "../../typings/problem";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProblemService } from "@/api/problem";
import TrashIcon from "../icons/tabler/TrashIcon";
import PencilIcon from "../icons/tabler/PencilIcon";
import { joinClasses } from "@/utils/common";

const columns = [
  { name: "Title", uid: "title" },
  { name: "Tags", uid: "tags" },
  { name: "Actions", uid: "actions" },
];

export interface ProblemTableProps {
  data: ProblemServiceModel.ProblemInfo[];
  showActions?: boolean;
  className?: string;
  enableRouting?: boolean;
}

const ProblemTable: React.FC<ProblemTableProps> = (props) => {
  const [deletingSlug, setDeletingSlug] = React.useState<string>("");

  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className="table" aria-label="Problem Table">
        <thead>
          <tr className="border-base-content/10">
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
              className={joinClasses(
                "border-base-content/10",
                props.enableRouting ? "hover cursor-pointer" : "",
              )}
              onClick={() => {
                if (props.enableRouting) navigate(problemInfo.slug);
              }}
            >
              <th>{problemInfo.title}</th>
              <td>
                <div className="space-x-2">
                  {problemInfo.tags.map((tag) => (
                    <div
                      key={tag.name}
                      className="badge border-0 bg-base-300 font-semibold text-base-content/80"
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
              </td>
              {props.showActions && (
                <td className="p-2">
                  <Actions
                    onClickDelete={() => setDeletingSlug(problemInfo.slug)}
                  />
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
                ProblemService.deleteProblem(deletingSlug).then((_) => {
                  window.location.reload();
                });
                const modal = document.getElementById(
                  "delete_confirm_modal",
                ) as HTMLDialogElement;
                modal?.close();
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

interface ActionsProps {
  onClickDelete: () => void;
}

const Actions: React.FC<ActionsProps> = (props) => {
  return (
    <>
      <div className="flex space-x-1">
        <button className="btn btn-square btn-ghost btn-sm rounded hover:bg-primary/20">
          <PencilIcon className="h-5 w-5 text-primary" />
        </button>
        <button
          className="btn btn-square btn-ghost btn-sm rounded hover:bg-error/20"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            props.onClickDelete();
            const modal = document.getElementById(
              "delete_confirm_modal",
            ) as HTMLDialogElement;
            modal?.showModal();
          }}
        >
          <TrashIcon className="h-5 w-5 text-error" />
        </button>
      </div>
    </>
  );
};

export default ProblemTable;
