import MoonStarsIcon from "@/components/icons/tabler/MoonIcon";
import SunIcon from "@/components/icons/tabler/SunIcon";
import { joinClasses } from "@/utils/common";
import React from "react";

export default function DarkLightToggle() {
  function isWindowDarkMode(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [isLightMode, setIsdark] = React.useState(() => {
    if (localStorage.getItem("isLightMode")) {
      return JSON.parse(localStorage.getItem("isLightMode")!);
    }
    return isWindowDarkMode();
  });

  React.useEffect(() => {
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
    window.dispatchEvent(new Event("themeChanged"));
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
        checked={isWindowDarkMode() ? isLightMode : !isLightMode}
        onChange={() => {
          setIsdark(!isLightMode);
        }}
      />
      <SunIcon
        className={joinClasses(
          "m-1 h-6 w-6 self-center stroke-base-content",
          !isWindowDarkMode() ? "swap-on" : "swap-off",
        )}
      />
      <MoonStarsIcon
        className={joinClasses(
          "m-1 h-6 w-6 self-center",
          !isWindowDarkMode() ? "swap-off" : "swap-on",
        )}
      />
    </label>
  );
}
