import { postJudge } from "./rest/judge";
import {
  checkProblemSlug,
  getProblemInfo,
  getProblemInfoList,
  putProblem,
  deleteProblem,
  putProblemPackage,
} from "./rest/problem";
import { getSubmissionInfoList, getSubmissionInfo } from "./rest/submission";
import { getCurrentUser, postLogin, postSignOut } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  postSignOut,
  putProblem,
  getProblemInfo,
  getProblemInfoList,
  getSubmissionInfoList,
  getSubmissionInfo,
  checkProblemSlug,
  putProblemPackage,
  deleteProblem,
  postJudge,
];
