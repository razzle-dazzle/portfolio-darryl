"use client";
import clsx from "clsx";
import { useTheme } from "@wits/next-themes";
import { getThemedIcon } from "app/utils/utils";
import type { StackIcon } from 'lib/types';
import myProjectService from "app/services/projects.service";

interface Props {
  icons: StackIcon[];
  /** If true, icons will be aligned right */
  flip?: boolean;
  iconSize?: "default" | "large";
  lazyLoad?: boolean;
}
function StackIcons({ icons, flip, iconSize = "default", lazyLoad = true }: Props) {
  const { theme } = useTheme();

  return (
    // <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-1 my-6 w-full">
    // </div>
    <div
      className={clsx(
        "flex flex-row flex-wrap gap-0.5 justify-start md:justify-start my-2",
        flip ? "md:justify-end" : "md:justify-start"
      )}
    >
      {icons.map((icon) => {
        const iconSrc = getThemedIcon(theme, icon);
        return (
          <img
            title={myProjectService.getSpecialStackLabel(icon)}
            alt={myProjectService.getSpecialStackLabel(icon)}
            key={icon}
            className={clsx(
              iconSize === "default"
                ? "h-[25px] w-[25px] md:h-[40px] md:w-[40px]"
                : "h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
            )}
            // rounded-md border-1 p-1 border-neutral-800 border-solid bg-white
            src={iconSrc}
            loading={lazyLoad ? "lazy" : undefined}
          />
        );
      })}
    </div>
  );
}
export default StackIcons;
