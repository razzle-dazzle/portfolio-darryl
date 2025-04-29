"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "app/constants";
import Button from "../Button";

type SeeAllProjectsProps = {
  projectsCount: number;
}
export default function SeeAllProjects({ projectsCount }: SeeAllProjectsProps) {
  const router = useRouter();

  return (
    <Button
      icon
      onClick={() => router.push(NAV_ITEMS.projects.path)}
      size="default"
    >
      {`See all ${projectsCount} projects`}
    </Button>
  );
}
