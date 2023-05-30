// import { promises as fs } from 'fs';
import * as fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { projects, projectPeople, projectTypes } from "./_all-db.js";

const mdxTemplate = `---
title: '{{title}}'
publishedAt: '{{publishedAt}}'
summary: '{{summary}}'
thumbnail: '{{imageUrlThumb}}'
largeImage: '{{imageUrlLarge}}'
featured: '{{featured}}'
---

<div className="relative w-full h-[400px] sm:h-[600px] md:h-[760px] lg:h-[920px]">
  <Image
    alt={'{{imageAlt}}'}
    src={'{{imageUrl}}'}
    sizes="(max-width: 640px) 100%, 100%"
    fill={true}
    priority
    style={{
      objectFit: 'contain'
    }}
  />
</div>

{{description}}
{{descriptionSecondary}}
{{projectType}}
{{role}}
{{completed}}
{{url}}
{{client}}
{{stack}}
`;

// const deleteFolderRecursive = async (path) => {
//   const stat = await fs.stat(path);
//   if (stat.isDirectory()) {
//     const files = await fs.readdir(path);
//     await Promise.all(
//       files.map((file) => deleteFolderRecursive(`${path}/${file}`))
//     );
//     await fs.rmdir(path);
//   } else {
//     await fs.unlink(path);
//   }
// };


/**
 * Get role from projectPoeple list
 * @param {*} projectId 
 * @param {*} personId 
 * @returns string with info about the role
 */
function getPersonRole(projectId, personId) {
  const role = projectPeople.find(p => {
    
    const match = Number(p.projects_id) === Number(projectId) && Number(personId) === Number(p.people_id);
    return match ? p : undefined;
  });
  // console.log({role});
  if (role) {
    return role.role;
  }
  return '';
}

/** Lookup the project type by type ID */
function getProjectType(typeId) {
  const projectType = projectTypes.find(p => {
    const match = Number(typeId) === Number(p.id);
    return match ? p : undefined;
  });
  // console.log({projectType});
  if (projectType) {
    return projectType.title;
  }
  return '';
}

function getTemplate(project) {
  // const nameCamelcase = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;

  const role = getPersonRole(project.id, 1); // person ID 1=Darryl
  const projectType = getProjectType(project.type);
  const hasStackIcons = project.stack && project.stack.length > 0;
  
  // const stackMarkup = ;
  const stack = hasStackIcons ? `<StackIcons
  title="Stack"
  icons={['${project.stack.join("','")}']}
  />` : '';

  const vars = {
    // like Pocket Barcelona
    title: project.title.replace("'", "\'"),
    summary: (project.summary || project.description || 'Project').replace("'", ""),
    // like 2023-01-01
    publishedAt: project.completed,
    description: project.description ? `### Description\n\n${project.description}` : '',
    descriptionSecondary: project.description_secondary ? `\n### More Details\n\n${project.description_secondary}` : '',
    role: role ? `\n### Role\n\n${role}` : '',
    projectType: projectType ? `\n### Type\n\n${projectType}` : '',
    completed: project.completed ? `\n### Completed\n${project.completed}` : '',
    client: project.client ? `\n### Client\n${project.client}` : '',
    url: project.url ? `\n### Website / URL\n${project.url}` : '',
    stack: stack ? `\n### Stack\n\n${stack}` : '',
    imageAlt: project.title.replace("'", ""),
    imageUrl: `/projects/${project.images}/${project.images}.jpg`,
    imageUrlThumb: `/projects/${project.images}/${project.images}_small.jpg`,
    imageUrlLarge: `/projects/${project.images}/${project.images}_large.jpg`,
    featured: project.featured === 1 ? 'yes' : 'no',
  };
  
  // get the template which we will use for interpolation
  // let template = '';
  // try {
  //   // const inputFile = path.resolve(__dirname, `templates/Component${type ? `.${type}` : ''}.${extension}`);
  //   const inputFile = `src/scripts/scaffold/templates/Component${type ? `.${type}` : ''}.${extension}`;
  //   template = fs.readFileSync(inputFile, 'utf-8');
  // } catch (error) {
  //   throw new Error('Cannot read scaffolding template source file');
  // }

  // interpolate template file, replacing {{name}} with MyComponent
  let rendered = mdxTemplate;

  try {
    Object.keys(vars).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      rendered = rendered.replaceAll(regex, vars[key]);
    });

  } catch (error) {
    throw new Error('Error replacing template keys and values');
  }
  return rendered;
}

const createMdxFile = async (project) => {
  const name = project.alias.substring(1); // use the 'alias' but remove the first slash
  const filename = `${name}.mdx`;

  const contentDir = path.join(process.cwd(), "content");
  try {
    // get the interpolated template
    const template = getTemplate(project);

    // fs.writeFileSync(`${contentDir}/${filename}`, template, { flag: "wx" });
    fs.writeFileSync(`${contentDir}/${filename}`, template, { flag: "w" });
    console.log(`Created ${filename}`);

    return true;
  } catch (error) {
    if (error) {
      console.error(error);
    }

    console.warn(`Skipped ${contentDir}/${filename} (file already exists)`);
    // return error;
    return false;
  }

  // const files = await fs.readdir(path);
  //   await Promise.all(
  //     files.map((file) => deleteFolderRecursive(`${path}/${file}`))
  //   );
};

(async () => {
  dotenv.config();

  // if (process.env.IS_TEMPLATE === 'false') {
  //   return;
  // }

  // read "_all.ts" file

  // for each item, build a new MDX file using the template
  // save file

  projects
  // .slice(0, 1)
  .forEach((project) => createMdxFile(project));

  // const libDir = path.join(process.cwd(), 'lib');
  const contentDir = path.join(process.cwd(), "content");
  const imagesDir = path.join(process.cwd(), "public", "images");
  const aboutDir = path.join(process.cwd(), "app", "about");

  // await deleteFolderRecursive(contentDir);
  // await deleteFolderRecursive(imagesDir);
  // await fs.mkdir(contentDir);
  // await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template);
  // await fs.writeFile(path.join(libDir, 'info.tsx'), info);
  // await fs.writeFile(path.join(aboutDir, 'page.tsx'), about);
})();
