import React, { lazy, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import copy from "copy-to-clipboard";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeReact from "rehype-react";
import { joinClasses } from "@/utils/common";
import rehypeRaw from "rehype-raw";

interface MarkdownRenderProps {
  content: string;
}

const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((module) => ({
    default: module.Prism,
  })),
);

const MarkdownRender: React.FC<MarkdownRenderProps> = (props) => {
  return (
    <ReactMarkdown
      className="prose h-full max-w-full"
      children={props.content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw, rehypeReact]}
      components={{
        code(props) {
          const match = /language-(\w+)/.exec(props.className || "");
          const language = match ? match[1] : "text";

          return match ? (
            <CodeBlock language={language} value={String(props.children)} />
          ) : (
            <code className={joinClasses("rounded px-1", props.className)}>
              {props.children}
            </code>
          );
        },
        hr() {
          return <hr className="my-4" />;
        },
      }}
    />
  );
};

interface CodeBlockProps {
  language: string;
  value: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  const handleCopy = () => {
    copy(props.value);
  };

  return (
    <div className={joinClasses("relative", props.className)}>
      <button
        onClick={handleCopy}
        className="btn btn-xs absolute right-0 top-[-1.25px] rounded"
      >
        Copy
      </button>
      {props.language === "text" ? (
        <code>{props.value}</code>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={props.language}
            PreTag="div"
            className="!bg-transparent !p-0 font-mono [&_*]:!bg-transparent"
          >
            {props.value}
          </SyntaxHighlighter>
        </Suspense>
      )}
    </div>
  );
};

export default MarkdownRender;
