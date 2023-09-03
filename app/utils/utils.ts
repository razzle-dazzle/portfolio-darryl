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
