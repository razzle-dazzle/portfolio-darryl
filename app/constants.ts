export const NAV_ITEMS = {
  // home: {
  //   name: "home",
  //   path: "/",
  // },
  projects: {
    name: "projects",
    path: "/projects",
  },
  contact: {
    name: "contact",
    path: "/contact",
  },
} as const;

export const Constants = {
  defaultTheme: "dark", // system, dark or light
} as const;

/**
 * Featured Projects to include:
 * Arcturus Dashboards + Storybook + Amplify Dashboard
 * Herding Cats site + app
 * Pocket Barcelona + Dashboard + app + site
 * Canteen.es + Dashboard
 * DGTLS - All react stuff, Wolf, Roadsurfer
 *
 */
export interface Project {
  name: string;
  subtitle: string;
  description: string[];
  stack: string[];
  stackIcons?: string[];
  images: {
    url: string;
    alt: string;
  }[];
  url: string;
}
export const projectsData: Project[] = [
  {
    name: "Pocket Barcelona",
    subtitle: "Coming soon to app/play stores!",
    description: [
      `Pocket Barcelona is a special app for tourists and expats living in Barcelona.`,
      `The app features a comprehensive directory of key locations in Barcelona, as well as a day and itinerary planner, events calendar, maps, food & drink recommendations and more!`,
    ],
    stack: [
      "React Native / Expo",
      "Typescript",
      "NodeJS/Express",
      "DynamoDB/Dynamoose",
      "AWS",
      "AWS Amplify",
      "Google Maps API",
      "Firebase",
    ],
    stackIcons: [
      "react-native",
      "typescript",
      "node",
      "dynamodb",
      "aws",
      "amplify",
      "google",
      "firebase",
      "nextjs",
    ],
    url: "https://www.pocketbarcelona.com",
    images: [
      {
        alt: "Pocket Barcelona",
        url: "/projects/image-1.jpg",
      },
      {
        alt: "Pocket Barcelona",
        url: "/projects/image-2.jpg",
      },
    ],
  },
  {
    name: "Arcturus Core",
    subtitle:
      "A platform businesses to manage and monitor their carbon emissions, and more.",
    description: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus quae architecto minima exercitationem non natus
    animi, minus blanditiis impedit voluptatem fugiat ipsum iste dolor
    consectetur distinctio esse sint dolore. Reprehenderit!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Necessitatibus quae architecto minima exercitationem non natus
  animi, minus blanditiis impedit voluptatem fugiat ipsum iste dolor
  consectetur distinctio esse sint dolore. Reprehenderit!`,
    ],
    stack: ["Angular"],
    url: "https://app.arcturus.io",
    images: [
      {
        alt: "1",
        url: "/projects/image-2.jpg",
      },
      {
        alt: "Alt",
        url: "/projects/image-1.jpg",
      },
    ],
  },
  {
    name: "Arcturus Storybook",
    subtitle: "A Storybook for Arcturus' frontend React components",
    description: [
      `Arcturus was built on top of React/MUI and so I extended the MUI components with branded styles on top, then exported the whole library to Github Packages using Rollup.`,
      `Components were then ready to be imported to the main app, as well as other apps, which needed to consume classic UI components, such as the Dashboard for managing app users, roles and permissions.`,
    ],
    stack: ["Angular", "React", "MUI"],
    url: "https://app.arcturus.io",
    images: [
      {
        alt: "1",
        url: "/projects/image-3.jpg",
      },
    ],
  },
  {
    name: "Herding Cats",
    subtitle:
      "An app for simplifying event planning and building social events.",
    description: [
      `Herding Cats is the easiest and fastest way to plan any social event - so you can get your friends together, in person and more often.`,
      `Herding Cats allows you to effortlessly design an invite, share it across multiple channels and manage replies all in one place.`,
    ],
    stack: [
      "React Native / Expo",
      "Typescript",
      "NodeJS/Express",
      "DynamoDB/Dynamoose",
      "AWS",
      "Firebase",
    ],
    stackIcons: [
      "react-native",
      "typescript",
      "node",
      "dynamodb",
      "aws",
      "google",
      "firebase",
    ],
    url: "https://herdcats.io/",
    images: [
      {
        alt: "Herding Cats",
        url: "/projects/image-4.jpg",
      },
    ],
  },
];
