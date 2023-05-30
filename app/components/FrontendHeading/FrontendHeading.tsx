"use client";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";

function FrontendHeading() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "light" ? "/main-title.svg" : "/main-title_dark.svg"}
      fill={true}
      sizes="(max-width: 500px) 100vw, 120px"
      // width="0"
      // height="0"
      style={{
        objectFit: "contain",
        // objectFit: "cover",
        borderRadius: 3,
      }}
      alt={"Front End Developer - Darryl October"}
    />
  );
}

export default FrontendHeading;
