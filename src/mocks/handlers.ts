import { postJudge } from "./rest/judge";
import { getProblemInfo, getProblemList } from "./rest/problem";
import { getCurrentUser, postLogin } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  getProblemInfo,
  getProblemList,
  postJudge,
];
