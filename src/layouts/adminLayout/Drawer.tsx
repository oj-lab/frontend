import { Bars3Icon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const navigation = [
  { name: "Problem", href: "/admin/problem", icon: HomeIcon },
  { name: "User", href: "/admin/user", icon: UsersIcon },
];

export const Drawer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="drawer z-[1] w-fit lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content fixed p-2 lg:hidden">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          <div className="flex h-8 shrink-0 items-center justify-center align-middle">
            <img
              className="mr-2 h-8 w-auto gap-4"
              src={iconPath}
              alt="OJ Lab"
            />
            <h1 className="text-xl font-bold text-white">Admin</h1>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href}>
                <item.icon className="h-6 w-6 shrink-0" />
                {t(item.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
