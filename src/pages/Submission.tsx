import { useSubmission } from "../hooks/submission";
import { useParams } from "react-router-dom";
import SubmissionDetail from "../components/submission/SubmissionDetail";

const Submission: React.FC = () => {
  const uid = useParams().uid as string;
  const { getSubmission } = useSubmission(uid);

  return <SubmissionDetail data={getSubmission()} />;
};

export default Submission;
