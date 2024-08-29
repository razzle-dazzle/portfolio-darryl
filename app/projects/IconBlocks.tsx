"use client";
import React from "react";
import type { IconBit } from "./IconsCloud";
import IconImage from "./IconImage";
import type { StackIcon } from "lib/types";
import clsx from 'clsx';

const MyGridThreeByThree: undefined[] = [...Array.from(Array(9))];
const MyGridTwoByThree: undefined[] = [...Array.from(Array(6))];
const MyGridOneByThree: undefined[] = [...Array.from(Array(3))];
const MyGridOneByOne: undefined[] = [...Array.from(Array(1))];

interface IconBlockThreeByThreeProps
  extends IconBlockBase<
    [
      IconBit,
      IconBit,
      IconBit,
      IconBit,
      IconBit,
      IconBit,
      IconBit,
      IconBit,
      IconBit
    ]
  > {}
export const IconBlockThreeByThree = ({
  icons,
  filterString = '',
  handleClick,
}: IconBlockThreeByThreeProps) => {
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridThreeByThree.map((_, index) => {
        const filename = icons[index];
        return (
          <div
            className={clsx(
              "col-span-1 row-span-1 flex justify-center items-center relative",
              filename ? '' : 'hidden md:flex'
            )}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
          >
            {icons[index] && (
              <IconImage
                filename={filename}
                greyscale={!!filterString && filename !== filterString}
                tileSize="s"
                handleClick={handleClick}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockBase<T = [IconBit]> {
  // pattern: T;
  icons: StackIcon[];
  filterString?: string;
  handleClick: (stack: StackIcon) => void;
}

interface IconBlockTwoByThreeProps
  extends IconBlockBase<
    [IconBit, IconBit, IconBit, IconBit, IconBit, IconBit]
  > {}

export const IconBlockTwoByThree = ({
  icons,
  filterString = '',
  handleClick,
}: IconBlockTwoByThreeProps) => {
  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridTwoByThree.map((_, index) => {
        const filename = icons[index];
        return (
          <div
            className={clsx(
              "col-span-1 row-span-1 flex justify-center items-center aspect-square relative",
              filename ? '' : 'hidden md:flex'
            )}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
          >
            {filename && (
              // biome-ignore lint/style/useSelfClosingElements: <explanation>
              <IconImage
                filename={filename}
                greyscale={!!filterString && filename !== filterString}
                tileSize="s"
                handleClick={handleClick}
              ></IconImage>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockOneByThreeProps
  extends IconBlockBase<[IconBit, IconBit, IconBit]> {}
export const IconBlockOneByThree = ({
  icons,
  filterString = '',
  handleClick,
}: IconBlockOneByThreeProps) => {
  return (
    <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridOneByThree.map((_, index) => {
        const filename = icons[index];
        return (
          <div
            className={clsx(
              "col-span-1 row-span-1 flex justify-center items-center aspect-square relative",
              filename ? '' : 'hidden md:flex'
            )}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
          >
            {filename && (
              <IconImage
                filename={filename}
                greyscale={!!filterString && filename !== filterString}
                tileSize="s"
                handleClick={handleClick}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockFullProps extends IconBlockBase<[IconBit]> {}

export const IconBlockFull = ({ icons, handleClick, filterString = '' }: IconBlockFullProps) => {
  const filename = icons[0];
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-1 grid-rows-1 gap-0">
      <div className="flex justify-center items-center aspect-square relative">
        {filename && (
          <IconImage
            filename={filename}
            greyscale={!!filterString && filename !== filterString}
            tileSize="l"
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};


// special mobile grid block
interface IconBlockOneByOneProps extends IconBlockBase<[IconBit]> {}

export const IconBlockOneByOne = ({ icons, handleClick, filterString = '' }: IconBlockOneByOneProps) => {
  const filename = icons[0];
  return (
    <div className="col-span-1 row-span-1 grid grid-cols-1 grid-rows-1 gap-0">
      <div className="flex justify-center items-center aspect-square relative">
        {filename && (
          <IconImage
            filename={filename}
            greyscale={!!filterString && filename !== filterString}
            tileSize="l"
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
