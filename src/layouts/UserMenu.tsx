import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";
import React from "react";

export interface UserMenuAction {
  name: string;
  href?: string;
  onClick?: () => void;
}

export interface UserMenuProps {
  avatarUrl?: string;
  actions?: Array<UserMenuAction>;
}

/**
 * @param {string} props.avatarUrl
 * @param {Array<{ name: string, href: string }>} props.navigation The name of navigation will be translated.
 */
const UserMenu: React.FC<UserMenuProps> = (props) => {
  const navigate = useNavigate();
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
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          tabIndex={0}
          className={joinClasses(
            "avatar btn btn-circle btn-ghost btn-md",
            open ? "z-[2]" : "z-[0]",
          )}
        >
          <div className="w-10 rounded-full">
            <img
              className="h-8 w-8 rounded-full"
              src={props.avatarUrl}
              alt="avatar"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[2] w-32 rounded-box border border-base-200 bg-base-100 p-2 shadow-2xl"
        >
          {props.actions?.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  } else if (item.href) navigate(item.href);
                }}
              >
                {t(item.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
