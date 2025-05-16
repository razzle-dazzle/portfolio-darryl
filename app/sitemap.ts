import { projects } from 'lib/_all-db';
import { NAV_ITEMS, WEBSITE_URL } from './constants';

export default async function sitemap() {
  const projectsList = projects.map((post) => ({
    url: `${WEBSITE_URL}/projects${post.alias}`,
    lastModified: post.completed,
  }));

  const websitePages = Object.entries(NAV_ITEMS)
  .map( ([key, value]) => value).map(i => i.path);
  const routes = ['', ...websitePages].map(
    (route) => ({
      url: `${WEBSITE_URL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...projectsList];
}
