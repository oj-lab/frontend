import { useParams } from "react-router-dom";
import { useJudge } from "@/hooks/judge";
import JudgeTable from "@/components/display/JudgeTable";
import MarkdownRender from "@/components/display/MarkdownRender";
import { getCodeBlock } from "@/utils/markdown";

const Judge: React.FC = () => {
  const uid = useParams().uid as string;
  const { getJudge } = useJudge(uid);

  const judge = getJudge();

  return (
    judge && (
      <div className="grid gap-4 overflow-x-auto">
        <div className="h-fit rounded border border-base-content/10 bg-base-100">
          <JudgeTable data={[judge]} />
        </div>
        <MarkdownRender content={getCodeBlock(judge.language, judge.code)} />
      </div>
    )
  );
};

export default Judge;
