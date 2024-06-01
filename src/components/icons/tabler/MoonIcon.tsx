import { FC } from "react";
import { DefaultIconStroke, DefaultIconStrokeWidth } from "./defaults";

const MoonStarsIcon: FC<{
  className?: string;
  strokeWidth?: number;
}> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={DefaultIconStroke}
      stroke-width={DefaultIconStrokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={props.className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      <path d="M19 11h2m-1 -1v2" />
    </svg>
  );
};

export default MoonStarsIcon;
