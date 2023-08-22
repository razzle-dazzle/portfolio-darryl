import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import { getProjectImages } from "app/utils/utils";
import ProjectChip from "./ProjectChip";
import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import StackIcons from "./../../components/FeaturedProjects/StackList";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const project = allProjects.find((post) => post.slug === params.slug);
  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = project;
  const ogImage = image
    ? `https://darryloctober.co.uk${image}`
    : `https://darryloctober.co.uk/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://darryloctober.co.uk/blog/${slug}`,
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

export default async function Projects({ params }) {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  // const [allViews, tweets] = await Promise.all([
  //   getViewsCount(),
  //   getTweets(post.tweetIds),
  // ]);
  const projectImages = getProjectImages(post);

  return (
    <section className="text-black dark:text-white">
      <div className="container xl:max-w-7xl m-auto relative pb-4 md:pb-8">
        <ProjectBreadcrumbs text={post.title}></ProjectBreadcrumbs>
        <h1 className="text-5xl md:text-7xl font-medium text-black dark:text-white">
          <span>{post.title}</span>
          <span className="text-gray-400 text-sm md:text-[20px] inline-block pl-4">
            {post.publishedAt.substring(0, 4)}
          </span>
        </h1>
        <p className="tracking-tight text-2xl my-4 md:mb-8">{post.summary}</p>
      </div>
      <div className="w-full h-[66vw] md:min-w-[120px] md:max-h-[77vh] relative overflow-hidden">
        {(projectImages.featured || projectImages.original) && (
          <Image
            src={projectImages.featured || projectImages.original}
            fill={true}
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 1920px, 1920px"
            style={{
              // objectFit: "contain",
              objectFit: "cover",
            }}
            alt={post.title}
            priority
            quality={100}
          />
        )}
      </div>
      <div className="container xl:max-w-7xl m-auto relative pb-8">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(post.structuredData)}
        </script>
        <div className="my-12">
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
                {post.summary}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas totam iure tempora quam ab officia, voluptatibus enim
                consequatur nesciunt, quaerat aliquid. Id iure, ad aut quibusdam
                quia voluptates distinctio itaque. Consectetur non modi dolorum
                aspernatur eius, nihil alias, illo obcaecati animi ducimus rem
                nam ipsam tempore necessitatibus debitis cum deleniti quis odit
                qui quam? Nesciunt ullam itaque praesentium aliquid obcaecati,
                minus quia maxime fugit magni aspernatur veritatis officiis.
                Nisi quasi consectetur temporibus. Voluptatibus ipsa unde
                ducimus accusamus ad, ratione magni?
              </div>
            </div>

            {/* Role, stack - gap needs to match main grid on mobile but not desktop!! */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-0">
              <div className="basis-full md:basis-1/3">
                <TitleComponent>Role</TitleComponent>

                <ProjectChip text="FOOBAR"></ProjectChip>
              </div>
              <div className="basis-full md:basis-2/3 text-xl">
                <TitleComponent>Stack</TitleComponent>
                <StackIcons
                  icons={[
                    "apache",
                    "php",
                    "mysql",
                    "html5",
                    "javascript",
                    "jquery",
                    "css3",
                  ]}
                  iconSize="large"
                ></StackIcons>
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-col md:flex-row">
              <div className="basis-full md:basis-1/3">
                <TitleComponent>Type</TitleComponent>
                <ProjectChip text="Responsive Website"></ProjectChip>
              </div>
              <div className="basis-full md:basis-2/3 text-xl"></div>
            </div>

            {/* Completed */}
            <div className="flex flex-col md:flex-row">
              <div className="basis-full md:basis-1/3">
                <TitleComponent>Completed</TitleComponent>
                <ProjectChip text="2023 2344"></ProjectChip>
              </div>
              <div className="basis-full md:basis-2/3 text-xl"></div>
            </div>

            {/* Website */}
            <div className="flex flex-col md:flex-row">
              <div className="basis-full md:basis-1/3">
                <TitleComponent>Website / URL</TitleComponent>

                <ProjectChip text="Link"></ProjectChip>
              </div>
              <div className="basis-full md:basis-2/3 text-xl"></div>
            </div>
          </div>

          <div className="my-8 mt-12 text-neutral-800 dark:text-orange-300 text-xl">
            <Link href="/projects">&laquo; Back to all projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const TitleComponent = ({ children }: PropsWithChildren<{}>) => {
  return <h3 className="font-bold text-xl mb-4">{children}</h3>;
};
