import UserMenu from "../UserMenu";
import LanguageMenu from "../LanguageMenu";
import DarkLightToggle from "../DarkLightToggle";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${import.meta.env.BASE_URL}avatars/male-avatar-1.svg`,
};
const userNavigation = [
  { name: "Main page", href: "/problem" },
  { name: "Sign out", href: "#" },
];

const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar border-b border-base-200 lg:px-8">
        <div className="ml-80 flex flex-1 justify-end">
          <div className="flex flex-row items-center justify-center gap-2">
            <LanguageMenu />
            <DarkLightToggle />
            <UserMenu avatarUrl={user.imageUrl} actions={userNavigation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
