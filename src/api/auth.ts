import { UserServiceModel } from "@/typings/user";
import { client } from "./client";

export async function postLogin(account: string, password: string) {
  let res = await client.post<void>("/api/v1/user/login", {
    account: account,
    password: password,
  });
  if (res.status !== 200) {
    throw Error("failed to login");
  }
  return res;
}

export async function postSignOut() {
  let res = await client.post<void>("/api/v1/user/logout");
  if (res.status !== 200) {
    throw Error("failed to sign out");
  }
  return res;
}

export async function getCurrentUser(): Promise<UserServiceModel.UserInfo> {
  let res = await client.get<UserServiceModel.UserInfo>("/api/v1/user/current");
  if (res.status !== 200) {
    throw Error("failed to get current user");
  }
  return res.data;
}

export function redirectToOAuthGitHub() {
  window.location.href = "/api/v1/oauth/github";
}
