import NewsCard from "../components/NewsCard";
import ProblemTable from "../components/problem/ProblemTable";
import { useProblemInfoList } from "../hooks/problem";

const ProblemList: React.FC = () => {
  const { getProblemInfoList } = useProblemInfoList();
  // useEvent();

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit rounded border border-base-content/10 bg-base-100 sm:w-2/3">
        <ProblemTable
          data={getProblemInfoList()}
          showActions={false}
          enableRouting
        />
      </div>
      <div className="w-full sm:w-1/3">
        <NewsCard />
      </div>
    </div>
  );
};

export default ProblemList;
