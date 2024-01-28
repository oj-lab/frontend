import ProblemTable from "../../components/ProblemTable";
import { useProblemInfoList } from "../../hooks/problem";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showActions, setShowActions] = React.useState<boolean>(true);
  const { getProblemInfoList } = useProblemInfoList();

  return (
    <>
      <button
        className="btn btn-circle btn-primary absolute bottom-6 right-6"
        onClick={() => {
          navigate("/admin/new/problem");
        }}
      >
        <PlusIcon className="h-6 w-6" />
      </button>

      <div className="flex flex-col gap-4">
        <label className="label w-fit cursor-pointer space-x-4">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={showActions}
            onClick={() => {
              setShowActions(!showActions);
            }}
          />
          <span className="label-text">{t("Show actions")}</span>
        </label>
        <ProblemTable data={getProblemInfoList()} showActions={showActions} />
      </div>
    </>
  );
};

export default Problem;
