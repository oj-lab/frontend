import UserMenu from "@/components/navigation/UserMenu";
import LanguageMenu from "@/components/navigation/LanguageMenu";
import DarkLightToggle from "@/components/control/DarkLightToggle";
import { useSelector } from "react-redux";
import { userInfoSelector } from "@/store/selectors";

const userNavigation = [{ name: "Sign out", href: "#" }];

const Navbar: React.FC = () => {
  const user = useSelector(userInfoSelector);

  return (
    <div className="navbar border-b border-base-content/10 bg-base-100 lg:px-8">
      <div className="ml-80 flex flex-1 justify-end">
        <div className="flex flex-row items-center justify-center gap-2">
          <LanguageMenu />
          <DarkLightToggle />
          <UserMenu avatarUrl={user?.avatarUrl} actions={userNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
