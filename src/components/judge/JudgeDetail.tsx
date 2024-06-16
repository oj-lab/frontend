import React, { Suspense, lazy, useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { JudgeServiceModel } from "../../typings/judge";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import JudgeTable from "./JudgeTable";

const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((module) => ({
    default: module.Prism,
  })),
);

export interface JudgeDetailProps {
  data?: JudgeServiceModel.JudgeInfo;
  className?: string;
}

const JudgeDetail: React.FC<JudgeDetailProps> = (props) => {
  const [copyTip, setCopyTip] = useState("Copy code");

  return props.data ? (
    <div className="grid gap-2 overflow-x-auto">
      <div className="h-fit rounded border border-base-content/10 bg-base-100">
        <JudgeTable data={[props.data]} />
      </div>
      <div className="relative overflow-x-hidden">
        <button
          style={{
            right: 0,
          }}
          className="tooltip tooltip-left absolute z-40 mr-2 mt-5"
          data-tip={copyTip}
        >
          <CopyToClipboard
            text={props.data.code}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onCopy={async () => {
              setCopyTip("Copied");
              await new Promise((resolve) => setTimeout(resolve, 500));
              setCopyTip(`Copy code`);
            }}
          >
            <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer text-white hover:text-blue-600" />
          </CopyToClipboard>
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <SyntaxHighlighter
            style={oneDark}
            language={props.data.language.toLowerCase()}
            PreTag="div"
            className="scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded mockup-code"
            showLineNumbers={true}
            useInlineStyles={true}
          >
            {props.data.code}
          </SyntaxHighlighter>
        </Suspense>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default JudgeDetail;
