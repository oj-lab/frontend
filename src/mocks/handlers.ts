import { postJudge } from "./rest/judge";
import { getProblemInfo } from "./rest/problem";
import { getCurrentUser, postLogin } from "./rest/user";

export const restHandlers = [
  getCurrentUser,
  postLogin,
  getProblemInfo,
  postJudge,
];
