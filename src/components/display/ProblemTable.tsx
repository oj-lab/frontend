import * as ProblemServiceModel from "@/models/service/problem";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as ProblemService from "@/apis/problem";
import TrashIcon from "./icons/tabler/TrashIcon";
import PencilIcon from "./icons/tabler/PencilIcon";
import { joinClasses } from "@/utils/common";
import ConfirmDialog from "../control/ConfirmDialog";
import { useTranslation } from "react-i18next";
import CircleCheckIcon from "./icons/tabler/CircleCheckIcon";

export interface ProblemTableProps {
  data: ProblemServiceModel.ProblemInfo[];
  showActions?: boolean;
  className?: string;
  enableRouting?: boolean;
}

const ProblemTable: React.FC<ProblemTableProps> = (props) => {
  const { t } = useTranslation();
  const [deletingSlug, setDeletingSlug] = React.useState<string>("");

  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <table className="table" aria-label="Problem Table">
          <thead>
            <tr className="border-base-content/10">
              <th key="accepted">{t("Accepted")}</th>
              <th key="title">{t("Title")}</th>
              <th key="tags">{t("Tags")}</th>
              <th key="difficulty">{t("Difficulty")}</th>
              <th key="accept_rate">{t("Accept Rate")}</th>
              {props.showActions && <th key="actions">{t("Actions")}</th>}
            </tr>
          </thead>
          <tbody>
            {props.data.map((problemInfo) => (
              <tr
                key={problemInfo.slug}
                className={joinClasses(
                  "border-base-content/10",
                  props.enableRouting && "hover cursor-pointer",
                )}
                onClick={() => {
                  if (props.enableRouting) navigate(problemInfo.slug);
                }}
              >
                <td>
                  {problemInfo.accepted && (
                    <CircleCheckIcon className="w-6 fill-green-500 stroke-none" />
                  )}
                </td>
                <th>{problemInfo.title}</th>
                <td>
                  <ProblemTags tags={problemInfo.tags} />
                </td>
                <td>
                  <DifficultyBadge difficulty={problemInfo.difficulty} />
                </td>
                <td>
                  <span className="text-xs">
                    {problemInfo.passRate.toFixed(2)}%
                  </span>
                </td>
                {props.showActions && (
                  <td className="p-2">
                    <ProblemActions
                      onClickDelete={() => setDeletingSlug(problemInfo.slug)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog
        id="delete_confirm_modal"
        title="Confirm"
        message="Are you sure to delete this problem?"
        onClickConfirm={() => {
          ProblemService.deleteProblem(deletingSlug).then((_) => {
            window.location.reload();
          });
        }}
      />
    </>
  );
};

const ProblemTags: React.FC<{ tags: { name: string }[] }> = (props) => {
  return (
    <div className="space-x-2">
      {props.tags.map((tag) => (
        <div
          key={tag.name}
          className="badge border-0 bg-base-300 font-semibold text-base-content/80"
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
};

const DifficultyBadge: React.FC<{ difficulty: string }> = (props) => {
  return (
    <div
      className={joinClasses(
        "badge border-0 bg-base-300 font-semibold text-base-content/80",
        props.difficulty === "easy" && "bg-success/10 text-success",
        props.difficulty === "medium" && "bg-warning/10 text-warning",
        props.difficulty === "hard" && "bg-error/10 text-error",
      )}
    >
      {props.difficulty}
    </div>
  );
};

interface ActionsProps {
  onClickDelete: () => void;
}

const ProblemActions: React.FC<ActionsProps> = (props) => {
  const onClickDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    props.onClickDelete();
    const modal = document.getElementById(
      "delete_confirm_modal",
    ) as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <div className="flex space-x-1">
      <button className="btn btn-square btn-ghost btn-sm rounded hover:bg-primary/20">
        <PencilIcon className="h-5 w-5 text-primary" />
      </button>
      <button
        className="btn btn-square btn-ghost btn-sm rounded hover:bg-error/20"
        onClick={onClickDelete}
      >
        <TrashIcon className="h-5 w-5 text-error" />
      </button>
    </div>
  );
};

export default ProblemTable;
