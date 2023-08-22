import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import { getProjectImages } from 'app/utils/utils';

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
    <section>
      <div className="container xl:max-w-7xl m-auto relative pb-8">
        <h1 className="text-7xl font-medium text-black dark:text-white">
          <Balancer>{post.title}</Balancer>
          <span className='text-gray-400 text-sm md:text-[20px]'>{post.publishedAt.substring(0, 4)}</span>
        </h1>

      </div>
      <div className="w-full h-[66vw] md:min-w-[120px] relative overflow-hidden">
        {(projectImages.featured || projectImages.original) && (
          <Image
            src={projectImages.featured || projectImages.original}
            fill={true}
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 500px, 600px"
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
        <div>
          
          <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm">
            <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md px-2 py-1 tracking-tighter">
              {post.publishedAt}
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
            {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
          </div>
          {/* <Mdx code={post.body.code} tweets={tweets} /> */}
          <Mdx code={post.body.code} tweets={{}} />

          <div className="my-8 mt-12 text-neutral-800 dark:text-orange-300 text-xl">
            <Link href="/projects">&laquo; Back to all projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
