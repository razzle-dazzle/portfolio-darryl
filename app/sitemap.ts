import { allProjects } from 'contentlayer/generated';
import { NAV_ITEMS } from './constants';

export default async function sitemap() {
  const blogs = allProjects.map((post) => ({
    url: `https://darryloctober.co.uk/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const websitePages = Object.entries(NAV_ITEMS)
  .map( ([key, value]) => value).map(i => i.path);
  const routes = ['', ...websitePages].map(
    (route) => ({
      url: `https://darryloctober.co.uk${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
