"use client";
import React from "react";
import { StackIcon } from "lib/_all-db";
import { IconBit } from "./IconsCloud";
import IconImage from "./IconImage";

const MyGridThreeByThree = [...Array.from(Array(9))];
const MyGridTwoByThree = [...Array.from(Array(6))];
const MyGridOneByThree = [...Array.from(Array(3))];
const MyGridOneByOne = [...Array.from(Array(1))];

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
  handleClick,
}: IconBlockThreeByThreeProps) => {
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridThreeByThree.map((_, index) => {
        return (
          <div
            className="col-span-1 row-span-1 flex justify-center items-center relative"
            key={index}
          >
            {icons[index] && (
              <IconImage
                filename={icons[index]}
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

interface IconBlockBase<T = [IconBit]> {
  // pattern: T;
  icons: StackIcon[];
  handleClick: (stack: StackIcon) => void;
}

interface IconBlockTwoByThreeProps
  extends IconBlockBase<
    [IconBit, IconBit, IconBit, IconBit, IconBit, IconBit]
  > {}

export const IconBlockTwoByThree = ({
  icons,
  handleClick,
}: IconBlockTwoByThreeProps) => {
  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridTwoByThree.map((_, index) => {
        return (
          <div
            className="col-span-1 row-span-1 flex justify-center items-center aspect-square relative"
            key={index}
          >
            {icons[index] && (
              <IconImage
                filename={icons[index]}
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
  handleClick,
}: IconBlockOneByThreeProps) => {
  return (
    <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-3 gap-0">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridOneByThree.map((_, index) => {
        return (
          <div
            className="col-span-1 row-span-1 flex justify-center items-center aspect-square relative"
            key={index}
          >
            {icons[index] && (
              <IconImage
                filename={icons[index]}
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

interface IconBlockFullProps extends IconBlockBase<[IconBit]> {}

export const IconBlockFull = ({ icons, handleClick }: IconBlockFullProps) => {
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-1 grid-rows-1 gap-0">
      <div className="flex justify-center items-center aspect-square relative">
        {icons[0] && (
          <IconImage
            filename={icons[0]}
            tileSize="l"
            handleClick={handleClick}
          ></IconImage>
        )}
      </div>
    </div>
  );
};
