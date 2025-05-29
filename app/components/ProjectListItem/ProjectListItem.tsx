import type React from "react";
import type { ProjectType } from "lib/types";
import Full from "./parts/Full";
import Mini from "./parts/Mini";

type ProjectListItemProps = {
  project: ProjectType;
  /** If the project will be full width or 3-per-column */
  viewType: "full" | "mini";
  priority: boolean;
};

const ProjectListItem = ({ project, viewType, priority }: ProjectListItemProps) => {
  return viewType === "full" ? (
    <Full project={project} priority={priority} />
  ) : (
    <Mini project={project} />
  );
};

export default ProjectListItem;
