import { isCurrentPath } from "@/utils/window";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export interface PageMenuItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

export interface PageMenuSection {
  title: string;
  items: PageMenuItem[];
}

export interface PageMenuProps {
  sections: PageMenuSection[];
}

export const PageMenu: FC<PageMenuProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ul className="menu w-60 gap-1 bg-base-100 p-2 text-base-content">
      {props.sections.map((section) => (
        <>
          <li key={section.title} className="menu-title">
            {t(section.title)}
          </li>
          {section.items.map((item) => (
            <li key={item.name}>
              <div
                onClick={() => navigate(item.href)}
                className={isCurrentPath(item.href) ? "active" : ""}
              >
                {item.icon}
                <p>{t(item.name)}</p>
              </div>
            </li>
          ))}
        </>
      ))}
    </ul>
  );
};

export default PageMenu;
