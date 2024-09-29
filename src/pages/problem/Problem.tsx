import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import CodeEditor from "@/components/input/CodeEditor";
import MarkdownRender from "@/components/display/MarkdownRender";
import { useProblem } from "@/hooks/problem";
import { useRunJudge } from "@/hooks/judge";
import { isGhPages, isMock } from "@/utils/environment";

const mockDefaultCode = `#include <iostream>
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
  const codeEditorContainer = React.useRef<HTMLDivElement | null>(null);

  const { getProblem } = useProblem(slug, () => {
    navigate("/problem");
  });
  const { setSrc, setSrcLanguage, runJudge, getSrcLanguage } =
    useRunJudge(slug);

  useEffect(() => {
    setSrcLanguage("cpp");
  }, [setSrcLanguage]);

  return (
    <div className="flex flex-col gap-4">
      {toggleToast && (
        <div className="toast toast-center toast-top z-10">
          <div className="alert alert-success">
            <span>Judge sent successfully.</span>
          </div>
        </div>
      )}

      <div className="h-fit rounded border border-base-content/10 bg-base-100 p-6">
        <h1 className="mb-8 text-center text-4xl font-bold">
          {getProblem()?.title}
        </h1>
        <MarkdownRender content={getProblem()?.description || ""} />
      </div>

      <p className="text-lg font-bold">Your Solution</p>
      <select
        className="select select-bordered select-sm w-fit rounded"
        onChange={(e) => {
          setSrcLanguage(e.target.value);
        }}
      >
        <option value={"cpp"}>C++</option>
        <option value={"python"}>Python</option>
      </select>
      <div
        className="flex h-96 flex-col gap-4 rounded border border-base-content/10"
        ref={codeEditorContainer}
      >
        <CodeEditor
          className="h-full overflow-hidden rounded"
          value={isMock() || isGhPages() ? mockDefaultCode : ""}
          onChange={(value: string) => {
            setSrc(value);
          }}
          language={getSrcLanguage()}
          parent={codeEditorContainer.current}
        />
      </div>
      <div className="relative">
        <button
          className="btn btn-primary absolute bottom-8 right-4 self-end"
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
    </div>
  );
};

export default Problem;
