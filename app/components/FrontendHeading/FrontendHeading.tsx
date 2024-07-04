import React from 'react';
import Image from "next/image";
// import { useTheme } from "@wits/next-themes";
// Relative import to your image file
import MyLightImage from "../../../public/main-title.svg";
import MyDarkImage from "../../../public/main-title_dark.svg";

function FrontendHeading() {
  // const { theme } = useTheme();
  return (
    <React.Fragment>
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
        className='block dark:hidden'
      />
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
        className='hidden dark:block'
      />
    </React.Fragment>
  );
}

export default FrontendHeading;
