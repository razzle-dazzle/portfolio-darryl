import Link from "next/link";
import React from "react";

type CrumbNode = {
  label: string;
  link?: string;
  isLast?: boolean;
};

export type BreadcrumbsProps = {
  hideHome?: boolean;
  crumbs: CrumbNode[];
};
const Breadcrumbs = ({
  hideHome = false,
  crumbs,
}: BreadcrumbsProps) => {
  return (
    <div className="text-sm md:text-base my-4 md:my-16 flex flex-wrap justify-start items-center gap-1.5 leading-relaxed">
      {!hideHome && (
        <Crumb
          item={{
            label: "Home",
            link: "/",
          }}
          key={0}
        />
      )}
      {crumbs.map((crumb, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Crumb item={crumb} key={index + 1} />
      ))}
    </div>
  );
};
export default Breadcrumbs;

type CrumbProps = {
  item: CrumbNode;
  // index: number;
};
function Crumb({ item: { label, link = "" }, ...rest }: CrumbProps) {
  // const key = link ?? `link-${index}`;
  if (!link) {
    return (
      <div className={"text-black dark:text-white"} {...rest}>
        {label}
      </div>
    );
  }
  const linkColor = "text-klein dark:text-mustard";

  return (
    <React.Fragment {...rest}>
      <div>
        <Link href={link} className={linkColor}>
          {label}
        </Link>
      </div>
      <div className={linkColor}>/</div>
    </React.Fragment>
  );
}
