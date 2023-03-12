import { client } from "./client";

export interface UserResponse {
  username: string,
  roles: string[]
}

export async function login(account: string, password: string) {
  let res = await client.post<void>('/login', {
    account: account,
    password: password
  });
  if (res.status !== 200) {
    throw Error('failed to login')
  }
}

export async function getCurrentUser(): Promise<UserResponse> {
  let res = await client.get<UserResponse>('/user/current');
  if (res.status !== 200) {
    throw Error('failed to get current user')
  }
  return {
    username: res.data.username,
    roles: res.data.roles,
  }
}

