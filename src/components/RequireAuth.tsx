import React, { useState } from "react";
import { Navigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector, getCurrentUser, UserState, userStateSelector } from "../store/auth/authSlice";
import { embedRedirect } from "../utils/redirect";

export interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<React.PropsWithChildren<RequireAuthProps>> = (
  props
) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authState = useSelector(userStateSelector);

  React.useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  console.log("Authing:", authState, location);
  const isHomePage = location.pathname === "/";
  const navigateTo = isHomePage ? "/login" : embedRedirect(location.pathname);
  if (authState === UserState.SIGNED_OUT) {
    return <Navigate to={navigateTo} state={{ isRedirect: !isHomePage }} />
  } else if (authState === UserState.SIGNED_IN) {
    return props.children;
  } else {
    return <></>;
  }
};

export default RequireAuth;
