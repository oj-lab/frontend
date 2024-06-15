import NewsCard from "../components/NewsCard";
import JudgeTable from "../components/judge/JudgeTable";
import { useJudgeList } from "../hooks/judge";

const JudgeList: React.FC = () => {
  const { getJudgeList } = useJudgeList();
  // useEvent();

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit rounded border border-base-content/10 bg-base-100 sm:w-2/3">
        <JudgeTable data={getJudgeList()} enableRouting />
      </div>
      <div className="w-full sm:w-1/3">
        <NewsCard />
      </div>
    </div>
  );
};

export default JudgeList;
