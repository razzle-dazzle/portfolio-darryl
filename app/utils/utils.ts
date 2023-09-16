import { projectTypes } from 'lib/_all-db';
import { ProjectImageCollection, ProjectType, ProjectTypes } from 'lib/types';

/** Return the path to an SVG stack icon given the theme and the icon filename */
export function getThemedIcon(
  theme: string | undefined,
  filename: string
): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/icons/${themeMode}/${filename}.${themeMode}mode.svg`;
  return iconSrc;
}

/** Return the path to the themed SVG website logo */
export function getThemedWebsiteLogo(
  theme: string | undefined
): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/logo/logo-${themeMode}.svg`;
  return iconSrc;
}

/** 
 * Get a structured project images object, based on the image folder
 */
export function getProjectImages(project: ProjectType): ProjectImageCollection {
  const basePath = `/projects/${project.images}/${project.images}`;
  const hasFeaturedImage = !!project.featured
  const images = {
    original: `${basePath}.jpg`,
    small: `${basePath}_small.jpg`,
    medium: `${basePath}_medium.jpg`,
    large: `${basePath}_large.jpg`,
    featured: hasFeaturedImage ? `${basePath}_featured.jpg` : '',
  };
  return images;
}

/**
 * Get the best poster image for the project
 * If the project is featured, get the featured image if there is one, else the original image
 */
export function getProjectPosterImage(project: ProjectType): string {
  const images = getProjectImages(project);
  return images.featured && project.featured ? images.featured : images.original;
}

export const getProjectTypeFromId = (projectType: ProjectType['type']): ProjectTypes['title'] => {
  const type = projectTypes.find(p => p.id === projectType);
  if (type) return type.title;
  return '';
};

/** Sort projects by completed date */
export const sortProjects = (a: ProjectType, b: ProjectType) => {
  const aDate = new Date(a.completed);
  const bDate = new Date(b.completed);

  if (aDate.getTime() < bDate.getTime()) {
    return 1;
  }
  if (aDate.getTime() === bDate.getTime()) {
    return 0;
  }

  return -1;
};

/** Take a date like "2023-03-21" and return the full year like 2023 */
export function getYearFromDate(dateStr: string): string {
  if (!dateStr) {
    return "";
  }
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return '' + date.getFullYear();
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
  return date.toLocaleString("default", { month: "long" });
}
