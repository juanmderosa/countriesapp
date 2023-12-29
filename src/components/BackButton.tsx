"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLeft from "@/assets/icons/ArrowLeft.svg";
import ArrowLeftWhite from "@/assets/icons/ArrowLeftWhite.svg";
import { useTheme } from "next-themes";

export const BackButton = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <button className="border border-DarkModeDarkBlueElements border-solid flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold">
        {theme === "light" ? (
          <Image
            src={ArrowLeft}
            alt="Back Arrow"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src={ArrowLeftWhite}
            alt="Back Arrow"
            width={24}
            height={24}
          />
        )}
        Back
      </button>
    </Link>
  );
};
