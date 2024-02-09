import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import { useProblem } from "../hooks/problem";
import JudgeVerdictTable from "../components/JudgeVerdictTable";
import { useJudge } from "../hooks/judge";
import { judgeVerdictListPipe } from "../pipes/judge";
import { useEffect } from "react";
import UserLayout from "../layouts/userLayout/UserLayout";
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
  const { setSrc, setSrcLanguage, runJudge, getVerdicts } = useJudge(slug);

  useEffect(() => {
    setSrcLanguage("Cpp");
  }, [setSrcLanguage]);

  return (
    <>
      {toggleToast && (
        <div className="toast toast-center toast-top z-10">
          <div className="alert alert-success">
            <span>Submission sent successfully.</span>
          </div>
        </div>
      )}
      <UserLayout title={getProblem()?.title}>
        <div className="flex flex-1 flex-col gap-6 sm:flex-row">
          <div className="w-full flex-1">
            <MarkdownRender
              content={getProblem()?.description || ""}
              rehypePlugin="rehypeKatex"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-4">
            <CodeEditor
              className="h-full min-h-96 w-full overflow-hidden rounded-lg"
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
            <JudgeVerdictTable data={judgeVerdictListPipe(getVerdicts())} />
          </div>
        )}
      </UserLayout>
    </>
  );
};

export default Problem;
