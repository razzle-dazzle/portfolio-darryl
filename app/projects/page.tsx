import type { Metadata } from "next";
import ProjectListItem from "app/components/ProjectListItem/ProjectListItem";
import IconsCloud from "./IconsCloud";
import { projects } from "lib/_all-db";
import React from "react";
import clsx from 'clsx';
import { ProjectType, StackIcon } from 'lib/types';
import { sortProjects } from 'app/utils/utils';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Checkout the projects that I have worked on over the years as a developer.",
};

const cloudData = buildCloud(projects);

/**
 * Project page will show everything as after 2022
 * Pre-2022 and each year will be "archive". 2022 archivve, 2021 archive etc...
 * Anything before 2020 will have a small thumbnail and be in 3 columns
 */
export default async function ProjectsPage() {
  // const allViews = await getViewsCount();
  const thisYear = new Date().getFullYear();
  // keep track of when heading needs adding to the html
  let currentYearHeading = -1;

  return (
    <section className="container xl:max-w-7xl m-auto relative mt-0 md:mt-12 px-6">
      <div className="my-16">
        <IconsCloud data={cloudData}></IconsCloud>
      </div>
      <h1 className="text-3xl font-bold mb-12 text-black dark:text-white">
        Project Showcase: Professional Projects and Fun Little Experiments
      </h1>

      <div className="grid columns-1 md:columns-3 gap-8 md:gap-12">
        {projects
          .sort(sortProjects)
          .map((project, pIndex) => {
            const thisProjectYear = new Date(
              `${project.completed} 09:00:00`
            ).getFullYear();
            const isOlderThan2021 = thisProjectYear < 2021;
            const isOlderThan2019 = thisProjectYear < 2019;

            let heading = "";
            if (thisProjectYear !== currentYearHeading) {
              // if is before 2019, go in batches of 5?
              // @todo
              currentYearHeading = thisProjectYear;
              heading = thisProjectYear.toString();
            }

            return (
              <React.Fragment key={pIndex}>
                {heading ? (
                  <h2 className={
                    clsx(
                      "text-4xl md:text-8xl font-medium text-black dark:text-white md:col-span-3",
                      // handle a separator like a HR - by adding margin/padding
                      "my-3 mt-0 md:my-6 py-3 md:py-6 md:pt-16 md:mb-0",
                      // pIndex === 0 ? '' : 'border-t-gray-200 border-t', // HR hidden for now
                      "mb-[-20px] md:mb-[-40px]",
                    )
                  }>
                    {heading}
                    {thisProjectYear !== thisYear ? (
                      <span className="text-xl text-gray-400 dark:text-gray-400 inline-block pl-4">
                        Archive
                      </span>
                    ) : null}
                  </h2>
                ) : null}

                <ProjectListItem
                  key={project.alias}
                  project={project}
                  viewType={isOlderThan2021 ? "mini" : "full"}
                ></ProjectListItem>
              </React.Fragment>
            );
          })}
      </div>

      <div className="my-12"></div>
    </section>
  );
}

function buildCloud(items: ProjectType[]): Record<StackIcon, number> {
  const counts: Record<StackIcon, number> = {} as Record<StackIcon, number>;
  items.forEach((p) => {
    p.stack &&
      p.stack.forEach((_icon: StackIcon) => {
        if (counts[_icon]) {
          counts[_icon]++;
        } else {
          counts[_icon] = 1;
        }
      });
  });
  return counts;
}
