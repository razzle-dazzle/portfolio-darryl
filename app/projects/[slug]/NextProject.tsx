"use client";

import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ProjectType, projects } from "lib/_all-db";
import myProjectService from "app/services/projects.service";
import Button from "app/components/Button";

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

  function goBack(event: any): void {
    router.back();
  }

  return (
    <div className="flex justify-between my-6 md:my-12">
      <div className="flex basis-1/2 md:basis-2/5 justify-start md:justify-end flex-shrink-0">
        <Button icon iconPlacement="left" onClick={goBack}>
          Back
        </Button>
        {/* <button
          className={clsx(specialButtonStyles, "text-lg font-normal md:px-6")}
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <mask
              id="mask0_587_10101"
              style={{
                maskType: "alpha",
              }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="33"
              height="32"
            >
              <rect
                width="32"
                height="32"
                transform="matrix(-1 0 0 1 32.5 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_587_10101)">
              <path
                d="M24.2328 23.7998L25.6328 22.3998L11.8995 8.6665H24.4995V6.6665H8.49948V22.6665H10.4995V10.0665L24.2328 23.7998Z"
                fill="#1795FF"
              />
            </g>
          </svg>
          <span className="text-[#0038FF] dark:text-[#4EDDBE] font-bold text-sm md:text-xl uppercase whitespace-nowrap">
            Back
          </span>
        </button> */}
      </div>
      <div className="flex basis-1/2 md:basis-2/5 justify-end md:justify-start flex-shrink-0">
        <Button icon onClick={(_e) => goToProject(nextPrev.next)}>
          Next project
        </Button>
        {/* <button
          className={clsx(
            specialButtonStyles,
            "!h-[52px]",
            "text-lg font-normal md:px-6"
          )}
          onClick={(_e) => goToProject(nextPrev.next)}
        >
          <span className="text-[#0038FF] dark:text-[#4EDDBE] font-bold text-sm md:text-xl uppercase whitespace-nowrap">
            Next project
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <mask
                id="mask0_587_10107"
                style={{
                  maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="33"
                height="32"
              >
                <rect x="0.5" width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_587_10107)">
                <path
                  d="M8.76719 23.7998L7.36719 22.3998L21.1005 8.6665H8.50052V6.6665H24.5005V22.6665H22.5005V10.0665L8.76719 23.7998Z"
                  fill="#1795FF"
                />
              </g>
            </svg>
          </span>
        </button> */}
      </div>
    </div>
  );
}

function getNextPrevProjects(currentProjectId: ProjectType["id"]): {
  next: ProjectType | null;
  prev: ProjectType | null;
} {
  const currentArrayIndex = projects.findIndex(
    (p) => p.id === currentProjectId
  );
  const maxIndex = projects.length - 1;
  if (currentArrayIndex === -1) {
    return {
      next: null,
      prev: null,
    };
  }

  let prev: ProjectType;
  let next: ProjectType;

  // work out the prev project
  if (currentArrayIndex === 0) {
    prev = projects[maxIndex];
  } else {
    prev = projects[currentArrayIndex - 1];
  }

  // work out the next project
  if (currentArrayIndex >= maxIndex) {
    next = projects[0];
  } else {
    next = projects[currentArrayIndex + 1];
  }

  return {
    next,
    prev,
  };
}
