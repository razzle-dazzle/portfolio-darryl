"use client";

import type React from "react";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";
import clsx from 'clsx';
import { getThemedIcon } from "app/utils/utils";

type IconImageProps = {
  filename: string;
  tileSize: "small" | "medium" | "large";
  isActive?: boolean;
  handleClick: (e: string) => void;
};
const IconImage = ({
  filename,
  tileSize,
  isActive: greyscale,
  handleClick,
}: IconImageProps) => {
  const { theme } = useTheme();
  const widthHeight = tileSize === "small" ? 62 : tileSize === "medium" ? 104 : 210;
  const iconSrc = getThemedIcon(theme, filename);

  const handleClickEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e) {
      e.preventDefault();
      handleClick(filename);
    }
  };

  const handleMouseOver = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  }

  return (
    <button
      type="button"
      onClick={(e) => handleClickEvent(e)}
      onFocus={() => {}}
      onMouseOver={(e) => handleMouseOver(e)}
      tabIndex={-1}
      className={clsx(
        greyscale ? "grayscale filter opacity-30" : "",
        "outline-none border-none m-0 p-0 cursor-pointer",
        "hover:filter-none hover:grayscale-0 hover:opacity-100 transition-opacity"
      )}
    >
      <Image
        src={iconSrc}
        width={widthHeight}
        height={widthHeight}
        style={{
          borderRadius: 0,
          aspectRatio: 1,
        }}
        alt={filename}
      />
    </button>
  );
};
export default IconImage;
