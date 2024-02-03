import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { joinClasses } from "../utils/common";
import React from "react";

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
            "avatar btn btn-circle btn-ghost m-1",
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
          className="menu dropdown-content z-[2] w-32 rounded-box bg-base-100 p-2 shadow"
        >
          {props.navigation?.map((item, index) => (
            <li key={index}>
              <a
                className="hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))]"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
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
