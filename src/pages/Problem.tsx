import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import { useProblem } from "../hooks/problem";
import Header from "../layouts/userLayout/Header";

const Problem: React.FC = () => {
  const { getProblemInfo } = useProblem("hello-world");

  return (
    <div className="relative flex h-[100vh] flex-col">
      <Header />
      <header className="h-auto bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {getProblemInfo()?.title}
          </h1>
        </div>
      </header>
      <main className="flex w-full max-w-7xl flex-auto flex-col self-center">
        <div className="max-w-7xl flex-1 py-6 sm:px-6 lg:px-8 ">
          <MarkdownRender
            content={getProblemInfo()?.description || ""}
            rehypePlugin="rehypeKatex"
          />
        </div>
        <div className="flex max-w-7xl flex-grow py-6 sm:px-6 lg:px-8">
          <CodeEditor
            className="flex-1 overflow-hidden"
            value="/** ✨ Write your code here ✨ **/"
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Problem;
