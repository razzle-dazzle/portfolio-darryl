"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { NAV_ITEMS } from "app/constants";
import ThemeSwitch from "../ThemeSwitch";
import Logo from './Logo';


export default function Navbar() {
  // support for active page - @todo - can be improved!
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <div className="mx-auto py-6 md:py-8 container xl:max-w-7xl">
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
                      <span className="relative py-2 px-4 md:px-8 text-sm md:text-2xl text-neutral-800 dark:text-neutral-100">
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
