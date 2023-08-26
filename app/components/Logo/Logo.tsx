"use client";

import { useTheme } from '@wits/next-themes';
import clsx from 'clsx';
import Link from 'next/link';
import React from "react";

function getThemedLogo(
  theme: string | undefined
): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/logo/logo-${themeMode}.svg`;
  return iconSrc;
}

type Props = {
  /** Default: 64px, large: 128px */
  size: 'default' | 'large';
};

/** A themed logo, depending on color mode */
export default function Logo({ size }: Props) {
  const { theme } = useTheme();
  const iconSrc = getThemedLogo(theme);
  return (
    <Link href="/">
      <img
        src={iconSrc}
        alt="Logo"
        className={
          clsx(
            size === 'default' ? "w-16 h-16" : "w-32 h-32"
          )
        }
      />
    </Link>
  );
}
