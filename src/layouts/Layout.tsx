import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Drawer from "./Drawer";
import PageBreadcrumbs from "@/components/navigation/PageBreadcrumbs";
import { useEffect } from "react";
import { getCurrentUserAction } from "@/store/sagas/user";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMessageSagaPattern,
  RemoveMessageSagaPattern,
} from "@/store/sagas/message";
import { messageMapSelector } from "@/store/selectors";
import { joinClasses } from "@/utils/common";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  let dispatch = useDispatch();
  let messageMap = useSelector(messageMapSelector);

  useEffect(() => {
    dispatch({
      type: AddMessageSagaPattern,
      payload: {
        id: "welcome-1",
        content: "🥰 Welcome to OJ Lab! 1",
        duration: 3000,
      },
    });
    dispatch({
      type: AddMessageSagaPattern,
      payload: {
        id: "welcome-2",
        content: "🥰 Welcome to OJ Lab! 2",
        duration: 4000,
      },
    });
    dispatch({
      type: AddMessageSagaPattern,
      payload: {
        id: "welcome-3",
        content: "🥰 Welcome to OJ Lab! 3",
        duration: 5000,
      },
    });
    dispatch({
      type: AddMessageSagaPattern,
      payload: {
        id: "welcome-4",
        content: "🥰 Welcome to OJ Lab! 4",
        duration: 6000,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrentUserAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row">
      <Drawer>
        <div className="flex flex-auto flex-col items-center overflow-auto bg-[--content-background]">
          <Header />
          <main className="flex h-full w-full flex-col items-stretch gap-2 overflow-auto px-12 pb-6 pt-6">
            <PageBreadcrumbs />
            {props.children}
            {!props.children && <Outlet />}
          </main>
          <div className="toast toast-center toast-top w-1/3 gap-1">
            {Object.keys(messageMap).map((key, idx) => {
              if (idx >= 3) return null;
              let message = messageMap[key];
              return (
                <div
                  key={key}
                  className={joinClasses(
                    "rounded border border-base-content/10 bg-base-100 px-2 py-1 text-sm font-semibold shadow-sm",
                    "hover:cursor-pointer hover:bg-base-200",
                    message.exiting ? "fade-out" : "",
                  )}
                  onClick={() => {
                    dispatch({
                      type: RemoveMessageSagaPattern,
                      payload: key,
                    });
                  }}
                >
                  <span>{message.content}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
