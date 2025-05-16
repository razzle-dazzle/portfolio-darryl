import type React from "react";
import type { ProjectType } from "lib/types";
import Full from "./parts/Full";
import Mini from "./parts/Mini";

type ProjectListItemProps = {
  project: ProjectType;
  /** If the project will be full width or 3-per-column */
  viewType: "full" | "mini";
};

const ProjectListItem = ({ project, viewType }: ProjectListItemProps) => {
  return viewType === "full" ? (
    <Full project={project} />
  ) : (
    <Mini project={project} />
  );
};

export default ProjectListItem;
