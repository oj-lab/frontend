import { FC } from "react";

const OJLabIconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const OJLabIcon: FC = () => {
  return (
    <img className="mr-2 h-12 w-auto gap-4" src={OJLabIconPath} alt="OJ Lab" />
  );
};

export default OJLabIcon;
