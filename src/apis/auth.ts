import * as UserServiceModel from "@/models/service/user";
import { axiosClient } from "@/utils/axiosClient";

export async function postLogin(account: string, password: string) {
  let res = await axiosClient.post<void>("/api/v1/auth/password", {
    account: account,
    password: password,
  });
  if (res.status !== 200) {
    throw Error("failed to login");
  }
  return res;
}

export async function postSignOut() {
  let res = await axiosClient.post<void>("/api/v1/auth/logout");
  if (res.status !== 200) {
    throw Error("failed to sign out");
  }
  return res;
}

export async function getCurrentUser(): Promise<UserServiceModel.UserInfo> {
  let res = await axiosClient.get<UserServiceModel.UserInfo>(
    "/api/v1/user/current",
  );
  if (res.status !== 200) {
    throw Error("failed to get current user");
  }
  return res.data;
}

export function redirectToOAuthGitHub() {
  window.location.href = "/api/v1/auth/github";
}
