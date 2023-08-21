import { NAV_ITEMS } from "app/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Project } from "contentlayer/generated";
import Balancer from 'react-wrap-balancer';

type ProjectListItemProps = {
  project: Project;
  /** If the project will be full width or 3-per-column */
  viewType: "full" | "mini";
};

const ProjectListItem = ({ project, viewType }: ProjectListItemProps) => {
  if (viewType === "full") {
    return (
      <div
        className="p-0 bg-neutral-100 dark:bg-neutral-900 md:col-span-3"
        // style={{
        //   boxShadow: "inset 0 0 0 1px rgb(255 255 255/.1)",
        //   borderRadius: "12px",
        // }}
      >
        <ProjectLink project={project}>
          <div className="flex flex-col space-y-1">
            <div className="w-full flex flex-row gap-4 md:gap-6 items-center">
              {project.thumbnail && (
                <div className="relative w-16 md:w-20 h-16 md:h-20 flex flex-[80px] flex-grow-0 flex-shrink-0">
                  <Image
                    alt={project.title}
                    height={80}
                    width={80}
                    // fill={true}
                    // sizes='80px'
                    src={project.thumbnail}
                    className="rounded-lf"
                    quality={100}
                    style={{
                      width: "100%",
                      // height: 'auto',
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              )}
              <div className="flex flex-col">
                <p className="text-lg md:text-2xl mb-1.5 text-neutral-800 dark:text-neutral-200 line-clamp-1">
                  {project.title}
                </p>
                <p className="text-xs md:text-md font-light text-neutral-800 dark:text-neutral-200 line-clamp-2 mb-0">
                  {project.summary}
                </p>
                {/* <p className="text-xs italic font-bold text-neutral-800 dark:text-neutral-200">
                Completed: {project.publishedAt}
              </p> */}
              </div>
              {/* <ViewCounter
                  allViews={allViews}
                  slug={post.slug}
                  trackView={false}
                /> */}
            </div>
          </div>
        </ProjectLink>
      </div>
    );
  } else {
    return (
      <ProjectLink project={project}>
        <article className="flex flex-col w-full p-2 py-4">
          <h2 className="font-bold text-black dark:text-white text-lg md:text-xl mb-4">{project.title}</h2>
          <p className="text-sm md:text-md text-neutral-800 dark:text-neutral-200 line-clamp-3 mb-0">
            <Balancer ratio={0.8}>{project.summary}</Balancer>
          </p>
        </article>
      </ProjectLink>
    );
  }
};

export default ProjectListItem;

const ProjectLink = ({
  project,
  children,
}: React.PropsWithChildren<{
  project: Project;
}>) => {
  return (
    <Link href={`${NAV_ITEMS.projects.path}/${project.slug}`}>{children}</Link>
  );
};
