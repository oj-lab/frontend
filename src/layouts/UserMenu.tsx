import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";

export interface UserMenuProps {
  avatarUrl?: string;
  userName?: string;
  navigation?: Array<{ name: string; href: string }>;
}

/**
 * @param {string} props.avatarUrl
 * @param {string} props.userName
 * @param {Array<{ name: string, href: string }>} props.navigation The name of navigation will be translated.
 */
const UserMenu: React.FC<UserMenuProps> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="relative z-50">
        <Menu.Button className="flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src={props.avatarUrl}
            alt=""
          />
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              {props.userName}
            </span>
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {props.navigation?.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <div
                    className={joinClasses(
                      active ? "bg-gray-100" : "",
                      "block cursor-pointer px-4 py-2 text-sm text-gray-700",
                    )}
                    onClick={() => {
                      navigate(item.href);
                    }}
                  >
                    {t(item.name)}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserMenu;
