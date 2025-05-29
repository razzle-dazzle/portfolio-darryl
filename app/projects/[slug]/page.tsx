import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import type { ProjectType, StackIcon } from "lib/types";
import {
  getProjectDateFriendly,
  getProjectImages,
  getProjectTypeFromId,
} from "app/utils/utils";
import ProjectChip from "../../components/ProjectChip/ProjectChip";
import Breadcrumbs, {
  type BreadcrumbsProps,
} from "../../components/Breadcrumbs/Breadcrumbs";
import StackIcons from "../../components/FeaturedProjects/parts/StackList";
import NextProject from "../../components/NextProjectLink/NextProjectLink";
import myProjectService from "app/services/projects.service";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const allProjects = await myProjectService.getProjects();
  const project = allProjects.find(
    (post) => post.alias.substring(1) === params.slug
  );
  if (!project) {
    return;
  }

  // const image = getProjectPosterImage(project);
  const { title, completed, description, alias } = project;
  const ogImage = `https://www.darryloctober.co.uk/og?title=${encodeURIComponent(
    title
  )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: `${completed}T09:00:00+01:00`,
      url: `https://www.darryloctober.co.uk/projects${alias}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

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

export default async function Project({ params }) {
  const { slug } = params;
  const project = await getData(slug);
  if (!project) {
    notFound();
  }

  const projectImages = getProjectImages(project);

  const breadcrumbs: BreadcrumbsProps = {
    crumbs: [
      {
        label: "Projects",
        link: "/projects",
      },
      {
        label: project.title,
      },
    ],
  };

  const allStackIcons = myProjectService.getAllStackIcons(project);

  return (
    <section className="text-black dark:text-white">
      {/* Breadcrumbs, Heading, Summary */}
      <div className="container xl:max-w-7xl m-auto relative px-4 md:px-6">
        <Breadcrumbs {...breadcrumbs} />
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-medium text-black dark:text-white my-6">
          {project.title}{" "}
          <span className="text-gray-400 dark:text-gray-200 text-sm md:text-[20px] inline-block md:pl-2">
            {project.isOngoing
              ? "(Project ongoing)"
              : getProjectDateFriendly(project)}
          </span>
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl my-4 md:my-8">
          {project.description}
        </p>
      </div>

      {/* Image Hero */}
      {projectImages.featured && (
        <div className="w-full h-[66vw] md:min-w-[120px] md:max-h-[77vh] relative overflow-hidden my-4">
          <Image
            src={
              project.featured && projectImages.featured
                ? projectImages.featured
                : projectImages.original
            }
            fill={true}
            sizes="(max-width: 768px) 768, (max-width: 1200px) 1920px, 2400px"
            style={{
              objectFit: "cover",
            }}
            alt={project.title}
            priority
            quality={96}
          />
        </div>
      )}

      {!project.featured && (
        <div className="mx-auto md:my-4 w-full max-w-[calc(100vw-64px)] md:max-w-5xl h-[100vw] md:w-[70vw] md:h-[60vw] relative overflow-hidden">
          <Image
            src={projectImages.original}
            fill={true}
            sizes="(max-width: 768px) 768, (max-width: 1200px) 1920px, 2400px"
            style={{
              objectFit: "cover",
              aspectRatio: 3 / 4,
            }}
            alt={project.title}
            priority
            quality={96}
          />
        </div>
      )}

      <div className="bg-neutral-50 dark:bg-transparent py-6 md:py-12">
        <div className="container xl:max-w-7xl m-auto relative md:pb-8 px-4 md:px-6">
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
            ? `${WEBSITE_URL}${doc.image}`
            : `${WEBSITE_URL}/og?title=${doc.title}`,
          url: `${WEBSITE_URL}/projects/${doc._raw.flattenedPath}`,
          author: {
            '@type': 'Person',
            name: 'Darryl October',
          }, */}

          <div>
            <div className="grid gap-4 sm:gap-8">
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3 font-bold text-xl">
                  <TitleComponent as="h2">Project Details</TitleComponent>
                </div>
                <div className="basis-full md:basis-2/3 text-xl">
                  {project.description_secondary && (
                    <p className="my-4 mt-0 text-lg md:text-xl xl:text-2xl">
                      {project.description_secondary}
                    </p>
                  )}
                </div>
              </div>

              {/* Role, stack - gap needs to match main grid on mobile but not desktop!! */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-0">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent as="h3">Role</TitleComponent>

                  <ProjectChip>{project.role}</ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl">
                  <TitleComponent as="h3">Stack</TitleComponent>
                  <StackIcons icons={allStackIcons} iconSize="large" />
                </div>
              </div>

              {/* Type */}
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent as="h3">Type</TitleComponent>
                  <ProjectChip>
                    {getProjectTypeFromId(project.type)}
                  </ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl" />
              </div>

              {/* Completed */}
              <div className="flex flex-col md:flex-row">
                <div className="basis-full md:basis-1/3">
                  <TitleComponent as="h3">Completed</TitleComponent>
                  <ProjectChip>
                    {project.isOngoing
                      ? "Project ongoing"
                      : getProjectDateFriendly(project)}
                  </ProjectChip>
                </div>
                <div className="basis-full md:basis-2/3 text-xl" />
              </div>

              {/* Website */}
              {project.url && (
                <div className="flex flex-col md:flex-row">
                  <div className="basis-full md:basis-1/3">
                    <TitleComponent as="h3">Website / URL</TitleComponent>

                    <ProjectChip>
                      <Link href={project.url} target="_blank" rel="nofollow">
                        Link
                      </Link>
                    </ProjectChip>
                  </div>
                  <div className="basis-full md:basis-2/3 text-xl" />
                </div>
              )}
            </div>

            <div className="my-8 mt-12 text-neutral-800 dark:text-orange-300 text-xl">
              <NextProject currentProject={project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TitleComponent = ({
  children,
  as: As = "h3",
}: PropsWithChildren<{
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>) => {
  return <As className="font-bold text-xl mb-4">{children}</As>;
};
