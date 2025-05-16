import type { ProjectType } from "lib/types";
import React from "react";
import Balancer from "react-wrap-balancer";
import clsx from "clsx";
import { getProjectBookmarkFromUrl } from "app/utils/utils";
import { ProjectLink } from "./ProjectLink";

type MiniProps = {
  project: ProjectType;
};
export default function Mini({ project }: MiniProps) {
  const projectBookmark = getProjectBookmarkFromUrl(project);

  return (
    <div className="">
      <ProjectLink project={project}>
        <article className="w-full py-2 md:py-4">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col items-start">
              <h2
                id={projectBookmark}
                className={clsx(
                  "md:text-lg mb-2 md:mb-4 pb-1 line-clamp-1 md:line-clamp-1 font-bold",
                  "p-1 rounded-lg",
                  "text-black dark:text-white hover:bg-klein dark:hover:bg-mustard hover:text-white dark:hover:text-black"
                )}
              >
                {project.title}
              </h2>
              <p className="text-[13px] md:text-md xl:text-[22px] text-neutral-800 dark:text-neutral-200 mb-0 !leading-normal">
                <Balancer ratio={0.35}>{project.description}</Balancer>
              </p>
            </div>
          </div>
        </article>
      </ProjectLink>
    </div>
  );
}
