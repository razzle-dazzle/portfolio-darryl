import type { ReactNode } from "react";
import TagList from "../TagList/TagList";
import type { StackIcon } from "lib/types";

type CVRole = {
  company?: string;
  role: string;
  location: string;
  dateDesc: string;
  tasks: string[];
  tags: StackIcon[];
};

export type CVBlockProps = {
  items: {
    company: string;
    companyAbout: string;
    roles: CVRole[];
  }[];
};
export default function CVBlock({ items }: CVBlockProps) {
  return (
    <>
      <CVBlock.MainTitle>Work Experience</CVBlock.MainTitle>
      <CVBlock.Timeline>
        {items.map((item) => (
          <CVBlock.TimelineItem
            key={item.company}
            company={item.company}
            companyAbout={item.companyAbout}
            roles={item.roles}
          />
        ))}
      </CVBlock.Timeline>
    </>
  );
}
function MainTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-bold mb-8 print:mb-4 text-2xl">{children}</h2>;
}

function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative ml-6">{children}</ol>;
}

type TimelineItemProps = {
  company: string;
  companyAbout: string;
  roles: CVRole[];
};
function TimelineItem({ company, companyAbout, roles }: TimelineItemProps) {
  return (
    // <li after:h-[calc(100%-24px)] ...>
    <li className="relative mb-8 after:h-full after:-left-[1.125rem] after:absolute after:top-8 after:w-0.5 after:bg-slate-300 after:content-normal print:after:border">
      <div className="absolute rounded-full w-4 h-4 bg-slate-300 dark:bg-white inline-block border-2 border-white dark:border-transparent z-10 -left-6 mt-2" />
      <h3 className="text-xl font-semibold">{company}</h3>
      <h4 className="italic text-base print:text-sm">{companyAbout}</h4>
      {roles.map((role) => {
        const key = [role.company || 'company', role.role, role.location].map(i => i.trim()).filter(i => i !== '').join('-');
        const companyLabel = [role.company ?? ''].map(i => i.trim()).filter(i => i !== '').join(', ');
        const roleLabel = [role.role, role.location].map(i => i.trim()).filter(i => i !== '').join(', ');
        return (
          <div className="mt-4 mb-8 pl-4" key={key}>
            <h4 className="font-semibold mt-4">
              {companyLabel}{' '}<span className="font-normal">{companyLabel ? '-' : ''} {roleLabel}</span>
            </h4>
            <time className="text-sm mb-2 font-extralight">{role.dateDesc}</time>
            <div className="prose prose-ul:!my-4 prose-li:my-0 print:prose-ul:my-2 dark:text-white">
              <ul className="">
                {role.tasks.map((task) => (
                  <li key={task} className="marker:text-gray-600 text-black dark:text-white text-base print:text-sm">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            {role.tags.length > 0 && <TagList tags={role.tags} />}
          </div>
        );
      })}
    </li>
  );
}

CVBlock.MainTitle = MainTitle;
CVBlock.Timeline = Timeline;
CVBlock.TimelineItem = TimelineItem;
