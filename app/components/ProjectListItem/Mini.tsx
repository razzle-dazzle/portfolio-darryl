import type { ProjectType } from "lib/types";
import React from "react";
import { ProjectLink } from "./ProjectListItem";
import Balancer from "react-wrap-balancer";
import clsx from 'clsx';
import { getProjectBookmarkFromUrl } from "app/utils/utils";

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
            {/* {project.thumbnail && (
              <div className="relative w-[80px] h-[60px] md:w-[120px] md.h-[90px] flex flex-grow-0 flex-shrink-0">
                <Image
                  alt={project.title}
                  // height={80}
                  // width={80}
                  fill={true}
                  sizes="(max-width: 500px) 80px, 120px"
                  src={project.thumbnail}
                  className="rounded-lf"
                  quality={80}
                  style={{
                    width: "100%",
                    // height: 'auto',
                    objectFit: "cover",
                    borderRadius: "4px",
                    
                  }}
                />
              </div>
            )} */}
            <div className="flex flex-col items-start">
              {/* border-b border-neutral-800 dark:border-[#F8CB01] */}
              <h2 id={projectBookmark} className={
                clsx(
                  "md:text-lg mb-2 md:mb-4 pb-1 line-clamp-1 md:line-clamp-1 font-bold",
                  "p-1 rounded-lg",
                  "text-black dark:text-white hover:bg-klein dark:hover:bg-mustard hover:text-white dark:hover:text-black",
                )
              }>
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
