import { capitalizeFirstLetter, sortProjects } from "app/utils/utils";
import { projects } from "lib/_all-db";
import type { ProjectType, StackIcon } from "lib/types";

class ProjectService {
  /**
   * @returns A list of items
   */
  async getProjects(): Promise<ProjectType[]> {
    return [...projects];
  }

  /**
   * @returns A list of items by tag
   */
  async getProjectsByTag(tag: string | null): Promise<ProjectType[]> {
    if (!tag) {
      return await this.getProjects();
    }
    return projects.filter((p) => {
      return p.stack.includes(tag as StackIcon);
    });
  }

  /**
   * @param slug The slug, like 'casa-calico'
   * @returns A specific item by ID
   */
  async getProjectById(slug: string): Promise<ProjectType | null> {
    const project = projects.find(
      (project) => project.alias.substring(1) === slug
    );
    if (!project) return null;
    return project;
  }

  /** Build the URL route for the listing item */
  getProjectRoute(project: ProjectType): string {
    return `/projects${project.alias}`;
  }

  getNextPrevProjects(
    currentProjectId: ProjectType["id"],
    loop = false
  ): {
    next: ProjectType | null;
    prev: ProjectType | null;
  } {
    const currentArrayIndex = projects
      .sort(sortProjects)
      .findIndex((p) => p.id === currentProjectId);
    const maxIndex = projects.length - 1;
    if (currentArrayIndex === -1) {
      return {
        next: null,
        prev: null,
      };
    }

    let prev: ProjectType | null;
    let next: ProjectType | null;

    // work out the prev project
    if (currentArrayIndex === 0) {
      prev = loop ? projects[maxIndex] : null;
    } else {
      prev = projects[currentArrayIndex - 1];
    }

    // work out the next project
    if (currentArrayIndex >= maxIndex) {
      next = loop ? projects[0] : null;
    } else {
      next = projects[currentArrayIndex + 1];
    }

    return {
      next,
      prev,
    };
  }

  buildCloud(): Record<StackIcon, number> {
    const counts: Record<StackIcon, number> = {} as Record<StackIcon, number>;
    // biome-ignore lint/complexity/noForEach: <explanation>
    projects.forEach((p) => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      p.stack?.forEach((_icon: StackIcon) => {
        if (counts[_icon]) {
          counts[_icon]++;
        } else {
          counts[_icon] = 1;
        }
      });
    });
    return counts;
  }

  getSpecialStackLabel(stack: StackIcon): string {
    const specialLabels: Partial<Record<StackIcon, string>> = {
      html5: "HTML5",
      css3: "CSS3",
      sass: "SASS",
      nextjs: "NextJS",
      aws: "AWS",
      dynamodb: "DynamoDB",
      nativebase: "Native Base",
      mui: "MUI",
      uikit: "UIKit",
      graphql: "GraphQL",
      php: "PHP",
      "github-packages": "GitHub Packages",
      npm: "NPM",
      mysql: "MySQL",
      csharp: "C#",
      dotnet: "DOTNET",
      ios: "iOS",
      nodejs: "NodeJS",
      pwa: "PWA",
      jquery: "jQuery",
      mongodb: "MongoDB",
      sendgrid: "SendGrid",
    };
    return specialLabels[stack] || capitalizeFirstLetter(stack);
  }
}

const myProjectService = new ProjectService();
export default myProjectService;
