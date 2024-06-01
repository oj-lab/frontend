import { FC } from "react";
import { DefaultIconStrokeWidth } from "./defaults";

const Menu3Icon: FC<{
  className?: string;
  strokeWidth?: number;
}> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={DefaultIconStrokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
};

export default Menu3Icon;
