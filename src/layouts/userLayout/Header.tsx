import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  TrophyIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import UserMenu from "../UserMenu";
import { joinClasses } from "../../utils/common";
import LanguageMenu from "../LanguageMenu";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
    current: true,
    icon: <ListBulletIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
  {
    name: "Contest",
    href: "#",
    current: false,
    icon: <TrophyIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
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
    <Disclosure as="nav" className="h-auto border-b border-gray-200 bg-white">
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
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={joinClasses(
                        item.current
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex cursor-pointer items-center border-b-2 px-1 pt-1 text-sm font-medium",
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={joinClasses(
                    item.current
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                    "block cursor-pointer border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  )}
                  onClick={() => {
                    navigate(item.href);
                  }}
                >
                  {t(item.name)}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
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
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
