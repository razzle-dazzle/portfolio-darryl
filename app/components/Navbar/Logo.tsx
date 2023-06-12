"use client";

import { useTheme } from "@wits/next-themes";
import Link from "next/link";

function PortfolioLogo() {
  const thisYear = new Date().getFullYear();
  
  const { theme, setTheme } = useTheme();
  const logoStyles = {
    display: 'block',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: 500,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
  };
  let logoStylesThemed = {};
  if (theme === 'light') {
    logoStylesThemed = {
      color: "#171717",
      borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box',
      // border: '2px solid transparent',
    }
  } else if (theme === 'dark') {
    logoStylesThemed = {
      color: "#A1DEFF",
      // borderColor: "#1795FF",
      // linear gradient BG must match the page body BG
      background: 'linear-gradient(#171717, #171717) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box',
      // border: '2px solid transparent',
    }
    
  } else {
    // theme will be "system"
    logoStylesThemed = {
      color: "#A1DEFF",
      background: 'linear-gradient(#171717, #171717) padding-box, linear-gradient(to right, #1795FF, #BD7BB8) border-box',
    }
  }
  return (
    <Link
      href={"/"}
      style={{
        whiteSpace: 'nowrap',
        ...logoStyles,
        
        ...logoStylesThemed,
      }}
    >
      {`Portfolio ${thisYear}`.toUpperCase()}
    </Link>
  );
}

export default PortfolioLogo;
