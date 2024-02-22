import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SubmissionServiceModel } from "../typings/submission";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";

export interface SubmissionDetailProps {
  data?: SubmissionServiceModel.SubmissionInfo;
  className?: string;
}

const SubmissionDetail: React.FC<SubmissionDetailProps> = (props) => {
  const [copyTip, setCopyTip] = React.useState("Copy code");
  return props.data ? (
    <div className="grid gap-2 overflow-x-auto">
      <div className="rounded border-2 border-slate-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="border">uid</th>
              <th className="border">slug</th>
              <th className="border">language</th>
              <th className="border">status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <td className="border">{props.data.uid}</td>
              <td className="border">{props.data.problem.slug}</td>
              <td className="border">{props.data.language}</td>
              <td className="border">{props.data.status}</td>
            </tr>
          </tbody>
        </table>
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
