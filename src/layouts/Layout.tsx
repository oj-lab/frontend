import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Drawer from "./Drawer";
import PageBreadcrumbs from "@/components/navigation/PageBreadcrumbs";
import { useEffect } from "react";
import { getCurrentUserAction } from "@/store/sagas/user";
import { useDispatch } from "react-redux";

export interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  let dispatch = useDispatch();

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
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
