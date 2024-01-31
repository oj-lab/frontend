import { JudgeModel } from "../typings/judge";

const columns = [
  { name: "RESULT", uid: "result" },
  { name: "TIME USAGE", uid: "time_usage" },
  { name: "MEMORY USAGE", uid: "memory_usage" },
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
          <tr>
            {columns.map((column) => (
              <th key={column.uid}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((judgeVerdict) => (
            <tr>
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
