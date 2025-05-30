"use client";

import ProjectBox from "./parts/ProjectBox";
import { projects } from "lib/_all-db";
import SeeAllProjects from "./parts/SeeAllProjects";
import type { ProjectType } from "lib/types";

const featuredProjects: ProjectType[] = projects
  .filter((p) => p.homepage)
  .map((p) => {
    // @todo - replace this with getProjectImages()
    return {
      ...p,
      image: `/projects/${p.images}/${p.images}_featured.jpg`,
      role: p.role ?? "",
      stack: [...(p.stack ?? [])],
    };
  })
  .sort((p1, p2) => {
    const fullDate1 = new Date(`${p1.completed} 00:00:00`);
    const fullDate2 = new Date(`${p2.completed} 00:00:00`);
    return fullDate1.getTime() > fullDate2.getTime() ? -1 : 1;
  });

type FeaturedProjectsProps = {
  projectsCount: number;
};
const FeaturedProjects = ({ projectsCount }: FeaturedProjectsProps) => {
  return (
    <div className="max-w-7xl m-auto py-4 md:py-12 relative overflow-hidden">
      {/* The big shadow text */}
      <p className="hidden xl:block text-2xl xl:text-[110px] relative text-neutral-200 dark:text-neutral-700 font-medium z-10 !leading-normal opacity-40 overflow-hidden whitespace-nowrap mb-24 lg:left-[24px]">
        Featured Projects
      </p>
      {/* The smaller text */}
      <h2 className="xl:leading-[150px] font-bold text-xl md:text-3xl xl:text-4xl mb-6 xl:mb-24 z-20 xl:absolute inset-0 bottom-[unset] xl:top-[100px] text-black dark:text-white">
        Featured Projects
      </h2>

      <div>
        {featuredProjects.map((project, index) => {
          return (
            <ProjectBox
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              project={project}
              // flip={index % 2 === 1}
            />
          );
        })}
      </div>

      <div className="flex flex-row gap-4 justify-end items-center mt-12">
        <SeeAllProjects projectsCount={projectsCount} />
      </div>
    </div>
  );
};

export default FeaturedProjects;
