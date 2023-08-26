import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { Mdx } from "app/components/mdx";
// import { allProjects } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import {
  getProjectImages,
  getProjectImages2,
  getProjectTypeFromId,
} from "app/utils/utils";
import ProjectChip from "./ProjectChip";
import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import StackIcons from "./../../components/FeaturedProjects/StackList";
import { PropsWithChildren } from "react";
import { projects } from "lib/_all-db";
import NextProject from "./NextProject";

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

function getYearFromDate(dateStr: string) {
  if (!dateStr) {
    return "";
  }
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return date.getFullYear();
}
function getMonthFromDate(dateStr: string) {
  if (!dateStr) {
    return "";
  }
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return date.toLocaleString("default", { month: "long" });
}

export default async function Projects({ params }) {
  // const post = allProjects.find((post) => post.slug === params.slug);
  const project = projects.find(
    (post) => post.alias.substring(1) === params.slug
  );
  if (!project) {
    notFound();
  }

  // const [allViews, tweets] = await Promise.all([
  //   getViewsCount(),
  //   getTweets(post.tweetIds),
  // ]);
  const projectImages = getProjectImages2(project);

  return (
    <section className="text-black dark:text-white">
      <div className="container xl:max-w-7xl m-auto relative pb-4 md:pb-8">
        <ProjectBreadcrumbs text={project.title}></ProjectBreadcrumbs>
        <h1 className="text-5xl md:text-7xl font-medium text-black dark:text-white my-6">
          {project.title}
          <span className="text-gray-400 dark:text-gray-200 text-sm md:text-[20px] inline-block md:pl-4">
            {getMonthFromDate(project.completed)}{" "}
            {getYearFromDate(project.completed)}
          </span>
        </h1>
        <p className="tracking-tight text-2xl my-4 md:mb-8">
          {project.description}
        </p>
      </div>
      <div className="w-full h-[66vw] md:min-w-[120px] md:max-h-[77vh] relative overflow-hidden">
        {(projectImages.featured || projectImages.original) && (
          <Image
            src={project.featured && projectImages.featured ? projectImages.featured : projectImages.original}
            fill={true}
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 1920px, 1920px"
            style={{
              // objectFit: "contain",
              objectFit: "cover",
            }}
            alt={project.title}
            priority
            quality={100}
          />
        )}
      </div>
      <div className="bg-neutral-50 py-6 md:py-12">
        <div className="container xl:max-w-7xl m-auto relative pb-8">
          {/* <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify(post.structuredData)}
          </script> */}
          {/* post.structuredData will be like this... */}
          {/* '@context': 'https://schema.org',
          '@type': 'ProjectPosting',
          headline: doc.title,
          datePublished: doc.publishedAt,
          dateModified: doc.publishedAt,
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
            {/* <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm">
              <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md px-2 py-1 tracking-tighter">
                {post.publishedAt}
              </div>
              <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2"></div>
            </div> */}
            {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
            {/* <Mdx code={post.body.code} tweets={tweets} /> */}

            {/* This is the old code using ./content folder */}
            {/* <Mdx code={post.body.code} tweets={{}} /> */}

            {/* Project details */}

            <div className="grid gap-4 sm:gap-8">
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3 font-bold text-xl">
                  <TitleComponent>Project Details</TitleComponent>
                </div>
                <div className="basis-full md:basis-2/3 text-xl">
                  {/* <p className="my-4 mt-0">{project.description}</p> */}
                  {(project.description_secondary || project.description) && (
                    <p className="my-4 mt-0">
                      {project.description_secondary || project.description}
                    </p>
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
