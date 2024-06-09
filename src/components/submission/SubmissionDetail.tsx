import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SubmissionServiceModel } from "../../typings/submission";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import SubmissionTable from "./SubmissionTable";

export interface SubmissionDetailProps {
  data?: SubmissionServiceModel.SubmissionInfo;
  className?: string;
}

const SubmissionDetail: React.FC<SubmissionDetailProps> = (props) => {
  const [copyTip, setCopyTip] = React.useState("Copy code");

  return props.data ? (
    <div className="grid gap-2 overflow-x-auto">
      <div className="h-fit rounded border border-base-content/10 bg-base-100">
        <SubmissionTable data={[props.data]} />
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
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SubmissionDetail;
