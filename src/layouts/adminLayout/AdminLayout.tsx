import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Header from "./Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        onClose={() => {
          setSidebarOpen(false);
        }}
      />
      <div>
        <div className="lg:pl-80">
          <Header
            onClickSidebarButton={() => {
              setSidebarOpen(true);
            }}
          />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
