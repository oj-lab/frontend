/* eslint-disable jsx-a11y/anchor-is-valid */
import UserMenu from "./UserMenu";
import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";
import DarkLightToggle from "./DarkLightToggle";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${import.meta.env.BASE_URL}avatars/male-avatar-1.svg`,
};
const userNavigation = [
  { name: "Admin page", href: "/admin" },
  { name: "Sign out", href: "#" },
];

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-auto">
        <a className="bold btn btn-ghost text-xl">
          <img
            className="-ml-2 block h-12 w-auto"
            src={iconPath}
            alt="OJ Lab"
          />
          OJ Lab
        </a>
      </div>
      <div className="flex-none">
        <ThemeMenu />
        <DarkLightToggle />
        <LanguageMenu />
        <UserMenu
          avatarUrl={user.imageUrl}
          userName={user.name}
          navigation={userNavigation}
        />
      </div>
    </div>
  );
}
