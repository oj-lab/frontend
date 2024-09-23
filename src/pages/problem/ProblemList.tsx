import React, { useEffect } from "react";
import ProblemTable from "@/components/display/ProblemTable";
import { useProblemInfoList } from "@/hooks/problem";
import Pagination from "@/components/control/Pagination";
import ProblemSearch, {
  DifficultySelection,
} from "@/components/control/ProblemSearch";

const countPerPageSelections = [10, 25, 50];

const ProblemList: React.FC = () => {
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
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="flex w-full flex-col gap-2">
        <div className="h-fit w-full rounded border border-base-content/10 bg-base-100">
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
          <ProblemTable
            data={getProblemInfoList()}
            showAccepted={true}
            enableRouting
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
      </div>
    </div>
  );
};

export default ProblemList;
