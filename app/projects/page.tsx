import type { Metadata } from "next";
import IconsCloud from "./IconsCloud";
import React, { useEffect } from "react";
import { ProjectType, StackIcon } from 'lib/types';
import myProjectService from 'app/services/projects.service';
import ProjectsList from './ProjectsList';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Checkout the projects that I have worked on over the years as a developer.",
};


/**
 * Project page will show everything as after 2022
 * Pre-2022 and each year will be "archive". 2022 archivve, 2021 archive etc...
 * Anything before 2020 will have a small thumbnail and be in 3 columns
 */
export default async function ProjectsPage() {
  
  const cloudData = myProjectService.buildCloud();
  
  return (
    <section className="container xl:max-w-7xl m-auto relative mt-0 md:mt-12 px-6">
      <div className="my-8 md:my-16">
        <IconsCloud data={cloudData} />
      </div>
      <h1 className="text-3xl md:text-[40px] leading-snug -tracking-wider font-semibold mb-12 md:mb-24 text-black dark:text-white">
        Project Showcase: Professional Projects and Fun Little Experiments
      </h1>

      <ProjectsList />

      
    </section>
  );
}
