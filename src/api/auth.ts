import { client } from "./client";

export interface UserResponse {
  username: string;
  roles: string[];
}

export async function postLogin(account: string, password: string) {
  let res = await client.post<void>("/api/v1/user/login", {
    account: account,
    password: password,
  });
  console.log(res);
  if (res.status !== 200) {
    throw Error("failed to login");
  }
  return res;
}

export async function getCurrentUser(): Promise<UserResponse> {
  let res = await client.get<UserResponse>("/api/v1/user/current");
  if (res.status !== 200) {
    throw Error("failed to get current user");
  }
  return {
    username: res.data.username,
    roles: res.data.roles,
  };
}

export function redirectToOAuthGitHub() {
  window.location.href = "/api/v1/oauth/github";
}
