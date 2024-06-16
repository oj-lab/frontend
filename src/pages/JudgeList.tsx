import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import JudgeTable from "../components/judge/JudgeTable";
import { useJudgeList } from "../hooks/judge";

const JudgeList: React.FC = () => {
  const { getJudgeList, refreshJudgeList } = useJudgeList();
  // useEvent();
  const refreshSeconds = 5;
  const [seconds, setSeconds] = useState(refreshSeconds);

  useEffect(() => {
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

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit rounded border border-base-content/10 bg-base-100 sm:w-2/3">
        <div className="flex items-center gap-2 px-4 pb-2 pt-4">
          <progress
            className="progress h-1 w-12"
            value={refreshSeconds - seconds}
            max={refreshSeconds - 1}
          />
        </div>
        <JudgeTable data={getJudgeList()} enableRouting />
      </div>
      <div className="w-full sm:w-1/3">
        <NewsCard />
      </div>
    </div>
  );
};

export default JudgeList;
