import { NAV_ITEMS, Project } from "app/constants";
import ProjectBox from "./ProjectBox";
import Link from "next/link";
// import { allProjects } from "contentlayer/generated";
import { FeaturedProject } from '.';

type Props = {
  // projects: Project[];
};


const featuredProjects: FeaturedProject[] = [
  {
    url: "/pocket-barcelona-app",
    title: "Pocket Barcelona",
    description: "An app for tourists and expats visiting and living in Barcelona. Pocket Barcelona features a comprehensive directory, itinerary planner, going-out tips, a map for handy navigation and much more! The project is funded and run independently by local Barcelona expats.",
    image: "/projects/pocketbcn-app/pocketbcn-app_featured.jpg",
    stack: ["ios", "android", "expo", "react", "redux", "nativebase", "typescript"],
  },
  {
    url: "/hostshare",
    title: "Hostshare",
    description: "I completed a 2-day hackathon project for Hostshare for their candidate frontend developer test. The brief was to build 3 main pages from the Airbnb website (home, search results and property listing pages) but not feature complete.",
    image: "/projects/hostshare/hostshare_featured.jpg",
    stack: ["nextjs", "react", "typescript", "tailwind", "sass", "vercel", "npm"],
  },
  {
    url: "/herding-cats-app",
    title: "Herding Cats",
    description: "Herding Cats is an app to help people organise social events with relative ease. The app began as a responsive web app, which we later ported over to React Native. The app allows users to create events and invite people, while managing attendance all in one place.",
    image: "/projects/herdcats-app/herdcats-app_featured.jpg",
    stack: ["ios", "android", "aws", "dynamodb", "firebase", "nodejs", "express", "sendgrid", "expo", "react", "typescript"],
  },
  {
    url: "/wolf",
    title: "WOLF Digital",
    description: "A German-based company manufactoring air conditioning supplies across Europe. WOLF was a major contract spanning several years of development. During the time, we developed multiple websites using Storybook, spanning several languages, many features and sophisticated mini React apps.",
    image: "/projects/wolf-digital/wolf-digital_featured.jpg",
    stack: ["apache", "php", "pimcore", "twig", "react", "typescript", "javascript", "sass", "html5"],
  },
  {
    url: "/arcturus-web-app",
    title: "Arcturus",
    description: "Arcturus web app helps businesses turn climate risk into competitive advantage. The Paris climate accord aims to keep the temperature increase on the planet to 1.5 ̊C by 2100. Arcturus helps business manage and understand their carbon emmissions, amongst other things. My role was to update the app with new features and bug fixes.",
    image: "/projects/arc-app/arc-app_featured.jpg",
    stack: ["aws", "python", "graphql", "angular", "typescript", "mui"],
  },
  {
    url: "/canteen",
    title: "Canteen",
    description: "A lunch delivery service, based in Barcelona. The website uses Shopify Storefront API to handle product listings and checkout with a customized NextJS app to handle the UI. I also used Material Design for the UI framework.",
    image: "/projects/canteen/canteen_featured.jpg",
    stack: ["nextjs", "react", "mui", "typescript", "shopify", "graphql", "pwa", "sass", "vercel"],
  }

]

const FeaturedProjects = ({}: Props) => {
  // const featuredProjects = allProjects
  //   .filter((p) => p.featured === "yes")
  //   .sort((a, b) => {
  //     const aDate = new Date(a.publishedAt);
  //     const bDate = new Date(b.publishedAt);

  //     if (aDate.getTime() < bDate.getTime()) {
  //       return 1;
  //     }
  //     if (aDate.getTime() === bDate.getTime()) {
  //       return 0;
  //     }

  //     return -1;
  //   });

  return (
    <div className="max-w-7xl m-auto py-4 md:py-12 relative overflow-hidden">
      {/* The shadow text */}
      <p className="hidden xl:block text-2xl xl:text-[110px] relative text-neutral-300 dark:text-neutral-700 font-400 z-10 leading-normal opacity-40 uppercase overflow-hidden whitespace-nowrap mb-24 lg:left-[114px]">
        Featured Projects
      </p>
      {/* The smaller text */}
      <h2 className="xl:leading-[150px] font-bold text-xl md:text-3xl xl:text-4xl mb-6 xl:mb-24 z-20 xl:absolute inset-0 bottom-[unset] xl:top-[100px] text-black dark:text-white">
        Featured Projects
      </h2>
      {featuredProjects.map((project, index) => {
        return (
          <ProjectBox key={index} project={project} flip={index % 2 === 1} />
        );
      })}

      <div className="flex flex-row gap-4 justify-end items-center mt-12">
        <Link
          className="text-orange-300 font-medium text-xl"
          href={NAV_ITEMS.projects.path}
        >
          See all projects &raquo;
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
