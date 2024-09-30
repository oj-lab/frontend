import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import ProblemTable from "@/components/display/ProblemTable";
import { useProblemInfoList } from "@/hooks/problem";
import PlusIcon from "@/components/display/icons/tabler/PlusIcon";
import ProblemSearch, {
  DifficultySelection,
} from "@/components/control/ProblemSearch";
import Pagination from "@/components/control/Pagination";

const countPerPageSelections = [10, 25, 50];

const ProblemList: React.FC = () => {
  const navigate = useNavigate();
  const { getProblemInfoList, getPageCount, setPagenation } =
    useProblemInfoList();
  const [countPerPage, setCountPerPage] = React.useState(
    countPerPageSelections[0],
  );
  const [page, setPage] = React.useState(0);
  const [searchingTitle, setSearchingTitle] = React.useState("");
  const [searchingDifficulty, setSearchingDifficulty] =
    React.useState<DifficultySelection>("all");

  useEffect(() => {
    setPagenation(countPerPage, page * countPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPerPage, page]);

  return (
    <div className="card card-bordered flex w-full flex-col rounded border-base-content/10 bg-base-100">
      <div className="flex flex-row items-center justify-between ">
        <ProblemSearch
          onChangeTitle={(t) => {
            setSearchingTitle(t);
          }}
          onChangeDifficulty={(d) => {
            setSearchingDifficulty(d);
          }}
          onSearch={() => {}}
          title={searchingTitle}
          difficulty={searchingDifficulty}
        />
        <button
          className="btn btn-ghost m-2 h-8 min-h-8 rounded border border-base-content/10"
          onClick={() => {
            navigate("/admin/problems/create");
          }}
        >
          <PlusIcon className="h-4 w-4" />
          New Problem
        </button>
      </div>
      <ProblemTable
        data={getProblemInfoList()}
        showActions={true}
        className={
          getProblemInfoList().length === 1
            ? ""
            : "border-b border-base-content/10"
        }
      />
      <Pagination
        page={page}
        pageCount={getPageCount(countPerPage)}
        setCountPerPage={setCountPerPage}
        countPerPage={countPerPage}
        countPerPageSelections={countPerPageSelections}
        setPage={setPage}
      />
    </div>
  );
};

export default ProblemList;
