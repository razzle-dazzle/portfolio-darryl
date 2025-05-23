"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion as Motion } from "framer-motion";
import { NAV_ITEMS } from "app/constants";
import { capitalizeFirstLetter } from "app/utils/utils";

export default function NavLinksGroup() {
  // support for active page - @todo - improve!
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <LayoutGroup>
      <nav
        className="flex flex-row items-start relative px-2 pb-0 fade md:overflow-auto scroll-pr-6"
        id="nav"
      >
        <div className="flex flex-row space-x-0 md:pr-6 mb-2 mt-2 gap-2 relative">
          {Object.entries(NAV_ITEMS).map(([_navName, { name, path }]) => {
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
                  {capitalizeFirstLetter(name)}
                  {path === pathname ? (
                    <Motion.div
                      /* @ts-ignore - bug in Framer Motion! */
                      className="absolute inset-0 bg-klein dark:bg-mustard rounded-md z-[-1]"
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
  );
}
