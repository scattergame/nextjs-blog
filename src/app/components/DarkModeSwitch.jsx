"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  //currentTheme = "light"
  return (
    <>
      {mounted && (
        <div className="cursor-pointer">
          {currentTheme === "dark" ? (
            <MdLightMode
              className="text-2xl hover:text-amber-600"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsFillMoonFill
              className="text-2xl hover:text-amber-600"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      )}
    </>
  );
};
