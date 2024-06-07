import { FC } from "react";
import { DefaultIconStrokeWidth } from "./defaults";

const PlusIcon: FC<{
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
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  );
};

export default PlusIcon;
