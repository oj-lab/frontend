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
import {
  getCurrentUser,
  postPasswordLogin,
  postSignOut,
} from "./handlers/user";
import { getRankList } from "./handlers/rank";

const restHandlers = [
  getCurrentUser,
  postPasswordLogin,
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
  getRankList,
];

export const mockServiceWorker = setupWorker(...restHandlers);
