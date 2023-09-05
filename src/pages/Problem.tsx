import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import Header from "../layouts/userLayout/Header";

const Problem: React.FC = () => {
  return (
    <div className="relative flex h-[100vh] flex-col">
      <Header />
      <header className="h-auto bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            A+B Problem
          </h1>
        </div>
      </header>
      <main className="flex w-full max-w-7xl flex-auto flex-col self-center">
        <div className="max-w-7xl flex-1 py-6 sm:px-6 lg:px-8 ">
          <MarkdownRender
            content={`
Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$
            `}
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
