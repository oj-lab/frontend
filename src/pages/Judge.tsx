import { useJudge } from "../hooks/judge";
import { useParams } from "react-router-dom";
import JudgeDetail from "../components/judge/JudgeDetail";

const Judge: React.FC = () => {
  const uid = useParams().uid as string;
  const { getJudge } = useJudge(uid);

  return <JudgeDetail data={getJudge()} />;
};

export default Judge;
