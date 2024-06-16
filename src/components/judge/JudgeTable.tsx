import React from "react";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../../utils/common";
import { JudgeServiceModel } from "../../typings/judge";
import BrandCPPIcon from "../icons/tabler/BrandCPPIcon";
import BrandPythonIcon from "../icons/tabler/BrandPythonIcon";

const columns = [
  { name: "Problem Title", uid: "problem" },
  { name: "Language", uid: "language" },
  { name: "User", uid: "user" },
  { name: "Status", uid: "status" },
];

export interface JudgeTableProps {
  data: JudgeServiceModel.JudgeInfo[];
  enableRouting?: boolean;
  className?: string;
}

const JudgeTable: React.FC<JudgeTableProps> = (props) => {
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
          {props.data.map((judge, idx) => (
            <tr
              className={joinClasses(
                props.data.length > 1 ? "border-base-content/10" : "border-0",
                props.enableRouting ? "hover cursor-pointer" : "",
              )}
              onClick={() => {
                if (props.enableRouting) navigate(judge.UID);
              }}
              key={idx}
            >
              <th>{judge.problem?.title}</th>
              <td>{RenderLanguage(judge.language)}</td>
              <td>{judge.user?.name}</td>
              <td>
                <div
                  className={joinClasses(
                    "badge border-0 font-semibold",
                    judge.status === "finished" && judge.verdict === "Accepted"
                      ? "bg-success/10 text-success"
                      : "",
                    judge.status === "finished" &&
                      judge.verdict === "WrongAnswer"
                      ? "bg-error/10 text-error"
                      : "",
                    judge.status === "finished" &&
                      judge.verdict === "CompileError"
                      ? "bg-warning/10 text-warning"
                      : "",
                    judge.status === "pending"
                      ? "bg-primary/10 text-primary"
                      : "",
                    judge.status === "running"
                      ? "bg-secondary/10 text-secondary"
                      : "",
                  )}
                >
                  {judge.status === "finished" ? judge.verdict : judge.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function RenderLanguage(language: string) {
  if (language.toLowerCase() === "cpp") {
    return (
      <div className="badge min-w-10 border-0 bg-base-300">
        <BrandCPPIcon className="h-4 w-4 stroke-base-content" />
      </div>
    );
  }
  if (language.toLowerCase() === "python") {
    return (
      <div className="badge min-w-10 border-0 bg-base-300">
        <BrandPythonIcon className="h-4 w-4 stroke-base-content" />
      </div>
    );
  }

  return (
    <div className="badge min-w-10 border-0 bg-base-300">
      <span className="text-[10px] font-semibold">
        {language.toUpperCase()}
      </span>
    </div>
  );
}

export default JudgeTable;
