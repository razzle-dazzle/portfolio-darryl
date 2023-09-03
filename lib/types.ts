export type StackIcon =
  | "typescript"
  | "javascript"
  | "html5"
  | "css3"
  | "sass"
  | "twig"
  | "angular"
  | "react"
  | "redux"
  | "nextjs"
  | "vue"
  | "svelte"
  | "storybook"
  | "jest"
  | "gulp"
  | "cypress"
  | "aws"
  | "dynamodb"
  | "nativebase"
  | "tailwind"
  | "mui"
  | "uikit"
  | "expo"
  | "firebase"
  | "graphql"
  | "apollo"
  | "php"
  | "shopify"
  | "lerna"
  | "rollup"
  | "webpack"
  | "github-packages"
  | "turbopack"
  | "yarn"
  | "npm"
  | "mysql"
  | "bootstrap"
  | "csharp"
  | "dotnet"
  | "ruby"
  | "rails"
  | "xcode"
  | "android"
  | "ios"
  | "apple"
  | "auth0"
  | "stripe"
  | "pimcore"
  | "symfony"
  | "nodejs"
  | "express"
  | "apache"
  | "python"
  | "fuse"
  | "pwa"
  | "wordpress"
  | "jquery"
  | "mongodb"
  | "fauna"
  | "amplify"
  | "netlify"
  | "heroku"
  | "redis"
  | "mailchimp"
  | "sendgrid"
  | "figma"
  | "trello"
  | "framer"
  | "java"
  | "grails"
  | "vercel"
  | "cloudflare"
  ;

export interface ProjectType {
  id: number;
  /** Used to make some projects feature on the home page */
  featured: number;
  /** The relative URL for the project, like "/my-project" */
  alias: string;
  /** The main title */
  title: string;
  description: string;
  /** Can be empty */
  description_secondary: string;
  /** Type, taken from project types list */
  type: number;
  /** The external URL for the website, full URI. Could also be empty string */
  url: string;
  /** Required, like 2020-12-01. This determines the order in the /projects page */
  completed: string;
  /** Can be empty string */
  company: string;
  /** Not used on the FE */
  framework: string;
  /** Not used on the FE */
  client: string;
  /** Not used on the FE */
  client_website: string;
  /** Not used on the FE */
  zoom_slider_mode: string;
  /** Not used on the FE */
  active: number;
  created: string;
  modified: string;
  /** The name of the images folder for this project in public/projects/ */
  images: string;
  /** List of tech icons */
  stack: StackIcon[];
  /** My role on the project */
  role: string;
  /** A list of project components connected to this project */
  projects?: ProjectType[];
}
export interface ProjectTypes {
  id: number;
  title: string;
}
export interface ProjectPeople {
  id: string;
  projects_id: string;
  people_id: string;
  role: string;
}

/** Available image paths for project images */
export interface ProjectImageCollection {
  original: string;
  small: string;
  medium: string;
  large: string;
  /** Note: This file might not exist */
  featured: string;
}
