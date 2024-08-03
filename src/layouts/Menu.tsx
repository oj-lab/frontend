import ActivityIcon from "@/components/icons/tabler/ActivityIcon";
import AwardIcon from "@/components/icons/tabler/AwardIcon";
import FileTextIcon from "@/components/icons/tabler/FileTextIcon";
import PackageIcon from "@/components/icons/tabler/PackageIcon";
import UsersIcon from "@/components/icons/tabler/UsersIcon";
import { useUser } from "@/hooks/user";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Problems", href: "/problem", icon: FileTextIcon },
  { name: "Judges", href: "/judge", icon: ActivityIcon },
  { name: "Rank", href: "/rank", icon: AwardIcon },
];

const adminNavigation = [
  { name: "Problem Packages", href: "/admin/problem", icon: PackageIcon },
  { name: "User Management", href: "/admin/user", icon: UsersIcon },
];

function isCurrentPath(path: string) {
  return window.location.pathname === path;
}

export const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { getUser } = useUser();
  const isAdmin = getUser()?.roles.includes("admin");

  return (
    <ul className="menu w-60 gap-1 bg-base-100 p-2 text-base-content">
      <li className="menu-title">{t("Apps")}</li>
      {navigation.map((item) => (
        <li key={item.name}>
          <div
            onClick={() => navigate(item.href)}
            className={isCurrentPath(item.href) ? "active" : ""}
          >
            <item.icon className="h-6 w-6 shrink-0" />
            <p>{t(item.name)}</p>
          </div>
        </li>
      ))}
      {isAdmin && (
        <>
          <li className="menu-title">{t("Admin")}</li>
          {adminNavigation.map((item) => (
            <li key={item.name}>
              <div
                onClick={() => navigate(item.href)}
                className={isCurrentPath(item.href) ? "active" : ""}
              >
                <item.icon className="h-6 w-6 shrink-0" />
                <p>{t(item.name)}</p>
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default Menu;
