import { Button } from "@nextui-org/react";
import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import { useProblem } from "../hooks/problem";
import JudgeVerdictTable from "../components/JudgeVerdictTable";
import { useJudge } from "../hooks/judge";
import { judgeVerdictListPipe } from "../pipes/judge";
import { useEffect } from "react";
import UserLayout from "../layouts/userLayout/UserLayout";

const defaultCode = `#include <iostream>
using namespace std;

int main() {
  string str;
  cin >> str;
  cout << "Hello! " << str << endl;
  return 0;
}`;

const Problem: React.FC = () => {
  const { getProblem } = useProblem("hello-world");
  const { setSrc, setSrcLanguage, runJudge, getVerdicts } =
    useJudge("hello-world");

  useEffect(() => {
    setSrcLanguage("Cpp");
  }, [setSrcLanguage]);

  return (
    <UserLayout title={getProblem()?.title}>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex-1 sm:w-1/2">
          <MarkdownRender
            content={getProblem()?.description || ""}
            rehypePlugin="rehypeKatex"
          />
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-1/2">
          <CodeEditor
            className="h-96 w-full overflow-hidden"
            value={defaultCode}
            onChange={(value: string) => {
              setSrc(value);
            }}
          />
          <Button
            className="relative bottom-16 right-2 self-end"
            color="primary"
            variant="solid"
            onClick={runJudge}
          >
            Submit
          </Button>
        </div>
      </div>
      {getVerdicts().length > 0 && (
        <div className="my-8">
          <JudgeVerdictTable data={judgeVerdictListPipe(getVerdicts())} />
        </div>
      )}
    </UserLayout>
  );
};

export default Problem;
