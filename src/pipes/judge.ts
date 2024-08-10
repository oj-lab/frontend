import { formatBytes, formatNanoSeconds } from "@/utils/unit";
import * as JudgeServiceModel from "@/models/service/judge";
import * as JudgeViewModel from "@/models/view/judge";

export const judgeVerdictListPipe = (
  judgeVerdicts: JudgeServiceModel.JudgeVerdict[],
): JudgeViewModel.JudgeVerdict[] => {
  return judgeVerdicts.map((judgeVerdict) => {
    let verdict = judgeVerdictPipe(judgeVerdict);
    return verdict;
  });
};

export const judgeVerdictPipe = (
  judgeVerdict: JudgeServiceModel.JudgeVerdict,
): JudgeViewModel.JudgeVerdict => {
  let verdict = judgeVerdict.verdict;
  let time_usage = formatNanoSeconds(judgeVerdict.time_usage.nanos);
  let memory_usage = formatBytes(judgeVerdict.memory_usage_bytes);

  return { verdict, time_usage, memory_usage };
};
