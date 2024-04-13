import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { messageMapSelector } from "@/store/slices/message";
import { ADD_MESSAGE_SAGA } from "@/store/sagas/message";
import { joinClasses } from "@/utils/common";

export interface UserLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  let messageMap = useSelector(messageMapSelector);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ADD_MESSAGE_SAGA,
      payload: {
        id: "welcome",
        content: "🥰 Welcome to OJ Lab",
        duration: 3000,
      },
    });
    setTimeout(() => {
      dispatch({
        type: ADD_MESSAGE_SAGA,
        payload: {
          id: "message",
          content: "🕛 Message will fade out after several seconds",
          duration: 3000,
        },
      });
    }, 1000);
  }, [dispatch]);

  return (
    <div className="relative flex flex-1 flex-col">
      <Navbar />
      {props.title && (
        <header className="h-auto shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">{props.title}</h1>
          </div>
        </header>
      )}
      <main className="w-full max-w-7xl flex-auto flex-col self-center py-6 sm:px-6 lg:px-8">
        {props.children}
      </main>
      <div className="toast toast-end toast-bottom ">
        {Object.keys(messageMap).map((key) => {
          let message = messageMap[key];
          return (
            <div
              key={key}
              className={joinClasses(
                "neutral-content alert w-80 whitespace-normal font-bold",
                message.exiting ? "fade-out" : "",
              )}
            >
              {message.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserLayout;
