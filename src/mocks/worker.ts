import { setupWorker } from "msw/browser";
import { postJudge, getJudgeInfoList, getJudgeInfo } from "./handlers/judge";
import {
  checkProblemSlug,
  getProblemInfo,
  getProblemInfoList,
  putProblem,
  deleteProblem,
  putProblemPackage,
} from "./handlers/problem";
import { getCurrentUser, postLogin, postSignOut } from "./handlers/user";

const restHandlers = [
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

export const mockServiceWorker = setupWorker(...restHandlers);
