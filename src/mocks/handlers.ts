import { postJudge, getJudgeInfoList, getJudgeInfo } from "./rest/judge";
import {
  checkProblemSlug,
  getProblemInfo,
  getProblemInfoList,
  putProblem,
  deleteProblem,
  putProblemPackage,
} from "./rest/problem";
import { getCurrentUser, postLogin, postSignOut } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  postSignOut,
  putProblem,
  getProblemInfo,
  getProblemInfoList,
  getJudgeInfoList,
  getJudgeInfo,
  checkProblemSlug,
  putProblemPackage,
  deleteProblem,
  postJudge,
];
