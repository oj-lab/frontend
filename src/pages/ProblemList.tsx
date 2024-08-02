import ProblemTable from "../components/problem/ProblemTable";
import { useProblemInfoList } from "../hooks/problem";

const ProblemList: React.FC = () => {
  const { getProblemInfoList } = useProblemInfoList();
  // useEvent();

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit w-full rounded border border-base-content/10 bg-base-100">
        <ProblemTable
          data={getProblemInfoList()}
          showActions={false}
          enableRouting
        />
      </div>
    </div>
  );
};

export default ProblemList;
