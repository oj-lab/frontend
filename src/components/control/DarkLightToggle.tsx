import React from "react";
import { useDispatch } from "react-redux";
import MoonStarsIcon from "@/components/display/icons/tabler/MoonIcon";
import SunIcon from "@/components/display/icons/tabler/SunIcon";
import { joinClasses } from "@/utils/common";
import { isWindowPrefersSchemeDark } from "@/utils/window";
import { setIsLightMode as setIsLightModeState } from "@/store/slices/window";

export default function DarkLightToggle() {
  const dispatch = useDispatch();
  const isDarkModeWindow = isWindowPrefersSchemeDark();

  const [isLightMode, setIsLightMode] = React.useState(() => {
    const storageSetting = localStorage.getItem("isLightMode");
    if (storageSetting) {
      return JSON.parse(storageSetting);
    } else {
      localStorage.setItem("isLightMode", JSON.stringify(!isDarkModeWindow));
      return !isDarkModeWindow;
    }
  });

  React.useEffect(() => {
    dispatch(setIsLightModeState(isLightMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightMode]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className={joinClasses(
          "theme-controller z-10 h-8 w-8 cursor-pointer rounded-full p-1",
          "hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))]",
        )}
        value={isLightMode ? "light" : "dark"}
        checked={isDarkModeWindow ? isLightMode : !isLightMode}
        onChange={() => {
          setIsLightMode(!isLightMode);
          localStorage.setItem("isLightMode", JSON.stringify(!isLightMode));
        }}
      />
      <SunIcon
        className={joinClasses(
          "m-1 h-6 w-6 self-center stroke-base-content",
          !isDarkModeWindow ? "swap-on" : "swap-off",
        )}
      />
      <MoonStarsIcon
        className={joinClasses(
          "m-1 h-6 w-6 self-center",
          !isDarkModeWindow ? "swap-off" : "swap-on",
        )}
      />
    </label>
  );
}
