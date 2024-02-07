import { postJudge } from "./rest/judge";
import { getProblemInfo, getProblemInfoList, putProblem } from "./rest/problem";
import { getSubmissionInfoList } from "./rest/submission";
import { getCurrentUser, postLogin } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  putProblem,
  getProblemInfo,
  getProblemInfoList,
  getSubmissionInfoList,
  postJudge,
];
