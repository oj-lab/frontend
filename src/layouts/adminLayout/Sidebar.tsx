import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { joinClasses } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const navigation = [
  { name: "Problem", href: "/admin/problem", icon: HomeIcon },
  { name: "User", href: "/admin/user", icon: UsersIcon },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Transition.Root show={props.open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={props.onClose}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={props.onClose}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-14 w-auto gap-4"
                        src={iconPath}
                        alt="OJ Lab"
                      />
                      <h1 className="text-xl font-bold text-white">
                        OJ Lab Admin
                      </h1>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 cursor-pointer space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <div
                                  className={joinClasses(
                                    window.location.href.includes(item.href)
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                  )}
                                  onClick={() => {
                                    navigate(item.href);
                                  }}
                                >
                                  <item.icon
                                    className={joinClasses(
                                      window.location.href.includes(item.href)
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {t(item.name)}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden max-w-xs lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center gap-4">
              <img className="h-14 w-auto" src={iconPath} alt="OJ Lab" />
              <h1 className="text-xl font-bold text-white">OJ Lab Admin</h1>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <div
                          className={joinClasses(
                            window.location.href.includes(item.href)
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                            "group flex cursor-pointer gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                          )}
                          onClick={() => {
                            navigate(item.href);
                          }}
                        >
                          <item.icon
                            className={joinClasses(
                              window.location.href.includes(item.href)
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {t(item.name)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
