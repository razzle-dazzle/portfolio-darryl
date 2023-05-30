import clsx from 'clsx';
import { Stack } from 'lib/_all-db';

interface Props {
  icons: Stack[];
  /** If true, icons will be aligned right */
  flip?: boolean;
}
function StackIcons({ icons, flip }: Props) {
  return (
    // <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-1 my-6 w-full">
    // </div>
    <div className={clsx(
      "flex flex-row flex-wrap gap-2 justify-center my-2",
      flip ? "md:justify-start" : "md:justify-end",
    )}>
      {icons.map((icon) => (
        <img
          title={icon}
          key={icon}
          className="h-[32px] w-[32px] rounded-md border-1 p-1 border-neutral-800 border-solid bg-white"
          src={`/icons/${icon}.svg`}
        />
      ))}
    </div>
  );
}
export default StackIcons;
