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
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  let { t } = useTranslation();
  let dispatch = useDispatch();
  let messageMap = useSelector(messageMapSelector);

  useEffect(() => {
    dispatch({
      type: AddMessageSagaPattern,
      payload: {
        id: "welcome",
        content: "🥰 Welcome to OJ Lab!",
        duration: 3000,
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
            <Footer />
          </main>
          <div className="toast toast-center toast-top w-1/3 gap-1">
            {Object.keys(messageMap).map((key, idx) => {
              if (idx >= 3) return null;
              let message = messageMap[key];
              console.log("message", message);

              return (
                <div
                  key={key}
                  className={joinClasses(
                    "text-wrap rounded border border-base-content/10 px-2 py-1 text-sm font-semibold shadow-sm",
                    "hover:cursor-pointer hover:shadow-md",
                    (message.level === "info" || !message.level) &&
                      "bg-base-100",
                    message.level === "success" && "bg-light-success",
                    message.level === "warning" && "bg-light-warning",
                    message.level === "error" && "bg-light-error",
                    message.exiting && "fade-out",
                  )}
                  onClick={() => {
                    dispatch({
                      type: RemoveMessageSagaPattern,
                      payload: key,
                    });
                  }}
                >
                  <span>{t(message.content)}</span>
                  <br />
                  <span className="text-xs font-normal">
                    {message.err?.toString()}
                  </span>
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
