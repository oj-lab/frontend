import {client} from "./client";

interface LoginResponse {
  token: string
}

export const login = async (account: string, password: string) => {
  let res = await client.post<LoginResponse>('/login', {
    account: account,
    password: password
  });
  let token = res.data.token;
  return token;
}
