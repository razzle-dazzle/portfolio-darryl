"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";
import Link from "next/link";
import { getThemedIcon } from "app/utils/utils";

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
  const iconSrc = getThemedIcon(theme, filename);
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
      ></Image>
    </a>
  );
};
export default IconImage;
