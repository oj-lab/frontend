import ProblemTable from "../../components/ProblemTable";
import { useProblemInfoList } from "../../hooks/problem";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";
import PlusIcon from "@/components/icons/tabler/PlusIcon";

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showActions, setShowActions] = React.useState<boolean>(true);
  const { getProblemInfoList } = useProblemInfoList();

  return (
    <>
      <div className="card card-bordered flex flex-col rounded bg-base-100">
        <div className="flex flex-row items-center justify-between">
          <label className="label w-fit cursor-pointer space-x-4 px-3">
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={showActions}
              onChange={() => {
                setShowActions(!showActions);
              }}
            />
            <span className="label-text">{t("Show actions")}</span>
          </label>
          <button
            className="border-1 btn btn-ghost m-4 h-10 min-h-10 rounded border-base-300"
            onClick={() => {
              navigate("/admin/new/problem");
            }}
          >
            <PlusIcon className="h-4 w-4" />
            New Problem
          </button>
        </div>
        <ProblemTable data={getProblemInfoList()} showActions={showActions} />
      </div>
    </>
  );
};

export default Problem;
