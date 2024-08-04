import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";

interface MarkdownRenderProps {
  content: string;
  rehypePlugin?: "rehypeKatex" | "rehypeMathjax";
}

const MarkdownRender: React.FC<MarkdownRenderProps> = (props) => {
  const getRehypePlugins = () =>
    props.rehypePlugin === undefined
      ? []
      : props.rehypePlugin === "rehypeKatex"
        ? [rehypeKatex]
        : [rehypeMathjax];

  return (
    <ReactMarkdown
      className="prose h-full w-full max-w-full"
      children={props.content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={getRehypePlugins()}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "text";

          return match ? (
            <CodeBlock
              language={language}
              value={String(children)}
              className={className}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
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

const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  value,
  className,
}) => {
  const handleCopy = () => {
    copy(value);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="btn btn-xs absolute right-0 rounded"
      >
        Copy
      </button>
      <code className="w-full">{value}</code>
    </div>
  );
};

export default MarkdownRender;
