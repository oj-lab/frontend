import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, authSelector } from "../store/reducers/Auth";
import RequireAuth from './RequireAuth';
import Footer from './Footer';
import Navbar from './Navbar';
import { NavProps } from './ListItems';

interface AuthAndFrameProps extends NavProps {
  children: JSX.Element
}

export const AuthAndFrame: React.FC<AuthAndFrameProps> = (props) => {
  const [currentUser, setCurrentUser] = React.useState<string | null>(null);
  const dispatch = useDispatch();

  // dispatch(signIn());

  // TODO: Get user session.
  React.useEffect(() => {
    if (currentUser === null) { }
  });

  return (
    <RequireAuth>
      <div>
        <Navbar selectedItem={props.selectedItem} />
        <div>{props.children}</div>
        <Footer />
      </div>
    </RequireAuth>
  )
}

