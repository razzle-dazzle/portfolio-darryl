"use client";
import clsx from "clsx";
import { StackIcon } from "lib/_all-db";
import { useTheme } from "@wits/next-themes";
import { getThemedIcon } from "app/utils/utils";
interface Props {
  icons: StackIcon[];
  /** If true, icons will be aligned right */
  flip?: boolean;
}
function StackIcons({ icons, flip }: Props) {
  const { theme } = useTheme();

  return (
    // <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-1 my-6 w-full">
    // </div>
    <div
      className={clsx(
        "flex flex-row flex-wrap gap-0.5 justify-center my-2",
        flip ? "md:justify-end" : "md:justify-start"
      )}
    >
      {icons.map((icon) => {
        const iconSrc = getThemedIcon(theme, icon);
        return (
          <img
            title={icon}
            key={icon}
            className="h-[25px] w-[25px] md:h-[40px] md:w-[40px]"
            // rounded-md border-1 p-1 border-neutral-800 border-solid bg-white
            src={iconSrc}
          />
        );
      })}
    </div>
  );
}
export default StackIcons;
