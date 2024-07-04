"use client";

import ProjectListItem from "app/components/ProjectListItem";
import myProjectService from "app/services/projects.service";
import { sortProjects } from "app/utils/utils";
import clsx from "clsx";
import type { ProjectType } from "lib/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// async function getData(): Promise<ProjectType[]> {
//   const data = await myProjectService.getProjects();
//   return data;
// }

export default function ProjectsList() {
  const searchParams = useSearchParams();
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const thisYear = new Date().getFullYear();
  // keep track of when heading needs adding to the html
  let currentYearHeading = new Date().getFullYear();
  let hasShownArchiveHeading = false;
  const archiveThresholdYear = 2018;

  useEffect(() => {
    // code for handling search query change
    const filter = searchParams.get("filter");
    myProjectService.getProjectsByTag(filter).then((resp) => {
      // projects = [...resp];
      setProjects([...resp]);
    });
  }, [searchParams]);

  return (
    <React.Fragment>
      <div className="grid columns-1 md:columns-3 gap-8 md:gap-12">
        {projects.sort(sortProjects).map((project, pIndex) => {
          const thisProjectYear = new Date(
            `${project.completed} 09:00:00`
          ).getFullYear();
          const isArchiveProject = thisProjectYear < 2022;
          const oldProject = thisProjectYear <= archiveThresholdYear;

          let heading = "";
          if (
            thisProjectYear !== currentYearHeading &&
            !hasShownArchiveHeading
          ) {
            if (oldProject && !hasShownArchiveHeading) {
              hasShownArchiveHeading = true;
              heading = `${archiveThresholdYear} & Before`;
            } else {
              currentYearHeading = thisProjectYear;
              heading = thisProjectYear.toString();
            }
          }
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <React.Fragment key={pIndex}>
              {heading ? (
                <h2
                  className={clsx(
                    "text-4xl md:text-8xl font-medium text-black dark:text-white md:col-span-3",
                    // handle a separator like a HR - by adding margin/padding
                    "my-3 mt-0 md:my-6 py-3 md:py-6 md:pt-16 md:mb-0",
                    "mb-[-20px] md:mb-[-40px]"
                  )}
                >
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
                viewType={isArchiveProject ? "mini" : "full"}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className="my-12" />
    </React.Fragment>
  );
}
