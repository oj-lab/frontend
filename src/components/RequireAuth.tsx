import React from "react";
import { Navigate, useLocation } from "react-router";
import { useUser, UserState } from "../hooks/user";
import { embedRedirect } from "../utils/redirect";

export interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<React.PropsWithChildren<RequireAuthProps>> = (
  props,
) => {
  const location = useLocation();
  const { getUserState } = useUser();
  const userState = getUserState();

  const isHomePage = location.pathname === "/";
  const navigateTo = isHomePage ? "/login" : embedRedirect(location.pathname);
  if (userState === UserState.UserSignedOut) {
    return <Navigate to={navigateTo} state={{ isRedirect: !isHomePage }} />;
  } else if (userState === UserState.UserSignedIn) {
    return props.children;
  } else {
    return <></>;
  }
};

export default RequireAuth;
