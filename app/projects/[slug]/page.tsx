import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

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

  return (
    <section className="container xl:max-w-7xl m-auto relative pb-8">
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          <Balancer>{post.title}</Balancer>
        </h1>
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
    </section>
  );
}
