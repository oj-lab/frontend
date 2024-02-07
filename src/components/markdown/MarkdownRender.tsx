import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

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
      className="prose h-full w-full"
      children={props.content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={getRehypePlugins()}
    />
  );
};

export default MarkdownRender;
