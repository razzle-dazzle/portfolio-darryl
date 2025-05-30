import React from "react";
import Image from "next/image";
import type { ProjectType } from "lib/types";
import {
  getProjectBookmarkFromUrl,
  getProjectImages,
  getProjectTypeFromId,
} from "app/utils/utils";
import { ProjectLink } from "./ProjectLink";

type FullProps = {
  project: ProjectType;
  priority: boolean;
};

export default function Full({ project, priority }: FullProps) {
  const projectImages = getProjectImages(project);
  // const hasSubProjects = project?.projects && project.projects.length > 0;
  const projectBookmark = getProjectBookmarkFromUrl(project);

  return (
    <div className="md:col-span-3">
      <ProjectLink project={project}>
        <article className="w-full py-2 md:py-4">
          <div className="mb-4">
            <h2
              id={projectBookmark}
              className="text-xl md:text-[28px] mb-1.5 text-black dark:text-white font-bold"
            >
              {project.title}
              <span className="text-sm md:text-lg inline-block pl-4 text-gray-400 font-medium">
                {project.completed.substring(0, 4)}
              </span>
            </h2>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="w-full flex flex-row gap-4 md:gap-12 xl:gap-[5.625rem] items-start">
              <div className="relative w-[40vw] h-[30vw] md:w-[470px] md:h-[354px] flex flex-grow-0 flex-shrink-0">
                <Image
                  alt={project.title}
                  fill={true}
                  sizes="(max-width: 500px) 100vw, 120px"
                  src={projectImages.featured || projectImages.original}
                  className="rounded md:rounded-xl"
                  quality={96}
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex flex-col flex-grow-1 w-full">
                <ProjectTypeBlock>
                  {/* {hasSubProjects ? project.title : getProjectTypeFromId(project.type)} */}
                  {getProjectTypeFromId(project.type)}
                </ProjectTypeBlock>
                <ProjectDescBlock>{project.description}</ProjectDescBlock>
                {project?.projects && project.projects.length > 0 && (
                  <React.Fragment>
                    {project.projects.map((subProject, subKey) => {
                      return (
                        <div
                          className="mt-8 hidden md:block"
                          key={subProject.id}
                        >
                          <ProjectTypeBlock>
                            {subProject.title}
                          </ProjectTypeBlock>
                          <ProjectDescBlock>
                            {subProject.description}
                          </ProjectDescBlock>
                        </div>
                      );
                    })}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </article>
      </ProjectLink>
    </div>
  );
}

const ProjectTypeBlock = ({ children }: React.PropsWithChildren) => {
  return (
    <p className="md:text-2xl !leading-relaxed font-bold mb-1 text-black dark:text-white">
      {children}
    </p>
  );
};

const ProjectDescBlock = ({ children }: React.PropsWithChildren) => {
  return (
    <p className="text-sm md:text-[22px] text-neutral-800 dark:text-white !leading-normal line-clamp-5 sm:line-clamp-5 md:line-clamp-none">
      {children}
    </p>
  );
};
