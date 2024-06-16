import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";

interface MarkdownRenderProps {
  content: string;
  rehypePlugin?: "rehypeKatex" | "rehypeMathjax";
}

const MarkdownRender: React.FC<MarkdownRenderProps> = (props) => {
  const [rehypePlugin, setRehypePlugin] = useState<any>(null);

  useEffect(() => {
    const loadRehypePlugin = async () => {
      let module;
      if (props.rehypePlugin === "rehypeKatex") {
        module = await import("rehype-katex");
      } else if (props.rehypePlugin === "rehypeMathjax") {
        module = await import("rehype-mathjax");
      }
      setRehypePlugin(module?.default);
    };

    loadRehypePlugin();
  }, [props.rehypePlugin]);

  return (
    <ReactMarkdown
      className="prose h-full w-full"
      children={props.content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={rehypePlugin ? [rehypePlugin] : []}
    />
  );
};

export default MarkdownRender;
