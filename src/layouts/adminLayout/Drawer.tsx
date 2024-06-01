import Menu3Icon from "@/components/icons/tabler/Menu3Icon";
import PackageIcon from "@/components/icons/tabler/PackageIcon";
import UsersIcon from "@/components/icons/tabler/UsersIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const navigation = [
  { name: "Problem Packages", href: "/admin/problem", icon: PackageIcon },
  { name: "User Management", href: "/admin/user", icon: UsersIcon },
];

export const Drawer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="drawer z-[1] w-fit lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content fixed p-4 lg:hidden">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-button btn-sm"
        >
          <Menu3Icon className="h-6 w-6" aria-hidden="true" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-60 bg-base-200 p-2 text-base-content">
          <div className="flex flex-row px-4 py-2">
            <img
              className="mr-2 h-12 w-auto gap-4"
              src={iconPath}
              alt="OJ Lab"
            />
            <h1 className="ml-2 self-center text-xl font-bold">OJ Lab</h1>
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
