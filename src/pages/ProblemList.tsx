import NewsCard from "../components/NewsCard";
import ProblemTable from "../components/ProblemTable";
import { useProblemInfoList } from "../hooks/problem";
import UserLayout from "../layouts/userLayout/UserLayout";

const ProblemList: React.FC = () => {
  const { getProblemInfoList } = useProblemInfoList();

  return (
    <UserLayout>
      <div className="flex gap-8">
        <div className="w-2/3">
          <ProblemTable
            data={getProblemInfoList()}
            showActions={false}
            enableNavigation
          />
        </div>
        <div className="w-1/3">
          <NewsCard />
        </div>
      </div>
    </UserLayout>
  );
};

export default ProblemList;
