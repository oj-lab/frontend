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
      className="h-full w-full"
      children={props.content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={getRehypePlugins()}
      components={{
        h1: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h1 {...props} className="my-6 text-4xl font-bold" />
        ),
        h2: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h2 {...props} className="my-5 text-3xl font-bold" />
        ),
        h3: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h3 {...props} className="my-4 text-2xl font-bold" />
        ),
        h4: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h4 {...props} className="my-3 text-xl font-bold" />
        ),
        h5: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h5 {...props} className="my-2 text-lg font-bold" />
        ),
        h6: ({ node, ...props }) => (
          // eslint-disable-next-line jsx-a11y/heading-has-content
          <h6 {...props} className="my-1 text-base font-bold" />
        ),
      }}
    />
  );
};

export default MarkdownRender;
