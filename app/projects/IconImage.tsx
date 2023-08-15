"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";
import Link from "next/link";

const IconImage = ({
  filename,
  tileSize,
  handleClick,
}: {
  filename: string;
  tileSize: "s" | "m" | "l";
  handleClick: any;
}) => {
  const { theme, setTheme } = useTheme();
  const widthHeight = tileSize === "s" ? 62 : tileSize === "m" ? 104 : 210;
  const themeMode = theme === "dark" || theme === "light" ? theme : "light";
  const src = `/icons/${themeMode}/${filename}.${themeMode}mode.svg`;
  const handleClickEvent = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (e) {
      e.preventDefault();
      handleClick(filename);
    }
  };

  return (
    <a
      onClick={(e) => handleClickEvent(e)}
      style={{
        cursor: "pointer",
      }}
    >
      <Image
        src={src}
        // fill={true}
        width={widthHeight}
        height={widthHeight}
        priority
        // sizes="(max-width: 32px) 100vw, 60px"
        style={{
          // objectFit: "contain",
          borderRadius: 0,
          aspectRatio: 1,
        }}
        alt={filename}
      ></Image>
    </a>
    // <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-2 md:p-6 my-6 w-full">
    //   <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-4">
    //     {icons.map((icon) => (
    //       <img title={icon} key={icon} className='h-[32px] w-[32px] md:h-[60px] md:w-[60px] rounded-md border-[1px] p-1 border-black border-solid bg-white' src={`/icons/${icon}.svg`} />
    //     ))}
    //   </div>

    // </div>
  );
};
export default IconImage;
