"use client";
import OutlineMoon from "@/assets/icons/OutlineMoon.svg";
import OutlineSun from "@/assets/icons/OutlineSun.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  console.log(theme);

  let src;

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleTheme}>
      {theme === "light" ? (
        <>
          <Image
            src={OutlineMoon}
            alt="dark mode"
            width={24}
            height={24}
          />
          <p>Dark Mode</p>
        </>
      ) : (
        <>
          <Image
            src={OutlineSun}
            alt="dark mode"
            width={24}
            height={24}
          />
          <p className="dark:text-WhiteLight">Light Mode</p>
        </>
      )}
    </div>
  );
};
