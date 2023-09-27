import { Bars3Icon } from "@heroicons/react/24/outline";

import UserMenu from "../UserMenu";
import LanguageMenu from "../LanguageMenu";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "/avatars/male-avatar-1.svg",
};
const userNavigation = [
  { name: "Main page", href: "/problem" },
  { name: "Sign out", href: "#" },
];

export interface HeaderProps {
  onClickSidebarButton: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={props.onClickSidebarButton}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex flex-row items-center justify-center gap-2">
            <LanguageMenu />
            {/* Profile dropdown */}
            <UserMenu
              userName={user.name}
              avatarUrl={user.imageUrl}
              navigation={userNavigation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
