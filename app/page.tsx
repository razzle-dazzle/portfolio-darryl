import Marquee from "./components/Marquee";
import FeaturedProjects from "./components/FeaturedProjects";
import Balancer from "react-wrap-balancer";
import FrontendHeading from "./components/FrontendHeading";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <section className="max-w-7xl m-auto my-4 md:mb-36 relative pb-4 md:pb-8 md:mt-16">
        <div className="relative w-[calc(100vw-2rem)] h-[33vw] md:w-[1280px] md:h-[418px]">
          <FrontendHeading></FrontendHeading>
        </div>
        <aside className="my-6 md:my-0 md:absolute md:top-[255px] md:right-0 md:w-[406px]">
          <div className="ml-auto mr-0 max-w-[460px]">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              About
            </h2>
            <p className="my-5  text-neutral-800 dark:text-neutral-200 text-md">
              <Balancer ratio={0.8}>
                Builder of high-end web applications, commercial web solutions,
                single page applications, responsive & mobile friendly websites.
                Full-stack developer specialising in frontend engineering and
                technologies. Over 15 years experience.
              </Balancer>
            </p>
          </div>
        </aside>
      </section>
      <section className="max-w-full dm:max-w-7xl m-auto py-2 md:py-16 bg-neutral-100 dark:bg-transparent overflow-hidden min-h-[215px] md:min-h-[425px]">
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
