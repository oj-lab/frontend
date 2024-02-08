import { postJudge } from "./rest/judge";
import {
  checkProblemSlug,
  getProblemInfo,
  getProblemInfoList,
  putProblem,
  deleteProblem,
  putProblemPackage,
} from "./rest/problem";
import { getSubmissionInfoList } from "./rest/submission";
import { getCurrentUser, postLogin } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  putProblem,
  getProblemInfo,
  getProblemInfoList,
  getSubmissionInfoList,
  checkProblemSlug,
  putProblemPackage,
  deleteProblem,
  postJudge,
];
