import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMonthFromDate, getProjectImages, getProjectTypeFromId, getYearFromDate } from "app/utils/utils";
import ProjectChip from "./ProjectChip";
import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import StackIcons from "./../../components/FeaturedProjects/StackList";
import { PropsWithChildren } from "react";
import NextProject from "./NextProject";
import myProjectService from 'app/services/projects.service';
import { ProjectType } from 'lib/types';

// export async function generateMetadata({
//   params,
// }): Promise<Metadata | undefined> {
//   const project = projects.find((post) => post.alias.substring(1) === params.slug);
//   if (!project) {
//     return;
//   }

//   const {
//     title,
//     completed,
//     description,
//     image,
//     alias,
//   } = project;
//   const ogImage = image
//     ? `https://darryloctober.co.uk${image}`
//     : `https://darryloctober.co.uk/og?title=${title}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime: completed,
//       url: `https://darryloctober.co.uk/projects${alias}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }


/** Build static params based on all the items in the DB */
export async function generateStaticParams() {
  const projects = await myProjectService.getProjects();
  
  return (projects ?? []).map((project) => ({
    slug: project.alias.substring(1),
  }));
}

async function getData(slug: string): Promise<ProjectType | null> {
  const data = await myProjectService.getProjectById(slug);
  return data;
}


export default async function Projects({ params }) {
  const { slug } = params;
  const project = await getData(slug);
  if (!project) {
    notFound();
  }

  const projectImages = getProjectImages(project);

  return (
    <section className="text-black dark:text-white">
      {/* Breadcrumbs, Heading, Summary */}
      <div className="container xl:max-w-7xl m-auto relative pb-4 md:pb-8 px-6">
        <ProjectBreadcrumbs text={project.title}></ProjectBreadcrumbs>
        <h1 className="text-5xl md:text-7xl font-medium text-black dark:text-white my-6">
          {project.title}&nbsp;
          <span className="text-gray-400 dark:text-gray-200 text-sm md:text-[20px] inline-block md:pl-2">
            {getMonthFromDate(project.completed)}{" "}
            {getYearFromDate(project.completed)}
          </span>
        </h1>
        <p className="tracking-tight text-xl md:text-2xl my-8">
          {project.description}
        </p>
      </div>

      {/* Image Hero */}
      <div className="w-full h-[66vw] md:min-w-[120px] md:max-h-[77vh] relative overflow-hidden">
        {(projectImages.featured || projectImages.original) && (
          <Image
            src={
              project.featured && projectImages.featured
                ? projectImages.featured
                : projectImages.original
            }
            fill={true}
            sizes="(max-width: 768px) 768, (max-width: 1200px) 1920px, 2400px"
            style={{
              // objectFit: "contain",
              objectFit: "cover",
              // objectPosition: "top"
            }}
            alt={project.title}
            priority
            quality={96}
          />
        )}
      </div>
      <div className="bg-neutral-50 dark:bg-transparent py-6 md:py-12">
        <div className="container xl:max-w-7xl m-auto relative md:pb-8 px-6">
          {/* <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify(post.structuredData)}
          </script> */}
          {/* post.structuredData will be like this... */}
          {/* '@context': 'https://schema.org',
          '@type': 'ProjectPosting',
          headline: doc.title,
          datePublished: doc.completed,
          dateModified: doc.completed,
          description: doc.summary,
          thumbnail: doc.thumbnail,
          largeImage: doc.largeImage,
          featured: doc.featured,
          images: doc.images,
          image: doc.image
            ? `https://darryloctober.co.uk${doc.image}`
            : `https://darryloctober.co.uk/og?title=${doc.title}`,
          url: `https://darryloctober.co.uk/projects/${doc._raw.flattenedPath}`,
          author: {
            '@type': 'Person',
            name: 'Darryl October',
          }, */}

          <div className="">
            <div className="grid gap-4 sm:gap-8">
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3 font-bold text-xl">
                  <TitleComponent>Project Details</TitleComponent>
                </div>
                <div className="basis-full md:basis-2/3 text-xl">
                  {project.description_secondary && (
                    <p className="my-4 mt-0">{project.description_secondary}</p>
                  )}
                </div>
              </div>

              {/* Role, stack - gap needs to match main grid on mobile but not desktop!! */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-0">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent>Role</TitleComponent>

                  <ProjectChip>{project.role}</ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl">
                  <TitleComponent>Stack</TitleComponent>
                  <StackIcons
                    icons={project.stack}
                    iconSize="large"
                  ></StackIcons>
                </div>
              </div>

              {/* Type */}
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent>Type</TitleComponent>
                  <ProjectChip>
                    {getProjectTypeFromId(project.type)}
                  </ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl"></div>
              </div>

              {/* Completed */}
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent>Completed</TitleComponent>
                  <ProjectChip>{project.completed}</ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl"></div>
              </div>

              {/* Website - optional */}
              {project.url && (
                <div className="flex flex-col md:flex-row">
                  <div className="basis-full md:basis-1/3">
                    <TitleComponent>Website / URL</TitleComponent>

                    <ProjectChip>
                      <Link href={project.url} target="_blank">
                        Link
                      </Link>
                    </ProjectChip>
                  </div>
                  <div className="basis-full md:basis-2/3 text-xl"></div>
                </div>
              )}
            </div>

            <div className="my-8 mt-12 text-neutral-800 dark:text-orange-300 text-xl">
              <NextProject currentProject={project}></NextProject>
              {/* <Link href="/projects">&laquo; Back to all projects</Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TitleComponent = ({ children }: PropsWithChildren<{}>) => {
  return <h3 className="font-bold text-xl mb-4">{children}</h3>;
};
