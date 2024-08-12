import { ProblemInfo } from "./problem";
import { UserInfo } from "./user";

export interface JudgeInfo {
  UID: string;
  user: UserInfo;
  problem: ProblemInfo;
  language: string;
  code: string;
  status: string;
  verdict: string;
  submitTime: string;
  finishedTime: string;
}
export interface RunJudgeRequest {
  code: string;
  language: string;
}

export interface JudgeTimeUsage {
  secs: number;
  nanos: number;
}

export interface JudgeVerdict {
  verdict: string;
  time_usage: JudgeTimeUsage;
  memory_usage_bytes: number;
  exit_status: number;
  checker_exit_status: number;
}
