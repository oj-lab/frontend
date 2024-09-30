import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="footer flex w-full flex-col justify-center gap-1 text-xs text-base-content/80">
      <p>©2024 OJ Lab</p>
      <p className="flex flex-row">
        Github:
        <a href="https://github.com/oj-lab">https://github.com/oj-lab</a>
      </p>
      <p className="flex flex-row">
        {t("Give us idea & feedback")}:
        <a href="https://github.com/oj-lab/roadmap/discussions">
          https://github.com/oj-lab/roadmap/discussions
        </a>
      </p>
    </div>
  );
};

export default Footer;
