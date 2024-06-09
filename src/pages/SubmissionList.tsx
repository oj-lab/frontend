import NewsCard from "../components/NewsCard";
import SubmissionTable from "../components/submission/SubmissionTable";
import { useSubmissionList } from "../hooks/submission";

const SubmissionList: React.FC = () => {
  const { getSubmissionList } = useSubmissionList();
  // useEvent();

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="h-fit rounded border border-base-content/10 bg-base-100 sm:w-2/3">
        <SubmissionTable data={getSubmissionList()} enableRouting />
      </div>
      <div className="w-full sm:w-1/3">
        <NewsCard />
      </div>
    </div>
  );
};

export default SubmissionList;
