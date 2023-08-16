import { ProjectType, StackIcon } from 'lib/_all-db';

export { default } from './FeaturedProjects';

/** Allow a featured project to be different struct to a project, just for the homepage */
export interface FeaturedProject extends ProjectType {
  /** Project URL, like /my-project */
  // url: string;
  /** The main title */
  title: string;
  /** The short desc taken from the project model */
  description: string;
  /** The longer desc taken from the project model */
  description_secondary: string;
  /** Featured Image URL */
  image: string;
  /** List of tech icons */
  stack: StackIcon[];

  role: string;
}
