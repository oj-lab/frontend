import MarkdownRender from "../components/markdown/MarkdownRender";
import Header from "../layouts/userLayout/Header";

const Problem: React.FC = () => {
  return (
    <>
      <Header />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            A+B Problem
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
      </main>
    </>
  );
};

export default Problem;
