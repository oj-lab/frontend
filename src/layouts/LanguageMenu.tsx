import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { joinClasses } from "../utils/common";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { changeLanguage } from "i18next";
import { LANGUAGE_SELECTIONS } from "../i18n/i18n";

interface LanguageMenuProps {
  className?: string;
}

const LanguageMenu: React.FC<LanguageMenuProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className={joinClasses("relative", props.className)}>
        <Menu.Button className="flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <LanguageIcon className="h-5 w-5" />
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
            {LANGUAGE_SELECTIONS.map((item) => (
              <Menu.Item key={item.value}>
                {({ active }) => (
                  <div
                    className={joinClasses(
                      active ? "bg-gray-100" : "",
                      "block cursor-pointer px-4 py-2 text-sm text-gray-700",
                    )}
                    onClick={() => {
                      changeLanguage(item.value);
                    }}
                  >
                    {t(item.label)}
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

export default LanguageMenu;
