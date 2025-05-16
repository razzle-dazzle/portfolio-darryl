"use client";

import type { CSSProperties } from "react";
import { useTheme } from "@wits/next-themes";
import Link from "next/link";
import clsx from "clsx";

const getLogoStyles = (theme?: string): CSSProperties => {
  if (theme === "light") {
    return {
      // linear gradient BG must match the page body BG
      background:
        "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box",
    };
  }
  return {
    // linear gradient BG must match the page body BG
    background:
      "linear-gradient(#161616, #161616) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box",
  };
};

function PortfolioLogo() {
  const { theme } = useTheme();
  const thisYear = new Date().getFullYear();
  const logoStylesThemed = getLogoStyles(theme);

  return (
    <Link
      href={"/"}
      className={clsx(
        "block px-6 md:px-10 py-1.5 md:py-3 font-medium text-lg md:text-xl rounded-lg border border-transparent border-solid bg-transparent whitespace-nowrap",
        {
          "text-[#161616] border-[#1795FF]": theme === "light",
          "dark:text-[#A1DEFF] border-[#1795FF]": theme !== "light",
        }
      )}
      style={{
        ...logoStylesThemed,
      }}
    >
      {`Portfolio ${thisYear}`.toUpperCase()}
    </Link>
  );
}

export default PortfolioLogo;
