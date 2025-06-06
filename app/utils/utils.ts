import {
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "lib/project-categories";
import type { ProjectImageCollection, ProjectType } from "lib/types";

const DATE_LOCALE = "en-GB";

/** Returns the path to an SVG stack icon based on the theme and the icon filename */
export function getThemedIcon(
  theme: string | undefined,
  filename: string
): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/icons/${themeMode}/${filename}.${themeMode}mode.svg`;
  return iconSrc;
}

/** Returns the path to the themed SVG website logo */
export function getThemedWebsiteLogo(theme: string): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/logo/logo-${themeMode}.svg`;
  return iconSrc;
}

/** Build project images data based on the image folder in the data */
export function getProjectImages(project: ProjectType): ProjectImageCollection {
  const basePath = `/projects/${project.images}/${project.images}`;
  const hasFeaturedImage = !!project.featured;
  const images = {
    original: `${basePath}.jpg`,
    small: `${basePath}_small.jpg`,
    medium: `${basePath}_medium.jpg`,
    large: `${basePath}_large.jpg`,
    featured: hasFeaturedImage ? `${basePath}_featured.jpg` : "",
  };
  return images;
}

/**
 * Get the best poster image for the project
 * If the project is featured, get the featured image if there is one, else the original image
 */
export function getProjectPosterImage(project: ProjectType): string {
  const images = getProjectImages(project);
  return images.featured && project.featured
    ? images.featured
    : images.original;
}

export function getProjectTypeFromId(
  projectType: ProjectType["type"]
): ProjectCategory["title"] {
  const type = PROJECT_CATEGORIES.find((p) => p.id === projectType);
  if (type) return type.title;
  return "";
}

/** Sort projects by completed date */
export function sortProjects(a: ProjectType, b: ProjectType) {
  const aDate = new Date(a.completed);
  const bDate = new Date(b.completed);

  if (aDate.getTime() < bDate.getTime()) {
    return 1;
  }
  if (aDate.getTime() === bDate.getTime()) {
    return 0;
  }

  return -1;
}

/** Take a date like "2023-03-21" and return the full year like 2023 */
export function getYearFromDate(dateStr: string): string {
  if (!dateStr) {
    return "";
  }
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return `${date.getFullYear()}`;
}

/** Take a date like "2023-03-21" and return the month like "September" */
export function getMonthFromDate(
  dateStr: string,
  monthFormat: "long" | "short" = "long"
) {
  if (!dateStr) {
    return "";
  }
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return date.toLocaleString(DATE_LOCALE, { month: "long" });
}

/** Return a date like "June 2023" */
export function getProjectDateFriendly(project: ProjectType): string {
  const month = getMonthFromDate(project.completed);
  const year = getYearFromDate(project.completed);
  return `${month} ${year}`;
}

export function getProjectOngoingDateFriendly() {
  return "Project ongoing";
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getProjectBookmarkFromUrl(project: ProjectType) {
  return `project-${project.alias.replace("/", "").toLowerCase()}`;
}
