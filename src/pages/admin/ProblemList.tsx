import { useNavigate } from "react-router-dom";
import React from "react";
import ProblemTable from "@/components/display/ProblemTable";
import { useProblemInfoList } from "@/hooks/problem";
import PlusIcon from "@/components/display/icons/tabler/PlusIcon";

const ProblemList: React.FC = () => {
  const navigate = useNavigate();
  const { getProblemInfoList } = useProblemInfoList();

  return (
    <div className="card card-bordered flex w-full flex-col rounded border-base-content/10 bg-base-100">
      <div className="flex flex-row items-center justify-between">
        <button
          className="btn btn-ghost m-4 h-10 min-h-10 rounded border border-base-content/10"
          onClick={() => {
            navigate("/admin/problems/create");
          }}
        >
          <PlusIcon className="h-4 w-4" />
          New Problem
        </button>
      </div>
      <ProblemTable data={getProblemInfoList()} showActions={true} />
    </div>
  );
};

export default ProblemList;
