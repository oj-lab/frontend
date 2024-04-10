import React from "react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";
import { SubmissionServiceModel } from "../typings/submission";
import { getBadgeColorClasses } from "@/utils/color";

const columns = [
  { name: "PROBLEM", uid: "problem" },
  { name: "USER", uid: "user" },
  { name: "LANGUAGE", uid: "language" },
  { name: "STATUS", uid: "status" },
];

export interface SubmissionTableProps {
  data: SubmissionServiceModel.SubmissionInfo[];
  showActions?: boolean;
  enableNavigation?: boolean;
  className?: string;
}

const SubmissionTable: React.FC<SubmissionTableProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className={joinClasses("table")} aria-label="Problem Table">
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.uid}>{column.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((submission, idx) => (
            <tr
              className="hover"
              onClick={() => navigate(submission.UID)}
              key={idx}
            >
              <th>{submission.problem.title}</th>
              <td>{submission.user.name}</td>
              <td>{submission.language}</td>
              <td>
                <div
                  className={joinClasses(
                    "badge badge-outline",
                    getBadgeColorClasses(submission.status),
                  )}
                >
                  {submission.status}
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
