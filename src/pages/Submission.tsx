import { useSubmission } from "../hooks/submission";
import UserLayout from "../layouts/userLayout/UserLayout";
import { useParams } from "react-router-dom";
import SubmissionDetail from "../components/SubmissionDetail";

const Submission: React.FC = () => {
  const uid = useParams().uid as string;
  const { getSubmission } = useSubmission(uid);

  return (
    <UserLayout>
      <SubmissionDetail data={getSubmission()} />
    </UserLayout>
  );
};

export default Submission;
