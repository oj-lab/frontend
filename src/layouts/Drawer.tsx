import Menu3Icon from "@/components/icons/tabler/Menu3Icon";
import { joinClasses } from "@/utils/common";
import { LargeWindowWidth } from "@/utils/const";
import React from "react";
import Menu from "./Menu";

const OJLabIconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

export interface DrawerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <div
      className={joinClasses("drawer z-[1] w-fit", open && "lg:drawer-open")}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        className={joinClasses(
          "drawer-content fixed right-0 flex h-full w-full transition-[width] duration-300 ease-in-out",
          open && "lg:w-[calc(100%-15rem)]",
        )}
      >
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-button btn-sm absolute m-4 rounded"
          onClick={(e) => {
            // if lg screen, prevent the default behavior
            if (window.innerWidth >= LargeWindowWidth) {
              e.preventDefault();
              e.stopPropagation();
            }
            setOpen(!open);
          }}
        >
          <Menu3Icon className="h-6 w-6" aria-hidden="true" />
        </label>
        {props.children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="h-full border-r border-base-content/10">
          <div className="flex flex-row px-6 py-2">
            <img
              className="mr-2 h-12 w-auto gap-4"
              src={OJLabIconPath}
              alt="OJ Lab"
            />
            <h1 className="ml-2 self-center text-xl font-bold">OJ LAB</h1>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
