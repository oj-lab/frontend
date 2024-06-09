import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Drawer from "./Drawer";
import Breadcrumbs from "@/layouts/Breadcrumbs";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <Drawer>
        <div className="flex flex-auto flex-col items-center bg-[--content-background]">
          <Header />
          <main className="flex h-full w-full flex-col items-stretch gap-2 overflow-auto px-12 pt-6">
            <Breadcrumbs />
            <Outlet />
          </main>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
