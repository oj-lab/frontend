import NewsCard from "../components/NewsCard";
import SubmissionTable from "../components/SubmissionTable";
import { useSubmissionList } from "../hooks/submission";
import UserLayout from "../layouts/userLayout/UserLayout";

const SubmissionList: React.FC = () => {
  const { getSubmissionList } = useSubmissionList();
  // useEvent();

  return (
    <UserLayout>
      <div className="flex w-full flex-auto flex-col gap-8 px-4 sm:flex-row">
        <SubmissionTable
          data={getSubmissionList()}
          showActions={false}
          enableNavigation
          className="w-full sm:w-2/3"
        />
        <div className="w-full sm:w-1/3">
          <NewsCard />
        </div>
      </div>
    </UserLayout>
  );
};

export default SubmissionList;
