import React from "react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../../utils/common";
import { SubmissionServiceModel } from "../../typings/submission";

const columns = [
  { name: "Problem Title", uid: "problem" },
  { name: "User", uid: "user" },
  { name: "Language", uid: "language" },
  { name: "Status", uid: "status" },
];

export interface SubmissionTableProps {
  data: SubmissionServiceModel.SubmissionInfo[];
  enableRouting?: boolean;
  className?: string;
}

const SubmissionTable: React.FC<SubmissionTableProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className={joinClasses("table")} aria-label="Problem Table">
        <thead>
          <tr className="border-base-content/10">
            {columns.map((column) => {
              return <th key={column.uid}>{column.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((submission, idx) => (
            <tr
              className={joinClasses(
                props.data.length > 1 ? "border-base-content/10" : "border-0",
                props.enableRouting ? "hover cursor-pointer" : "",
              )}
              onClick={() => {
                if (props.enableRouting) navigate(submission.UID);
              }}
              key={idx}
            >
              <th>{submission.problem.title}</th>
              <td>{submission.user.name}</td>
              <td>{submission.language}</td>
              <td>
                <div
                  className={joinClasses(
                    "badge border-0 font-semibold",
                    submission.status === "finished" &&
                      submission.mainResult === "Accepted"
                      ? "bg-success/10 text-success"
                      : "",
                    submission.status === "finished" &&
                      submission.mainResult === "WrongAnswer"
                      ? "bg-error/10 text-error"
                      : "",
                    submission.status === "finished" &&
                      submission.mainResult === "CompileError"
                      ? "bg-warning/10 text-warning"
                      : "",
                    submission.status === "pending"
                      ? "bg-primary/10 text-primary"
                      : "",
                    submission.status === "running"
                      ? "bg-secondary/10 text-secondary"
                      : "",
                  )}
                >
                  {submission.status === "finished"
                    ? submission.mainResult
                    : submission.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
