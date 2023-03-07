import {client} from "./client";

interface LoginResponse {
  token: string
}

export const login = (account: string, password: string) => {
  console.log(233, account, password);
  client.post<LoginResponse>('/login', {
    account: account,
    password: password
  })
  .then(res => {
    console.log('token:', res.data.token);
  })
}
