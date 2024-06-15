import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import { useProblem } from "../hooks/problem";
import JudgeVerdictTable from "../components/JudgeVerdictTable";
import { useRunJudge } from "../hooks/judge";
import { judgeVerdictListPipe } from "../pipes/judge";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

const defaultCode = `#include <iostream>
using namespace std;

int main() {
  string str;
  cin >> str;
  cout << "Hello! " << str << endl;
  return 0;
}`;

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const slug = useParams().slug as string;
  const [toggleToast, setToggleToast] = React.useState<boolean>(false);

  const { getProblem } = useProblem(slug, () => {
    navigate("/problem");
  });
  const { setSrc, setSrcLanguage, runJudge, getVerdicts } = useRunJudge(slug);

  useEffect(() => {
    setSrcLanguage("Cpp");
  }, [setSrcLanguage]);

  return (
    <div className="flex w-full flex-col">
      {toggleToast && (
        <div className="toast toast-center toast-top z-10">
          <div className="alert alert-success">
            <span>Judge sent successfully.</span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-6 sm:flex-row">
        <div className="bo w-full flex-1 rounded border border-base-content/10 bg-base-100 p-4">
          <h1 className="mb-8 text-4xl font-bold">{getProblem()?.title}</h1>
          <MarkdownRender
            content={getProblem()?.description || ""}
            rehypePlugin="rehypeKatex"
          />
        </div>
        <div className="flex h-[48rem] w-1/2 flex-col gap-4 rounded border border-base-content/10">
          <CodeEditor
            className="h-full overflow-hidden rounded"
            value={defaultCode}
            onChange={(value: string) => {
              setSrc(value);
            }}
          />
        </div>
      </div>
      <div className="relative">
        <button
          className="btn btn-primary absolute bottom-4 right-4 self-end"
          onClick={() => {
            runJudge(() => {
              setToggleToast(true);
              setTimeout(() => {
                setToggleToast(false);
              }, 3000);
            });
          }}
        >
          Submit
        </button>
      </div>
      {getVerdicts().length > 0 && (
        <div className="my-8">
          <JudgeVerdictTable
            data={judgeVerdictListPipe(getVerdicts())}
            className="rounded border border-base-content/10 bg-base-100"
          />
        </div>
      )}
    </div>
  );
};

export default Problem;
