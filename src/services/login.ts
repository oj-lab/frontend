import {client} from "./client";

interface LoginResponse {
  token: string
}

interface UserResponse {
  username: string,
  roles: string[]
}

export const login = async (account: string, password: string) => {
  let res = await client.post<LoginResponse>('/login', {
    account: account,
    password: password
  });
  let token = res.data.token;
  return token;
}

export const getCurrentUser = async () => {
  let res = await client.get<UserResponse>('/user/current');
  return res.data.username
}

export const getCurrentRole = async () => {
  let res = await client.get<UserResponse>('/user/current');
  return res.data.roles
}
