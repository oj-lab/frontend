import { Outlet } from "react-router-dom";
import Header from "./Navbar";
import Drawer from "./Drawer";

const AdminLayout = () => {
  return (
    <div className="flex flex-row">
      <Drawer>
        <div className="w-full">
          <Header />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </Drawer>
    </div>
  );
};

export default AdminLayout;
