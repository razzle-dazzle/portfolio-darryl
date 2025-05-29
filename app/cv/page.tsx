import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CVBlock from "app/components/CVBlock/CVBlock";
import { cv } from "./data";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
} from "app/components/Icons/Icons";
import Logo from "app/components/Logo/Logo";

export const metadata: Metadata = {
  title: "CV",
  description: "Download my CV Resume.",
};

const iconLinks: {
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
];

export default async function CVPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 p-6 md:px-16 my-4 md:my-12 print:my-0 print:p-0">
      <Section>
        <header className="flex flex-row items-center justify-start gap-4 mb-4">
          <Logo size="small" />
          <h1 className="font-bold text-3xl">Darryl October</h1>
          <a className="text-base print:text-sm text-gray-800 dark:text-white ml-auto underline" href="https://darryloctober.co.uk" target="_blank" rel="noreferrer">
            darryloctober.co.uk
          </a>
        </header>

        <div className="grid grid-cols-3 gap-2 items-start">
          <div className="col-span-2">
            <p className="text-md font-bold">Senior Frontend Developer</p>
            <p className="text-md">Barcelona, Spain</p>
          </div>
          <div className="">
            {/* <p className="text-md font-medium hidden print:block">
              www.darryloctober.co.uk
            </p> */}

            <div className="flex flex-row gap-4 justify-end">
              {iconLinks.map((link, index) => {
                return (
                  <a
                    href={link.link}
                    title={link.title}
                    target={link.target}
                    className="flex flex-row gap-4 items-center"
                    key={link.title}
                  >
                    <span>{link.icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-sm print:text-xs italic text-gray-800 dark:text-white my-4">
          Working mainly with AstroJS, Next.js, Preact, React, React Native -
          check out my portfolio for a full list of skills and technologies.{" "}
          <Link href={"https://www.darryloctober.co.uk"} target="_blank" />
        </p>
      </Section>

      <Section>
        <CVBlock items={cv} />
      </Section>

      <Section>
        <h2 className="font-bold text-2xl my-4">Languages</h2>

        <ul className="grid grid-cols-2 gap-4 text-black dark:text-white">
          <li>
            <h3 className="font-bold text-lg">English</h3>
            <p>Native</p>
          </li>
          <li>
            <h3 className="font-bold text-lg">Spanish</h3>
            <p>B2 Proficiency</p>
          </li>
          <li>
            <h3 className="font-bold text-lg">Catalan</h3>
            <p>B1 Proficiency</p>
          </li>
        </ul>
      </Section>

      <Section>
        <h2 className="font-bold text-2xl my-4">Soft Skills</h2>
        <p>
          I have developed strong skills in <strong>analytical problem solving</strong>, <strong>pro-active decision making</strong> and <strong>strategic thinking</strong> while working in my professional career.
          I am <strong>patient</strong> and like to be <strong>empathetic</strong> and <strong>passionate</strong> and have a strong <strong>attention to detail</strong> when working on projects, as to bring out the best.
          In my spare time I play a lot of music, learn languages and enjoy cooking, socialising, sports and working on side-projects.</p>
      </Section>
    </div>
  );
}

function Section({ children }: { children: ReactNode }) {
  return (
    <section className="container w-full max-w-4xl m-auto relative text-black dark:text-white">
      {children}
    </section>
  );
}
