import { Project } from 'contentlayer/generated';
import { ProjectImageCollection, ProjectType, ProjectTypes, projectTypes } from 'lib/_all-db';

/** Return the path to an SVG stack icon given the theme and the icon filename */
export function getThemedIcon(
  theme: string | undefined,
  filename: string
): string {
  const themeMode = theme === "dark" || theme === "light" ? theme : "dark";
  const iconSrc = `/icons/${themeMode}/${filename}.${themeMode}mode.svg`;
  return iconSrc;
}

export function getProjectImages(project: Project): ProjectImageCollection {
  const basePath = `/projects/${project.images}/${project.images}`;
  const images = {
    original: `${basePath}.jpg`,
    small: `${basePath}_small.jpg`,
    medium: `${basePath}_medium.jpg`,
    large: `${basePath}_large.jpg`,
    featured: `${basePath}_featured.jpg`,
  };
  return images;
}

export function getProjectImages2(project: ProjectType): ProjectImageCollection {
  const basePath = `/projects/${project.images}/${project.images}`;
  const images = {
    original: `${basePath}.jpg`,
    small: `${basePath}_small.jpg`,
    medium: `${basePath}_medium.jpg`,
    large: `${basePath}_large.jpg`,
    featured: `${basePath}_featured.jpg`,
  };
  return images;
}

export const getProjectTypeFromId = (projectType: ProjectType['type']): ProjectTypes['title'] => {
  const type = projectTypes.find(p => p.id === projectType);
  if (type) return type.title;
  return '';
};
