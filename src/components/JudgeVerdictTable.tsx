import { joinClasses } from "@/utils/common";
import { JudgeModel } from "../typings/judge";

const columns = [
  { name: "Result", uid: "result" },
  { name: "Time Usage", uid: "time_usage" },
  { name: "Memory Usage", uid: "memory_usage" },
];

export interface JudgeVerdictTableProps {
  data: JudgeModel.JudgeVerdict[];
  className?: string;
}

const JudgeVerdictTable: React.FC<JudgeVerdictTableProps> = (props) => {
  return (
    <div className={props.className}>
      <table className="table" aria-label="Judge Verdict Table">
        <thead>
          <tr className="border-base-content/10">
            {columns.map((column) => (
              <th key={column.uid}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((judgeVerdict) => (
            <tr
              className={joinClasses(
                props.data.length > 1 ? "border-base-content/10" : "border-0",
              )}
              key={judgeVerdict.id}
            >
              <th>
                <div
                  className={`badge badge-outline ${
                    judgeVerdict.verdict === "Accepted" ? "badge-success" : ""
                  }`}
                >
                  {judgeVerdict.verdict}
                </div>
              </th>
              <td>{judgeVerdict.time_usage}</td>
              <td>{judgeVerdict.memory_usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JudgeVerdictTable;
