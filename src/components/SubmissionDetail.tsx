import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { SubmissionServiceModel } from "../typings/submission";

export interface SubmissionDetailProps {
  data?: SubmissionServiceModel.SubmissionInfo;
  className?: string;
}

const SubmissionDetail: React.FC<SubmissionDetailProps> = (props) => {
  if (props && props.data)
    console.log("lang", props.data.language.toLowerCase());
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
  ) : (
    <div></div>
  );
};

export default SubmissionDetail;
