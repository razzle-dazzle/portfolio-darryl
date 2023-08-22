import Link from "next/link";

type ProjectBreadcrumbsProps = {
  /** The final text node */
  text: string;
};
const ProjectBreadcrumbs = ({ text }: ProjectBreadcrumbsProps) => {
  const blue = "text-[#0038FF]";
  return (
    <div className="my-6 flex flex-wrap justify-start items-center gap-1.5">
      <div>
        <Link href={"/"} className={blue}>
          Home
        </Link>
      </div>
      <div className={blue}>/</div>
      <div>
        <Link href={"/projects"} className={blue}>
          Projects
        </Link>
      </div>
      <div className={blue}>/</div>
      <div className={"text-black dark:text-white"}>{text}</div>
    </div>
  );
};
export default ProjectBreadcrumbs;
