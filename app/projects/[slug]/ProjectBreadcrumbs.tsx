import Link from "next/link";

type ProjectBreadcrumbsProps = {
  /** The final text node */
  text: string;
};
const ProjectBreadcrumbs = ({ text }: ProjectBreadcrumbsProps) => {
  const linkColor = "text-[#0038FF] dark:text-[#F8CB01]";
  return (
    <div className="my-6 md:my-12 flex flex-wrap justify-start items-center gap-1.5">
      <div>
        <Link href={"/"} className={linkColor}>
          Home
        </Link>
      </div>
      <div className={linkColor}>/</div>
      <div>
        <Link href={"/projects"} className={linkColor}>
          Projects
        </Link>
      </div>
      <div className={linkColor}>/</div>
      <div className={"text-black dark:text-white"}>{text}</div>
    </div>
  );
};
export default ProjectBreadcrumbs;
