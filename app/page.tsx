import Link from "next/link";
import Image from "next/image";
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from "app/components/icons";
import Marquee from "./components/Marquee";
import FeaturedProjects from "./components/FeaturedProjects";
import Balancer from 'react-wrap-balancer';

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <section className="max-w-7xl m-auto mb-36 relative pb-24 mt-16">
        <div className='relative w-full md:w-[1280px] h-[450px]'>
          
          <Image
              src={'/main-title_dark.svg'}
              fill={true}
              sizes='(max-width: 500px) 100vw, 120px'
              // width="0"
              // height="0"
              style={{
                // objectFit: "contain",
                objectFit: "cover",
                borderRadius: 3,
              }}
              
              alt={'Front End Developer - Darryl October'}
            />
        </div>
        {/* <h1 className="font-bold text-3xl text-neutral-800 dark:text-white">Darryl October</h1> */}

        {/* <p className="text-[204px] text-left leading-none uppercase text-neutral-800 dark:text-neutral-200">
          Front
          <span
            className="text-orange-300"
            style={{
              fontSize: "126px",
              display: "inline-block",
              // letterSpacing: "-20px",
              fontFamily: "ui-monospace",
              position: "relative",
              top: "-40px",
              marginLeft: "-24px",
              marginRight: "-6px",
            }}
          >
            &mdash;
          </span>
          End Expert
        </p> */}
        <aside className='absolute top-[255px] right-0 w-[406px]'>
          <div className="ml-auto mr-0 max-w-[460px]">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">About</h2>

            <p className="my-5  text-neutral-800 dark:text-neutral-200 text-md">
              <Balancer ratio={0.8}>
              Builder of high-end web applications, commercial web solutions,
              single page applications, responsive & mobile friendly websites.
              Full-stack developer specialising in frontend engineering and
              technologies. Over 15 years experience. Builder of high-end web
              applications, commercial web solutions, single page applications,
              responsive & mobile friendly websites. Full-stack developer
              specialising in frontend engineering and technologies. Over 15
              years experience.
              </Balancer>
            </p>
          </div>
        </aside>
      </section>
      <section className="max-w-full dm:max-w-7xl m-auto py-4 md:py-16 bg-neutral-100 dark:bg-transparent overflow-hidden min-h-[335px] md:min-h-[425px]">
        <Marquee></Marquee>
      </section>
      <section className="py-4 md:py-16">
        <FeaturedProjects />
      </section>
      {/* <section className="max-w-7xl m-auto mb-12 relative pb-24">
        <h1 className='uppercase text-7xl'>Let's work together</h1>
      </section> */}
    </>
  );
}
