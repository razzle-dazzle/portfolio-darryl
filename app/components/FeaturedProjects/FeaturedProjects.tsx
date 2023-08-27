import { NAV_ITEMS, Project } from "app/constants";
import ProjectBox from "./ProjectBox";
import Link from "next/link";
// import { allProjects } from "contentlayer/generated";
import { FeaturedProject } from ".";
import { ProjectType, projects } from 'lib/_all-db';
import Button from '../Button';
import SeeAllProjects from './SeeAllProjects';


type Props = {
  // projects: Project[];
};
type CompositeProjects = FeaturedProject & Pick<ProjectType, 'stack' | 'role'>;
const featuredProjects: CompositeProjects[] = projects.filter(p => p.featured).map(p => {

  return {
    ...p,
    image: `/projects/${p.images}/${p.images}_featured.jpg`,
    role: p.role ?? '',
    stack: [
      ...p.stack ?? [],
    ]
  }
}).sort((p1, p2) => {
  const fullDate1 = new Date(`${p1.completed} 00:00:00`);
  const fullDate2 = new Date(`${p2.completed} 00:00:00`);
  return fullDate1.getTime() > fullDate2.getTime() ? -1 : 1;
});

const FeaturedProjects = ({}: Props) => {

  return (
    <div className="max-w-7xl m-auto py-4 md:py-12 relative overflow-hidden">
      {/* The big shadow text */}
      <p className="hidden xl:block text-2xl xl:text-[110px] relative text-neutral-200 dark:text-neutral-700 font-500 z-10 leading-normal opacity-40 overflow-hidden whitespace-nowrap mb-24 lg:left-[24px]">
        Featured Projects
      </p>
      {/* The smaller text */}
      <h2 className="xl:leading-[150px] font-bold text-xl md:text-3xl xl:text-4xl mb-6 xl:mb-24 z-20 xl:absolute inset-0 bottom-[unset] xl:top-[100px] text-black dark:text-white">
        Featured Projects
      </h2>
      {featuredProjects.map((project, index) => {
        return (
          <ProjectBox
            key={index}
            project={project}
            // flip={index % 2 === 1}
          />
        );
      })}

      <div className="flex flex-row gap-4 justify-end items-center mt-12">
        <SeeAllProjects />
      </div>
    </div>
  );
};

export default FeaturedProjects;
