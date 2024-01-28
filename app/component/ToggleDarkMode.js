"use client";
import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Link from "next/link";
function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      className="
      flex justify-between flex-row items-center
      pl-44 mobile:pl-32 pr-44 mobile:pr-32
      h-24
      drop-shadow-xl
      bg-background-light
      text-text-light
      dark:bg-input-dark
      dark:text-text-dark
      "
    >
      <Link className="desktop:text-4xl mobile:text-sm font-bold" href="/">Where in the world?</Link>
      <div
        onClick={() => setIsDark(!isDark)}
        className="cursor-pointer flex items-center "
      >
        {isDark ? (
          <DarkModeIcon className="h-6 w-6 text-blue-500 " />
        ) : (
          <DarkModeOutlinedIcon className="h-6 w-6 text-blue-500" />
        )}
        <span className="ml-2 mobile:hidden">Dark Mode</span>
      </div>
    </div>
  );
}

export default ToggleDarkMode;
