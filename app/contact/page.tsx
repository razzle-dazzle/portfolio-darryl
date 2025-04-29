import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for your next project.",
};

export default async function ContactPage() {
  return (
    <section className="w-full max-w-7xl m-auto relative text-black dark:text-white mt-12 md:mt-20">
      <h1 className="font-medium text-[50px] mb-12 text-center">
        Contact me
      </h1>
      <p className="text-md text-center font-light">
        Please consider me for your next project!
      </p>

      <Link href={"mailto:daz@darryloctober.co.uk"} target="_blank">
        <div className="flex flex-col items-center my-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-20 h-20"
          >
            <title>Envelope</title>
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <p className="text-3xl">Get in touch!</p>
        </div>
      </Link>
    </section>
  );
}
