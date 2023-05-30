"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { NAV_ITEMS } from "app/constants";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "@wits/next-themes";

function Logo() {
  return (
    <Link aria-label="Darryl October" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

function PortfolioLogo() {
  const { theme, setTheme } = useTheme();
  const logoStyles = {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: 500,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
  };
  let logoStylesThemed = {};
  if (theme === 'light') {
    logoStylesThemed = {
      color: "#171717",
      borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box',
      // border: '2px solid transparent',
    }
  } else {
    logoStylesThemed = {
      color: "#A1DEFF",
      // borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background: 'linear-gradient(#171717, #171717) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box',
      // border: '2px solid transparent',
    }
    
  }
  return (
    <Link
      href={"/"}
      style={{
        whiteSpace: 'nowrap',
        ...logoStyles,
        
        ...logoStylesThemed,
      }}
    >
      {"Portfolio 2023".toUpperCase()}
    </Link>
  );
}

export default function Navbar() {
  // support for active page - @todo - can be improved!
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <div className="mx-auto py-8 container max-w-7xl">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div className="">
          {/* <Logo /> */}
          <PortfolioLogo></PortfolioLogo>
        </div>

        <div className="flex flex-row justify-end items-center max-w-full">
          <LayoutGroup>
            <nav
              className="flex flex-row items-start relative px-2 pb-0 fade md:overflow-auto scroll-pr-6"
              id="nav"
            >
              <div className="flex flex-row space-x-0 md:pr-6 mb-2 mt-2">
                {Object.entries(NAV_ITEMS).map(([navName, { name, path }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={name}
                      href={path}
                      className={clsx(
                        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                        {
                          "text-neutral-500": !isActive,
                          "font-bold": isActive,
                        }
                      )}
                    >
                      <span className="relative py-[8px] px-[32px] text-sm md:text-2xl text-neutral-800 dark:text-neutral-100">
                        {name.toUpperCase()}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </LayoutGroup>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </div>
  );
}
