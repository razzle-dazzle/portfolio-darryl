import { NAV_ITEMS } from "app/constants";
import Link from "next/link";
import React from "react";
import { ProjectType } from "lib/types";
import Full from './Full';
import Mini from './Mini';

type ProjectListItemProps = {
  project: ProjectType;
  /** If the project will be full width or 3-per-column */
  viewType: "full" | "mini";
};

const ProjectListItem = ({ project, viewType }: ProjectListItemProps) => {
  if (viewType === "full") {
    return <Full project={project}></Full>
  } else {
    return <Mini project={project}></Mini>
  }
};

export default ProjectListItem;

export const ProjectLink = ({
  project,
  children,
}: React.PropsWithChildren<{
  project: ProjectType;
}>) => {
  return (
    <Link href={`${NAV_ITEMS.projects.path}${project.alias}`}>{children}</Link>
  );
};
