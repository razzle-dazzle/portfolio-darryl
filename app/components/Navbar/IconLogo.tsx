"use client";
import { useTheme } from "@wits/next-themes";
import Image from "next/image";
import Link from "next/link";
import { getThemedWebsiteLogo } from 'app/utils/utils';
import clsx from 'clsx';

function IconLogo() {
  const { theme, setTheme } = useTheme();
  const iconSrc = getThemedWebsiteLogo(theme);

  return (
    <Link
      href={"/"}
    >
      <Image
        src={iconSrc}
        width={64}
        height={64}
        priority
        alt={'Logo'}
      ></Image>
    </Link>
  );
}

export default IconLogo;
