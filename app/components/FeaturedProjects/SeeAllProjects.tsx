"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "app/constants";
import Button from "../Button";

export default function SeeAllProjects() {
  const router = useRouter();

  return (
    <Button
      icon
      onClick={() => router.push(NAV_ITEMS.projects.path)}
      size="large"
    >
      See all projects
    </Button>
  );
}
