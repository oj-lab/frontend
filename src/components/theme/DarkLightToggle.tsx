import MoonStarsIcon from "@/components/icons/tabler/MoonIcon";
import SunIcon from "@/components/icons/tabler/SunIcon";
import { joinClasses } from "@/utils/common";
import React from "react";

export default function DarkLightToggle() {
  function isWindowDarkMode(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [isdark, setIsdark] = React.useState(() => {
    if (localStorage.getItem("isdark") === "true") return true;
    if (localStorage.getItem("isdark") === "false") return false;
    return isWindowDarkMode();
  });

  React.useEffect(() => {
    window.dispatchEvent(new Event("themeChange"));
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className={joinClasses(
          "theme-controller z-10 h-8 w-8 cursor-pointer rounded-full p-1",
          "hover:bg-[var(--fallback-bc,oklch(var(--bc)/0.2))]",
        )}
        value={isWindowDarkMode() ? "light" : "dark"}
        checked={isWindowDarkMode() ? isdark : !isdark}
        onChange={() => {
          setIsdark(!isdark);
        }}
      />
      <SunIcon
        className={joinClasses(
          "m-1 h-6 w-6 self-center stroke-base-content",
          isWindowDarkMode() ? "swap-on" : "swap-off",
        )}
      />
      <MoonStarsIcon
        className={joinClasses(
          "swap-off m-1 h-6 w-6 self-center",
          isWindowDarkMode() ? "swap-off" : "swap-on",
        )}
      />
    </label>
  );
}
