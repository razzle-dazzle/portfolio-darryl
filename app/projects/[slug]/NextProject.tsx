"use client";

import React from "react";
import { useRouter } from "next/navigation";
import myProjectService from "app/services/projects.service";
import Button from "app/components/Button";
import { ProjectType } from 'lib/types';

type Props = {
  currentProject: ProjectType;
};
export default function NextProject({ currentProject }: Props) {
  const router = useRouter();

  const nextPrev = myProjectService.getNextPrevProjects(currentProject.id);
  if (!nextPrev.next && !nextPrev.prev) return null;

  function goToProject(newProject: ProjectType | null) {
    if (!newProject) return;
    router.push(myProjectService.getProjectRoute(newProject));
  }

  return (
    <div className="flex justify-between my-6 md:my-12">
      <div className="flex basis-1/2 md:basis-2/5 justify-start md:justify-end flex-shrink-0">
        <Button icon iconPlacement="left" onClick={(_e) => goToProject(nextPrev.prev)}>
          Prev Project
        </Button>
      </div>
      <div className="flex basis-1/2 md:basis-2/5 justify-end md:justify-start flex-shrink-0">
        <Button icon onClick={(_e) => goToProject(nextPrev.next)}>
          Next project
        </Button>
      </div>
    </div>
  );
}
