import React, { useEffect } from "react";
import ProblemTable from "@/components/display/ProblemTable";
import { useProblemInfoList } from "@/hooks/problem";
import Pagination from "@/components/control/Pagination";
import ProblemSearch, {
  DifficultySelection,
} from "@/components/control/ProblemSearch";
import { useTranslation } from "react-i18next";

const countPerPageSelections = [10, 25, 50];

const ProblemList: React.FC = () => {
  const { t } = useTranslation();
  const { getProblemInfoList, getPageCount, setPagenation, setSearch } =
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
  }, [countPerPage, page, setPagenation]);

  return (
    <div className="flex w-full flex-auto flex-col gap-2">
      <div>
        <p className="text-xs">
          {t("Select a problem to view the details and submit your solution.")}
        </p>
        <p className="text-xs">
          {t(
            "We will give you badges for your achievements in later version of OJ LAB.",
          )}
        </p>
      </div>
      <div className="h-fit w-full overflow-auto rounded border border-base-content/10 bg-base-100">
        <div className="flex w-full flex-col gap-2">
          <ProblemSearch
            onChangeTitle={(t) => {
              setSearchingTitle(t);
            }}
            onChangeDifficulty={(d) => {
              setSearchingDifficulty(d);
            }}
            onSearch={() => {
              setSearch(searchingTitle, searchingDifficulty);
              setPage(0); // Set page will trigger useEffect to refresh the list
            }}
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
