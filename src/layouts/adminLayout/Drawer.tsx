import Menu3Icon from "@/components/icons/tabler/Menu3Icon";
import PackageIcon from "@/components/icons/tabler/PackageIcon";
import UsersIcon from "@/components/icons/tabler/UsersIcon";
import { joinClasses } from "@/utils/common";
import { LargeWindowWidth } from "@/utils/const";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const navigation = [
  { name: "Problem Packages", href: "/admin/problem", icon: PackageIcon },
  { name: "User Management", href: "/admin/user", icon: UsersIcon },
];

export interface DrawerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <div
      className={joinClasses("drawer z-[1] w-fit", open && "lg:drawer-open")}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div
        className={joinClasses(
          "drawer-content fixed right-0 h-full w-full transition-[width] duration-300 ease-in-out",
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
        <ul className="menu min-h-full w-60 border border-base-200 bg-base-100 p-2 text-base-content">
          <div className="flex flex-row px-4 py-2">
            <img
              className="mr-2 h-12 w-auto gap-4"
              src={iconPath}
              alt="OJ Lab"
            />
            <h1 className="ml-2 self-center text-xl font-bold">OJ LAB</h1>
          </div>
          <li className="menu-title">{t("Admin")}</li>
          {navigation.map((item) => (
            <li key={item.name}>
              <div onClick={() => navigate(item.href)}>
                <item.icon className="h-6 w-6 shrink-0" />
                <p>{t(item.name)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
