import { FC } from "react";

const OJLabIconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const OJLabIcon: FC<{ className: string }> = (props) => {
  return <img className={props.className} src={OJLabIconPath} alt="OJ Lab" />;
};

export default OJLabIcon;
