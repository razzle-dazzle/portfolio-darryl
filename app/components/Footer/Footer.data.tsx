import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  SpotifyIcon,
  StravaIcon,
} from "../Icons/Icons";

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
    icon: <EmailIcon />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/darryloctober/",
    target: "_blank",
    icon: <LinkedInIcon />,
  },
  {
    title: "Github",
    link: "https://github.com/razzle-dazzle",
    target: "_blank",
    icon: <GithubIcon />,
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/user/thedazzlerazzle?si=Tbgpg41yR9O-7rt-gIIiUA",
    target: "_blank",
    icon: <SpotifyIcon />,
  },
  {
    title: "Strava",
    link: "https://strava.app.link/VUjdp2hIXSb",
    target: "_blank",
    icon: <StravaIcon />,
  },
];
