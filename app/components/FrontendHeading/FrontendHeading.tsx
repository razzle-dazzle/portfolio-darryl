import React from 'react';
import Image from "next/image";
import MyLightImage from "../../../public/main-title.svg";
import MyDarkImage from "../../../public/main-title_dark.svg";

function FrontendHeading() {
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
