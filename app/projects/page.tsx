import type { Metadata } from "next";
import IconsCloud from "./IconsCloud";
import React, { Suspense, useEffect } from "react";
import myProjectService from "app/services/projects.service";
import ProjectsList from "./ProjectsList";
import ProjectBreadcrumbs, {
  ProjectBreadcrumbsProps,
} from "./[slug]/ProjectBreadcrumbs";

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
  const breadcrumbs: ProjectBreadcrumbsProps = {
    crumbs: [
      {
        label: "Projects",
      },
    ],
  };

  return (
    <section className="container xl:max-w-7xl m-auto relative px-4 md:px-6">
      <ProjectBreadcrumbs {...breadcrumbs} />
      <h1 className="text-2xl md:text-[40px] leading-tight font-semibold mb-4 md:mb-12 text-black dark:text-white">
        Project Showcase: Professional Projects and Fun Little Experiments
      </h1>
      <div className="my-4 md:my-16 md:mt-12">
        <IconsCloud data={cloudData} />
      </div>
      

      <Suspense fallback={<div className="text-center my-12">Loading...</div>}>
        <ProjectsList />
      </Suspense>
    </section>
  );
}
