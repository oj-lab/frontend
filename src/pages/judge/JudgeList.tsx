import { useEffect, useState } from "react";
import JudgeTable from "@/components/display/JudgeTable";
import { useJudgeList } from "@/hooks/judge";

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
      <div className="h-fit w-full rounded border border-base-content/10 bg-base-100">
        <div className="flex items-center gap-2 px-4 pb-2 pt-4">
          <progress
            className="progress h-1 w-12"
            value={refreshSeconds - seconds}
            max={refreshSeconds - 1}
          />
        </div>
        <JudgeTable data={getJudgeList()} enableRouting />
      </div>
    </div>
  );
};

export default JudgeList;
