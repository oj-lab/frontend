import NewsCard from "../components/NewsCard";
import ProblemTable from "../components/ProblemTable";
import { useEvent } from "../hooks/event";
import { useProblemInfoList } from "../hooks/problem";
import UserLayout from "../layouts/userLayout/UserLayout";

const ProblemList: React.FC = () => {
  const { getProblemInfoList } = useProblemInfoList();
  useEvent();

  return (
    <UserLayout>
      <div className="flex w-full flex-auto flex-col gap-8 px-4 sm:flex-row">
        <ProblemTable
          data={getProblemInfoList()}
          showActions={false}
          enableNavigation
          className="h-fit w-full"
        />
        <div className="w-full sm:w-1/3">
          <NewsCard />
        </div>
      </div>
    </UserLayout>
  );
};

export default ProblemList;
