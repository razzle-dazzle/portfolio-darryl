import { NAV_ITEMS } from "app/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Project } from "contentlayer/generated";

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  // console.log({ here: "#############\n", project });
  return (
    <div
      className="mb-4 p-4 bg-neutral-200 dark:bg-neutral-800"
      style={{
        // backgroundColor: "#282c34",
        boxShadow: "inset 0 0 0 1px rgb(255 255 255/.1)",
        borderRadius: "12px",
      }}
    >
      <Link
        key={project.slug}
        className="flex flex-col space-y-1"
        href={`${NAV_ITEMS.projects.path}/${project.slug}`}
      >
        <div className="w-full flex flex-row gap-6">
          {project.thumbnail && (
            <div className="relative w-16 md:w-20 h-16 md:h-20 flex flex-[80px] flex-grow-0">
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
                  borderRadius: '4px',
                }}
              />
            </div>
          )}
          <div>
            <p className="text-lg md:text-2xl mb-1 text-neutral-800 dark:text-neutral-200">{project.title}</p>
            <p className="text-xs md:text-md font-light mb-0.5 text-neutral-800 dark:text-neutral-200">{project.summary}</p>
            <p className="text-xs italic font-bold text-neutral-800 dark:text-neutral-200">
              Completed: {project.publishedAt}
            </p>
          </div>
          {/* <ViewCounter
                allViews={allViews}
                slug={post.slug}
                trackView={false}
              /> */}
        </div>
      </Link>
    </div>
  );
};

export default ProjectListItem;
