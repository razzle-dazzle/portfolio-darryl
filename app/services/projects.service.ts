import { projects } from 'lib/_all-db';
import { ProjectType } from 'lib/types';

class ProjectService {
  /**
   * @returns A list of items
   */
  async getProjects(): Promise<ProjectType[]> {
    return [...projects];
  }

  /**
   * @param slug The slug, like 'casa-calico'
   * @returns A specific item by ID
   */
  async getProjectById(slug: string): Promise<ProjectType | null> {
    const project = projects.find((project) => project.alias.substring(1) === slug);
    if (!project) return null;
    return project;
  }

  /** Build the URL route for the listing item */
  getProjectRoute(project: ProjectType): string {
    return `/projects${project.alias}`;
  }

  getNextPrevProjects(currentProjectId: ProjectType["id"]): {
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
}

const myProjectService = new ProjectService();
export default myProjectService;
