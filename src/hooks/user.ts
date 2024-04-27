import { UserResponse, getCurrentUser } from "@/api/auth";
import { useEffect, useState } from "react";

export enum UserState {
  UserSignedIn,
  UserSignedOut,
  Loading,
}

export const useUser = () => {
  const [user, setUser] = useState<UserResponse | undefined>(undefined);
  const [userState, setUserState] = useState<UserState>(UserState.Loading);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setUser(res);
        setUserState(UserState.UserSignedIn);
      })
      .catch((err) => {
        console.log(err);
        setUserState(UserState.UserSignedOut);
      });
  }, []);

  function getUser() {
    return user;
  }

  function getUserState() {
    return userState;
  }

  return { getUser, getUserState };
};
