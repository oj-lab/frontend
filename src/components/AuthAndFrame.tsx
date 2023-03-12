import React, { useState } from "react";
import RequireAuth from "./RequireAuth";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavProps } from "./ListItems";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector, getCurrentUser } from "../store/auth/authSlice";

interface AuthAndFrameProps extends NavProps {
  children: JSX.Element;
}

export const AuthAndFrame: React.FC<AuthAndFrameProps> = (props) => {
  return (
    <RequireAuth>
      <div className="frame">
        <Navbar selectedItem={props.selectedItem} />
        <div>{props.children}</div>
        <Footer />
      </div>
    </RequireAuth>
  );
};
