import type { PropsWithChildren } from 'react';

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type ProjectChipProps = {
};
const ProjectChip = ({ children }: PropsWithChildren<ProjectChipProps>) => {
  return (
    <div className="p-2 px-4 md:px-8 bg-[#eee] dark:bg-[#111] text-black dark:text-white rounded-lg inline-flex mb-4">
      {children}
    </div>
  );
};
export default ProjectChip;
