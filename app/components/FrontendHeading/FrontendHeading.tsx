"use client";
import Image from "next/image";
import { useTheme } from "@wits/next-themes";

// Relative import to your image file
import MyLightImage from "../../../public/main-title.svg";
import MyDarkImage from "../../../public/main-title_dark.svg";
import React from 'react';

function FrontendHeading() {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      {theme === "light" ? (
        <Image
          src={MyLightImage}
          fill={true}
          priority
          sizes="(max-width: 500px) 100vw, 120px"
          style={{
            objectFit: "contain",
            borderRadius: 3,
          }}
          alt={"Front End Developer - Darryl October"}
        />
      ) : (
        <Image
          src={MyDarkImage}
          fill={true}
          priority
          sizes="(max-width: 500px) 100vw, 120px"
          style={{
            objectFit: "contain",
            borderRadius: 3,
          }}
          alt={"Front End Developer - Darryl October"}
        />
      )}
    </React.Fragment>
    // <picture>
    //   <source srcSet={MyDarkImage.src} media="(prefers-color-scheme: dark)" />
    //   <Image
    //   src={MyLightImage}
    //   fill={true}
    //   sizes="(max-width: 500px) 100vw, 120px"
    //   style={{
    //     objectFit: "contain",
    //     borderRadius: 3,
    //   }}
    //   alt={"Front End Developer - Darryl October"}
    //   />
    // </picture>

    // <Image
    //   src={theme === "light" ? "/main-title.svg" : "/main-title_dark.svg"}
    //   fill={true}
    //   sizes="(max-width: 500px) 100vw, 120px"
    //   // width="0"
    //   // height="0"
    //   style={{
    //     objectFit: "contain",
    //     // objectFit: "cover",
    //     borderRadius: 3,
    //   }}
    //   alt={"Front End Developer - Darryl October"}
    // />
  );
}

export default FrontendHeading;
