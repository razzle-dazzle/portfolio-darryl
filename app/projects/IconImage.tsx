"use client";
import type React from "react";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";
import { getThemedIcon } from "app/utils/utils";
import clsx from 'clsx';

const IconImage = ({
  filename,
  tileSize,
  greyscale,
  handleClick,
}: {
  filename: string;
  tileSize: "s" | "m" | "l";
  greyscale?: boolean;
  handleClick: (e: string) => void;
}) => {
  const { theme, setTheme } = useTheme();
  const widthHeight = tileSize === "s" ? 62 : tileSize === "m" ? 104 : 210;
  const iconSrc = getThemedIcon(theme, filename);

  const handleClickEvent = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (e) {
      e.preventDefault();
      handleClick(filename);
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // console.log(e)
  }

  return (
    <a
      // biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={(e) => handleClickEvent(e)}
      onMouseOver={(e) => handleMouseOver(e)}
      style={{
        cursor: "pointer",
      }}
      tabIndex={-1}
      className={clsx(
        greyscale ? "grayscale filter opacity-30" : "",
        "hover:filter-none hover:grayscale-0 hover:opacity-100 transition-opacity"
      )}
    >
      <Image
        src={iconSrc}
        // fill={true}
        width={widthHeight}
        height={widthHeight}
        priority
        // sizes="(max-width: 32px) 100vw, 60px"
        style={{
          // objectFit: "contain",
          borderRadius: 0,
          aspectRatio: 1,
          // dropShadow: '0px 0px 10px black',
        }}
        alt={filename}
      />
    </a>
  );
};
export default IconImage;
