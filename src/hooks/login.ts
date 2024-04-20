import { useState } from "react";
import { login } from "../api/login";

export const useLogin = () => {
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function runLogin(postLogin: () => void) {
    login(account, password)
      .then(() => {
        console.log(account);
        console.log(password);
        postLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { runLogin, setAccount, setPassword };
};
