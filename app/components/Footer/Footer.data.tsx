// import { NAV_ITEMS } from "app/constants";

const logoWidthClassNames = "w-4 h-4 md:w-5 md:h-5";

export const footerLinks: {
  title: string;
  link: string;
  target: string;
  icon: React.ReactElement;
}[] = [
  {
    title: "Email",
    link: "mailto:daz@darryloctober.co.uk",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={logoWidthClassNames}
      >
        <title>Mail icon</title>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/darryloctober/",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={logoWidthClassNames}
        viewBox="0 0 24 24"
      >
        <title>LinkedIn icon</title>
        <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
      </svg>
    ),
  },
  {
    title: "Github",
    link: "https://github.com/razzle-dazzle",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={logoWidthClassNames}
      >
        <title>Github icon</title>
        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
      </svg>
    ),
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/user/thedazzlerazzle?si=Tbgpg41yR9O-7rt-gIIiUA",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={logoWidthClassNames}
        width="800px"
        height="800px"
        viewBox="0 0 15 15"
        fill="none"
      >
        <title>Spotify icon</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 7.5C0 3.35806 3.35739 0 7.5 0C11.6426 0 15 3.35806 15 7.5C15 11.6419 11.6426 15 7.5 15C3.35739 15 0 11.6419 0 7.5ZM7.72559 5.29726C6.10452 5.1645 4.45445 5.36298 3.10145 5.84102L2.76831 4.89814C4.26827 4.36818 6.06128 4.15762 7.80721 4.3006C9.55134 4.44343 11.2864 4.94242 12.6506 5.86902L12.0887 6.69623C10.9043 5.8917 9.34846 5.43017 7.72559 5.29726ZM3.32631 7.99238C6.77208 7.38276 9.1744 7.69462 11.165 9.12359L11.7482 8.31123C9.44992 6.66142 6.7319 6.37433 3.1521 7.00767L3.32631 7.99238ZM3.66189 10.1162C4.64824 9.87575 5.86143 9.77071 7.05416 9.8879C8.25008 10.0054 9.38823 10.3424 10.2559 10.9525L10.8311 10.1345C9.77767 9.39382 8.45578 9.0208 7.15194 8.8927C5.8449 8.76428 4.51861 8.87807 3.42505 9.14466L3.66189 10.1162Z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    title: "Strava",
    link: "https://strava.app.link/VUjdp2hIXSb",
    target: "_blank",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={logoWidthClassNames}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        role="img"
      >
        <title>Strava icon</title>
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
    ),
  },
];
