import { joinClasses } from "@/utils/common";
import React from "react";
import { useTranslation } from "react-i18next";

interface ThemeMenuProps {
  className?: string;
}

const ThemeMenu: React.FC<ThemeMenuProps> = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document?.activeElement instanceof HTMLElement &&
      document.activeElement.blur();
  }, [open]);

  return (
    <>
      {open && ( // Close the dropdown when clicking outside
        <div
          className="fixed inset-0 z-[1]"
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <div
        className={joinClasses(
          "dropdown dropdown-end",
          open && "dropdown-open",
          props.className,
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          className={joinClasses(
            "avatar btn btn-ghost m-1",
            open ? "z-[2]" : "z-[0]",
          )}
        >
          {t("Theme")}
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[2] w-32 rounded-box bg-base-100 p-2 shadow-2xl"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-ghost btn-sm btn-block justify-start font-normal"
              aria-label="Default"
              value="default"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-ghost btn-sm btn-block justify-start font-normal"
              aria-label="Retro"
              value="retro"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-ghost btn-sm btn-block justify-start font-normal"
              aria-label="Cyberpunk"
              value="cyberpunk"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-ghost btn-sm btn-block justify-start font-normal"
              aria-label="Valentine"
              value="valentine"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-ghost btn-sm btn-block justify-start font-normal"
              aria-label="Aqua"
              value="aqua"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ThemeMenu;
