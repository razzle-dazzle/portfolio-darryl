import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  tweetIds: {
    type: 'array',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(
        /<StaticTweet\sid="[0-9]+"\s\/>/g
      );
      return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
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
      },
    }),
  },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  /** When updating these, also update the build-projects.mjs since the field needs to exist in the generated MDX */
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    largeImage: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    images: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

// more examples here on the official blog start: https://github.com/shadcn/next-contentlayer/blob/main/contentlayer.config.js
export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
