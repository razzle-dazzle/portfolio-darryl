import Marquee from "./components/Marquee";
import FeaturedProjects from "./components/FeaturedProjects";
import Balancer from "react-wrap-balancer";
import FrontendHeading from "./components/FrontendHeading";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <section className="xl:max-w-7xl px-6 md:px-0 md:mx-auto container my-8 md:mb-32 relative pb-4 md:pb-8 md:mt-16 xl:min-h-[35vh] 2xl:min-h-[45vh]">
        <div className="relative w-[calc(100vw-3rem)] h-[33vw] md:w-[640px] md:h-[216px] lg:w-[960px] lg:h-[340px] xl:w-[1280px] xl:h-[436px]">
          <FrontendHeading></FrontendHeading>
        </div>
        <aside className="my-1 sm:my-3 md:my-6 lg:my-0 md:absolute lg:top-[210px] xl:top-[272px] md:right-0 w-full lg:w-[300px] xl:w-[420px]">
          <div className="ml-auto mr-0 md:px-6 lg:px-0 lg:max-w-[460px] flex">
            <h2 className="font-regular text-xl text-neutral-800 dark:text-neutral-200 sm:basis-[100px] leading-[20px] hidden sm:block">
              ABOUT
            </h2>
            <p className="text-neutral-800 dark:text-neutral-200 text-base lg:text-md xl:text-xl !leading-snug flex-grow my-0">
              <Balancer ratio={0.25}>
                Builder of high-end web applications, commercial web solutions,
                single page applications, responsive & mobile friendly websites.
                Full-stack developer specialising in frontend engineering and
                technologies. Over 15 years experience.
              </Balancer>
            </p>
          </div>
        </aside>
      </section>
      <section className="py-2 md:max-w-full md:m-auto md:py-16 overflow-hidden min-h-[180px] md:min-h-[425px]">
        <Marquee></Marquee>
      </section>
      <section className="py-8 md:py-16 px-6 md:px-0 container xl:max-w-7xl mx-auto">
        <FeaturedProjects />
      </section>
    </>
  );
}
