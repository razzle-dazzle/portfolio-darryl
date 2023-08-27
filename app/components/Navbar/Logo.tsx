"use client";

import { useTheme } from "@wits/next-themes";
import clsx from 'clsx';
import Link from "next/link";

function PortfolioLogo() {
  const thisYear = new Date().getFullYear();

  const { theme, setTheme } = useTheme();
  let logoStylesThemed = {};
  if (theme === "light") {
    logoStylesThemed = {
      // color: "#161616",
      // borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background:
        "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box",
      // border: '2px solid transparent',
    };
  } else {
    logoStylesThemed = {
      // color: "#A1DEFF",
      // borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background:
        "linear-gradient(#161616, #161616) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box",
      // border: '2px solid transparent',
    };
  }
  return (
    <Link
      href={"/"}
      className={
        clsx(
          "block px-6 md:px-10 py-1.5 md:py-3 font-medium text-lg md:text-xl rounded-lg border border-transparent border-solid bg-transparent whitespace-nowrap",
          {
            "text-[#161616] border-[#1795FF]": theme === "light",
            "dark:text-[#A1DEFF] border-[#1795FF]": theme !== "light",
          }
        )
      }
      style={{
        ...logoStylesThemed,
      }}
    >
      {`Portfolio ${thisYear}`.toUpperCase()}
    </Link>
  );
}

export default PortfolioLogo;
