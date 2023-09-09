import { JudgeModel, JudgeServiceModel } from "../typings/judge";
import { formatBytes, formatNanoSeconds } from "./common";

export const judgeVerdictListPipe = (
  judgeVerdicts: JudgeServiceModel.JudgeVerdict[],
) => {
  let id = 1;
  let verdicts = judgeVerdicts.map((judgeVerdict) => {
    let verdict = judgeVerdictPipe(judgeVerdict);
    verdict.id = `${id++}`;
    return verdict;
  });

  return verdicts;
};

export const judgeVerdictPipe = (
  judgeVerdict: JudgeServiceModel.JudgeVerdict,
): JudgeModel.JudgeVerdict => {
  let id = "";
  let verdict = judgeVerdict.verdict;
  let time_usage = formatNanoSeconds(judgeVerdict.time_usage.nanos);
  let memory_usage = formatBytes(judgeVerdict.memory_usage_bytes);

  return { id, verdict, time_usage, memory_usage };
};
