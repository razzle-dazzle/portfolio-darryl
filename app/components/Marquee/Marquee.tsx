// "use client";
import clsx from "clsx";
import { memo } from 'react';
import FastMarquee from "react-fast-marquee";
import { marqueeColors, marqueeTexts } from './Marquee.data';
// import { useTheme } from "@wits/next-themes";

type MarqueeRowProps = {
  row: string[];
  // theme: string | undefined;
};
const MarqueeRow = ({ row }: MarqueeRowProps) => {
  // @todo - support for theming
  // const { theme } = useTheme();
  return (
    <>
      {row.map((text, idx) => {
        // const idxColor = theme === 'light' ? colors[idx % colors.length] : colorsDarkmode[idx % colors.length];
        const idxColor = marqueeColors[idx % marqueeColors.length];
        return (
          <p
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={idx}
            className={clsx(
              // `text-[${idxColor}]`,
              "text-[#000]",
              "marquee-text",
              "px-4 text-2xl md:text-5xl !leading-loose",
              [1, 5, 11, 15].includes(idx)
                ? "font-bold"
                : [2, 4, 7, 10, 17].includes(idx)
                ? "font-thin"
                : "font-normal",
              [3, 6, 13, 18].includes(idx) ? "italic" : ""
            )}
            // style={{ color: theme === 'light' ? '#000' : idxColor }}
            style={{ color: idxColor }}
          >
            {text}
          </p>
        );
      })}
    </>
  );
};


const Marquee = () => {
  // const { theme } = useTheme();

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
            style={{
              borderBottom: `1px solid ${
                index + 1 >= marqueeTexts.length ? "transparent" : "#e3c042"
              }`,
            }}
          >
            <MarqueeRow row={row} />
          </FastMarquee>
        );
      })}
    </>
  );
};

export default Marquee;
