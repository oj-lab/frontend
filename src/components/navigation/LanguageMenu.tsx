import { useTranslation } from "react-i18next";
import { joinClasses } from "@/utils/common";
import { changeLanguage } from "i18next";
import { LANGUAGE_SELECTIONS } from "@/i18n/module";
import React from "react";
import LanguageIcon from "@/components/display/icons/tabler/LanguageIcon";

interface LanguageMenuProps {
  className?: string;
}

const LanguageMenu: React.FC<LanguageMenuProps> = (props) => {
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
          className={joinClasses(
            "avatar btn btn-circle btn-ghost btn-sm m-1",
            open ? "z-[2]" : "z-[0]",
          )}
        >
          <LanguageIcon className="h-6 w-6" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[2] w-40 rounded border border-base-content/10 bg-base-100 p-2 shadow-2xl"
        >
          {LANGUAGE_SELECTIONS.map((item, index) => (
            <li key={index}>
              <span
                className="rounded"
                onClick={() => {
                  changeLanguage(item.value);
                  setOpen(false);
                }}
              >
                {t(item.label)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LanguageMenu;
