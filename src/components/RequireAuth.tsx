import React from 'react';
import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { authSelector } from "../store/auth/authSlice";
import { embedRedirect } from '../utils/redirect';

export interface RequireAuthProps {
  children: JSX.Element
}

const RequireAuth: React.FC<
  React.PropsWithChildren<RequireAuthProps>> = (props) => {
    const authState = useSelector(authSelector);
    const location = useLocation();
    console.log('Authing:', authState, location);
    const isHomePage = location.pathname === "/";
    const navigateTo = isHomePage ? "/login" : embedRedirect(location.pathname);
    if (authState === "signedOut") {
      return <Navigate to={navigateTo} state={{ isRedirect: !isHomePage }} />
    } else {
      return props.children;
    }
  }

export default RequireAuth;
