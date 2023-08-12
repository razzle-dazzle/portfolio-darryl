import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import ProjectListItem from "app/components/ProjectListItem/ProjectListItem";
import IconsCloud from './IconsCloud';
import { ProjectType, StackIcon, projects } from 'lib/_all-db';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Checkout the projects that I have worked on over the years as a developer.",
};

const cloudData = buildCloud(projects);

export default async function ProjectsPage() {
  // const allViews = await getViewsCount();
  
  return (
    <section className="container xl:max-w-7xl m-auto relative mt-0 md:mt-12">
      <h1 className="font-500 text-3xl mb-6 text-black dark:text-white uppercase">Projects</h1>
      <IconsCloud data={cloudData}></IconsCloud>
      {/* {allProjects
        .sort((a, b) => {
          const aDate = new Date(a.publishedAt);
          const bDate = new Date(b.publishedAt);

          if (aDate.getTime() < bDate.getTime()) {
            return 1;
          }
          if (aDate.getTime() === bDate.getTime()) {
            return 0;
          }

          return -1;
        })
        .map((project) => (
          <ProjectListItem
            key={project.slug}
            project={project}
          ></ProjectListItem>
        ))} */}
    </section>
  );
}


function buildCloud(items: ProjectType[]): Record<StackIcon, number> {
  const counts: Record<StackIcon, number> = {} as Record<StackIcon, number>;
  items.forEach(p => {
    p.stack && p.stack.forEach((_icon: StackIcon) => {
      if (counts[_icon]) {
        counts[_icon]++;
      } else {
        counts[_icon] = 1;
      }
    });
  });
  return counts
}