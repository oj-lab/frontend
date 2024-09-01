import JudgeTable from "@/components/display/JudgeTable";
import { useJudgeList } from "@/hooks/judge";
import { useTranslation } from "react-i18next";
import Pagination from "@/components/control/Pagination";
import React, { useEffect } from "react";

const countPerPageSelections = [10, 25, 50];

const JudgeList: React.FC = () => {
  const { getJudgeList, refreshJudgeList, getPageCount, setPagenation } =
    useJudgeList();
  const { t } = useTranslation();
  // useEvent();
  const refreshSeconds = 5;
  const [seconds, setSeconds] = React.useState(refreshSeconds);
  const [countPerPage, setCountPerPage] = React.useState(
    countPerPageSelections[0],
  );
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          refreshJudgeList();
          return refreshSeconds;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [refreshJudgeList]);

  useEffect(() => {
    setPagenation(countPerPage, page * countPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPerPage, page]);

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit w-full overflow-auto rounded border border-base-content/10 bg-base-100">
        <div className="flex items-center justify-between gap-2 px-4 pb-2 pt-4">
          <label className="label cursor-pointer p-0">
            <input type="checkbox" className="toggle toggle-sm" />
            <span className="label-text ml-2">
              {t("Just look at yourself")}
            </span>
          </label>
          <progress
            className="progress mr-2 h-1 w-12"
            value={refreshSeconds - seconds}
            max={refreshSeconds - 1}
          />
        </div>
        <JudgeTable data={getJudgeList()} enableRouting />
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
  );
};

export default JudgeList;
