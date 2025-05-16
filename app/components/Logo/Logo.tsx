import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { getThemedWebsiteLogo } from "app/utils/utils";

type Props = {
  size: "small" | "medium" | "large";
};
function Logo({ size }: Props) {
  const lightSrc = getThemedWebsiteLogo("light");
  const darkSrc = getThemedWebsiteLogo("dark");

  return (
    <Link href={"/"}>
      <Image
        src={lightSrc}
        width={64}
        height={64}
        priority
        alt={"Logo"}
        className={clsx(
          "block dark:hidden",
          size === "small"
            ? "w-8 h-8"
            : size === "medium"
            ? "w-16 h-16"
            : "w-32 h-32"
        )}
      />
      <Image
        src={darkSrc}
        width={64}
        height={64}
        priority
        alt={"Logo"}
        className={clsx(
          "hidden dark:block",
          size === "small"
            ? "w-8 h-8"
            : size === "medium"
            ? "w-16 h-16"
            : "w-32 h-32"
        )}
      />
    </Link>
  );
}

export default Logo;
