import clsx from "clsx";
import FastMarquee from "react-fast-marquee";
import { marqueeColors, marqueeTexts } from "./Marquee.data";

const Marquee = () => {
  return (
    <>
      {marqueeTexts.map((row, index) => {
        const speeds = [15, 30, 38, 8, 26];
        return (
          <FastMarquee
            autoFill
            pauseOnHover
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            speed={speeds[index % speeds.length]}
            direction={index % 2 === 0 ? "left" : "right"}
            className={clsx(
              "border-b border-solid border-klein dark:border-mustard",
              index + 1 >= marqueeTexts.length && "!border-b-transparent"
            )}
          >
            <MarqueeRow row={row} />
          </FastMarquee>
        );
      })}
    </>
  );
};

type MarqueeRowProps = {
  row: string[];
};
const MarqueeRow = ({ row }: MarqueeRowProps) => {
  return (
    <>
      {row.map((text, idx) => {
        const idxColor = marqueeColors[idx % marqueeColors.length];
        return (
          <p
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            className={clsx(
              "text-[#000]",
              idxColor,
              "px-4 text-2xl md:text-5xl !leading-loose",
              [1, 5, 11, 15].includes(idx)
                ? "font-bold"
                : [2, 4, 7, 10, 17].includes(idx)
                ? "font-thin"
                : "font-normal",
              [3, 6, 13, 18].includes(idx) ? "italic" : ""
            )}
          >
            {text}
          </p>
        );
      })}
    </>
  );
};

export default Marquee;
