import Link from "next/link";
import type { ProjectType } from "lib/types";
import { NAV_ITEMS } from "app/constants";

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
