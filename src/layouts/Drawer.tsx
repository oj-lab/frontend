import Menu3Icon from "@/components/display/icons/tabler/Menu3Icon";
import { joinClasses } from "@/utils/common";
import { LargeWindowWidth } from "@/utils/consts";
import React, { useEffect } from "react";
import OJLabIcon from "@/components/display/icons/OJLabIcon";
import FileTextIcon from "@/components/display/icons/tabler/FileTextIcon";
import ActivityIcon from "@/components/display/icons/tabler/ActivityIcon";
import AwardIcon from "@/components/display/icons/tabler/AwardIcon";
import PackageIcon from "@/components/display/icons/tabler/PackageIcon";
import UsersIcon from "@/components/display/icons/tabler/UsersIcon";
import PageMenu, {
  PageMenuItem,
  PageMenuSection,
} from "@/components/navigation/PageMenu";
import { useDispatch, useSelector } from "react-redux";
import { setIsDrawerOpen } from "@/store/slices/window";
import { userInfoSelector } from "@/store/selectors";

const APPNavigation: PageMenuItem[] = [
  {
    name: "Problems",
    href: "/problems",
    icon: <FileTextIcon className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Judges",
    href: "/judges",
    icon: <ActivityIcon className="h-6 w-6 shrink-0" />,
  },
  {
    name: "Rank",
    href: "/rank",
    icon: <AwardIcon className="h-6 w-6 shrink-0" />,
  },
];

const AdminNavigation: PageMenuItem[] = [
  {
    name: "Problem Packages",
    href: "/admin/problems",
    icon: <PackageIcon className="h-6 w-6 shrink-0" />,
  },
  {
    name: "User Management",
    href: "/admin/users",
    icon: <UsersIcon className="h-6 w-6 shrink-0" />,
  },
];

function getPageMenuSections(isAdmin: boolean): PageMenuSection[] {
  let menuSections = [
    {
      title: "App",
      items: APPNavigation,
    },
  ];
  if (isAdmin) {
    menuSections.push({
      title: "Admin",
      items: AdminNavigation,
    });
  }
  return menuSections;
}

export interface DrawerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(true);
  const userInfo = useSelector(userInfoSelector);
  const isAdmin = userInfo?.roles?.includes("admin") ?? false;

  useEffect(() => {
    dispatch(setIsDrawerOpen(open));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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
        <div className="h-full border-r border-base-content/10 bg-base-100">
          <div className="flex flex-row px-6 py-2">
            <OJLabIcon />
            <h1 className="ml-2 self-center text-xl font-bold">OJ LAB</h1>
          </div>
          <PageMenu sections={getPageMenuSections(isAdmin)} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
