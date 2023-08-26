"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { NAV_ITEMS } from "app/constants";
import ThemeSwitch from "../ThemeSwitch";
import Logo from "./Logo";

export default function Navbar() {
  // support for active page - @todo - can be improved!
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <div className='fixed bg-neutral-500 bg-opacity-5 z-[9999] left-0 right-0' style={{
      backdropFilter: 'blur(10px)',
    }}>
      <div className="mx-auto py-4 md:py-4 container xl:max-w-7xl">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <div>
            <Logo></Logo>
          </div>

          <div className="flex flex-row justify-center md:justify-end items-center max-w-full">
            <LayoutGroup>
              <nav
                className="flex flex-row items-start relative px-2 pb-0 fade md:overflow-auto scroll-pr-6"
                id="nav"
              >
                <div className="flex flex-row space-x-0 md:pr-6 mb-2 mt-2 gap-2">
                  {Object.entries(NAV_ITEMS).map(([navName, { name, path }]) => {
                    const isActive = path === pathname;
                    return (
                      <Link
                        key={name}
                        href={path}
                        className={clsx(
                          "transition-all flex align-middle",
                          "hover:text-neutral-800 text-black dark:text-white dark:hover:text-neutral-200",
                          "font-medium",
                          {
                            "text-black dark:text-white": !isActive,
                            // "font-bold": isActive,
                          }
                        )}
                      >
                        <span
                          className={clsx(
                            "relative py-2 px-4 md:px-8 text-sm md:text-2xl select-none",
                            {
                              "text-white dark:text-[#111010]": isActive,
                            }
                          )}
                        >
                          {name.toUpperCase()}
                          {path === pathname ? (
                            <motion.div
                              className="absolute inset-0 bg-[#0038FF] dark:bg-[#F8CB01] rounded-md z-[-1]"
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

    </div>
  );
}
