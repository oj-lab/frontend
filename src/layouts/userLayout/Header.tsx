import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  TrophyIcon,
  ListBulletIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import UserMenu from "../UserMenu";
import { joinClasses } from "../../utils/common";
import LanguageMenu from "../LanguageMenu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Divider } from "@nextui-org/react";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${import.meta.env.BASE_URL}avatars/male-avatar-1.svg`,
};
const navigation = [
  {
    name: "Problem",
    href: "/problem",
    icon: <ListBulletIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
  {
    name: "Contest",
    href: "#",
    icon: <TrophyIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
  {
    name: "Submission",
    href: "/submission",
    icon: <RectangleStackIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
];
const userNavigation = [
  { name: "Admin page", href: "/admin" },
  { name: "Sign out", href: "#" },
];

export default function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Disclosure as="nav" className="h-auto">
      {({ open }) => (
        <>
          <div className="mx-auto px-4">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-14 w-auto lg:hidden"
                    src={iconPath}
                    alt="OJ Lab"
                  />
                  <img
                    className="hidden h-14 w-auto lg:block"
                    src={iconPath}
                    alt="OJ Lab"
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={joinClasses(
                        item.href === window.location.pathname
                          ? "border-b-2 border-primary"
                          : "",
                        "inline-flex cursor-pointer items-center px-4 font-medium text-base-content hover:bg-base-200",
                      )}
                      onClick={() => {
                        navigate(item.href);
                      }}
                    >
                      {item.icon}
                      {t(item.name)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="flex flex-row items-center justify-center gap-2">
                  <LanguageMenu />
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      className="theme-controller"
                      value="light"
                      data-set-theme="light"
                      data-key="theme"
                    />
                    {/* moon icon */}
                    <svg
                      className="swap-off h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                    {/* sun icon */}
                    <svg
                      className="swap-on h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                  </label>
                  {/* Profile dropdown */}
                  <UserMenu
                    userName={user.name}
                    avatarUrl={user.imageUrl}
                    navigation={userNavigation}
                  />
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="border-t pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
                <LanguageMenu className="ml-auto" />
              </div>
              <div className="mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className="block cursor-pointer px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    onClick={() => {
                      navigate(item.href);
                    }}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
            <Divider />
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={joinClasses(
                    item.href === window.location.pathname
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                    "block w-full cursor-pointer border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  )}
                  onClick={() => {
                    navigate(item.href);
                  }}
                >
                  {t(item.name)}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
