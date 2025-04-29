export type StackIcon =
  | "typescript"
  | "javascript"
  | "html5"
  | "css3"
  | "sass"
  | "twig"
  | "angular"
  | "astro"
  | "react"
  | "preact"
  | "webcomponents"
  | "alpinejs"
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
  | "faunadb"
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
  | "vitejs"
  | "vitest"
  | "playwright"
  | "markdown"
  ;

export interface ProjectType {
  id: number;
  /** Used to display the featured version of the image instead of the original */
  featured: number;
  /** Used to show the project on the homepage */
  homepage?: boolean;
  /** The relative URL for the project, like "/my-project" */
  alias: string;
  /** The main title */
  title: string;
  /** A summary description */
  description: string;
  /** More info about the project - some are empty! */
  description_secondary: string;
  /** Type, taken from project types list */
  type: number;
  /** The external URL for the website, full URI. Could also be empty string */
  url: string;
  /** Required, like 2020-12-01. This determines the order in the /projects page */
  completed: string;
  /** If true, the product detail page will not show the completed date explicitly */
  isOngoing?: boolean;
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

/** Available image paths for project images */
export interface ProjectImageCollection {
  original: string;
  small: string;
  medium: string;
  large: string;
  /** Note: This file might not exist */
  featured: string;
}
