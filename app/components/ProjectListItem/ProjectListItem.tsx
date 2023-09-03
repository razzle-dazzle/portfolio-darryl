import { NAV_ITEMS } from "app/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { getProjectImages } from "app/utils/utils";
import { ProjectType } from 'lib/types';

type ProjectListItemProps = {
  project: ProjectType;
  /** If the project will be full width or 3-per-column */
  viewType: "full" | "mini";
};

const ProjectListItem = ({ project, viewType }: ProjectListItemProps) => {
  if (viewType === "full") {
    const projectImages = getProjectImages(project);

    return (
      <div
        className="md:col-span-3"
      >
        <ProjectLink project={project}>
          <article className="w-full py-2 md:py-4">
            <div className="mb-4">
              <h2 className="text-xl md:text-3xl mb-1.5 text-black dark:text-white font-bold">
                {project.title}
                <span className="text-sm md:text-lg inline-block pl-4 text-gray-400">
                  {project.completed.substring(0, 4)}
                </span>
              </h2>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-full flex flex-row gap-4 md:gap-12 xl:gap-20 items-start">
                <div className="relative w-[40vw] h-[30vw] md:w-[470px] md:h-[354px] flex flex-grow-0 flex-shrink-0">
                  <Image
                    alt={project.title}
                    // height={80}
                    // width={80}
                    fill={true}
                    sizes="(max-width: 500px) 100vw, 120px"
                    src={projectImages.featured || projectImages.original}
                    className="rounded md:rounded-xl"
                    quality={96}
                    style={{
                      width: "100%",
                      // height: 'auto',
                      objectFit: "cover",
                      // borderRadius: "4px",
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow-1">
                  <p className="md:text-2xl font-bold mb-2 md:mb-4 text-black dark:text-white">Website</p>
                  <p className="text-sm md:text-[22px] text-neutral-800 dark:text-white leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-none">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </ProjectLink>
      </div>
    );
  } else {
    return (
      <div className=''>
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
                <h2 className="font-bold text-black dark:text-white md:text-lg mb-2 md:mb-4 pb-1 line-clamp-1 md:line-clamp-1">
                  {project.title}
                </h2>
                <p className="text-[13px] md:text-md text-neutral-800 dark:text-neutral-200 mb-0 leading-relaxed">
                  <Balancer ratio={0.35}>{project.description}</Balancer>
                </p>
              </div>
            </div>
          </article>
        </ProjectLink>
      </div>
    );
  }
};

export default ProjectListItem;

const ProjectLink = ({
  project,
  children,
}: React.PropsWithChildren<{
  project: ProjectType;
}>) => {
  return (
    <Link href={`${NAV_ITEMS.projects.path}${project.alias}`}>{children}</Link>
  );
};
