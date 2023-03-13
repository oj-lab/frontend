import React from "react";
import RequireAuth from "./RequireAuth";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavProps } from "./ListItems";
import { getCurrentUser } from "../services/login";
import "./frame.css";

interface AuthAndFrameProps extends NavProps {
  children: JSX.Element;
}

export const AuthAndFrame: React.FC<AuthAndFrameProps> = (props) => {
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (currentUser === null) {
      getCurrentUser().then(username => {
        setCurrentUser(username);
      }).catch(err => {
        console.log(err);
      });
    }
  });

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
