import { StackIcon } from 'lib/_all-db';

export { default } from './FeaturedProjects';

/** Allow a featured project to be different struct to a project, just for the homepage */
export interface FeaturedProject {
  /** Project URL, like /my-project */
  url: string;
  /** The main title */
  title: string;
  /** Can be HTML? */
  description: string;
  /** Featured Image URL */
  image: string;
  /** List of tech icons */
  stack: StackIcon[];
}
