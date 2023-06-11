import clsx from "clsx";
import FastMarquee from "react-fast-marquee";

const texts: string[][] = [
  [
    "Storybook",
    "React",
    "Redux",
    "React Native",
    "Expo",
    "NativeBase",
    "PWA's",
    "NextJS",
    "NextAuth",
    "SSR/SSG",
    "ISR",
    "Tailwind",
    "Angular",
    "MUI",
    "Material Design",
    "SOLID",
    "DRY",
    "KPIs",
    "Pimcore"
  ],
  [
    "Typescript",
    "UI/UX",
    "RxJS",
    "NodeJS/Express",
    "Responsive",
    "Atomic Design",
    "FaunaDB",
    "Shopify",
    "GraphQL",
    "Serverless",
    "Cloud",
    "Lambda",
    "AWS",
    "Saas",
    "DynamoDB/Dynamoose",
    "NoSQL",
    "Debugging",
    "Heroku",
    "Github Packages",
    "Git",
    "Linux",
  ],
  [
    "Lerna",
    "Rollup",
    "Monorepo",
    "Turbopack",
    "Vercel",
    "Netlify",
    "Azure",
    "Yarn",
    "NPM",
    "DevOps",
    "MySQL",
    "MariaDB",
    "Docker",
    "Fetchmock",
    "Postman",
    "Insomnia",
    "Swagger",
    "Photoshop",
    "Lightroom",
    "Sonar Cube",
    "Sentry"
  ],
  [
    "Figma",
    "AdobeXD",
    "Justinmind",
    "Notion",
    "PNPM",
    "Pure JS",
    "HTML",
    "SCSS",
    "CSS3",
    "UIKit",
    "Twig",
    "Bootstrap",
    "MJML",
    "Ruby",
    "C#",
    "PHP",
    "Command Line",
    "YAML",
    "JSON",
    "Agile",
    "Scrum",
  ],
  [
    "APIs",
    "Android Studio",
    "XCode Simulator",
    "Flipper",
    "Firebase",
    "Cypress",
    "Jest",
    "Auth0",
    "Miro",
    "Zod",
    "JWT",
    "Stripe",
    "ESlint",
    "Prettier",
    "Husky",
    "Docker",
    "Apollo",
    "Axios",
    "Formik",
    "Confluence",
    "Github",
    "Bitbucket",
  ],
];

const foo = texts.map((t) => {
  return t.map((i) => {
    return {
      text: i,
      _light: "#fff",
      _dark: "#151515",
    };
  });
});
const marqueeContent: Array<
  {
    _light?: string;
    _dark?: string;
    text: string;
  }[]
> = [...foo];
type MarqueeRowProps = {
  row: string[];
};
const MarqueeRow = ({ row }: MarqueeRowProps) => {
  // @todo - support for theming
  const colors: string[] = [
    "#fff",
    "#1795FF",
    "#90D6FC",
    "#45C2A7",
    "#D7D7A0",
    "#4C91D0",
    "#ccc",
    "#bc8670",
    "#e3c042",
    "#b463b5",
  ];
  return (
    <>
      {row.map((text, idx) => {
        const idxColor = colors[idx % colors.length];
        return (
          <p
            key={idx}
            className={clsx(
              "px-4 font-mono text-2xl md:text-4xl md:leading-relaxed",
              // `text-[${colors[idx % colors.length]}]`,
              [1, 5].includes(idx)
                ? "font-bold"
                : [2, 4, 7].includes(idx)
                ? "font-thin"
                : "font-normal",
              [3, 9].includes(idx) ? 'italic' : ''
            )}
            style={{ color: idxColor }}
          >
            {text}
          </p>
        );
      })}
    </>
  );
};

type MarqueeProps = {
  // items?: string[][];
};
const Marquee = ({ }: MarqueeProps) => (
  <>
    {(texts).map((row, index) => {
      const speeds = [15, 30, 38, 8, 26];
      return (
        <FastMarquee
          autoFill
          pauseOnHover
          key={index}
          speed={speeds[index % speeds.length]}
          direction={index % 2 === 0 ? "left" : "right"}
          style={{
            borderBottom: `1px solid ${index + 1 >= texts.length ? 'transparent' : '#e3c042'}`
          }}
        >
          <MarqueeRow row={row}></MarqueeRow>
        </FastMarquee>
      );
    })}
  </>
);
export default Marquee;
