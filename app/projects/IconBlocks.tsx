import React from "react";
import Image from "next/image";
import { StackIcon } from "lib/_all-db";

type Bit = 1 | 0;

const MyGridThreeByThree = [...Array.from(Array(9))];
const MyGridTwoByThree = [...Array.from(Array(6))];
const MyGridOneByThree = [...Array.from(Array(3))];

interface IconBlockThreeByThreeProps
  extends IconBlockBase<[Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]> {}
export const IconBlockThreeByThree = ({
  pattern,
}: IconBlockThreeByThreeProps) => {
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridThreeByThree.map((_, index) => {
        return (
          <div className="col-span-1 row-span-1 flex justify-center items-center">
            {pattern[index] === 1 ? "yes" : "no"}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockBase<T = [Bit]> {
  pattern: T;
  icons: StackIcon[];
}

interface IconBlockTwoByThreeProps
  extends IconBlockBase<[Bit, Bit, Bit, Bit, Bit, Bit]> {}

export const IconBlockTwoByThree = ({ pattern }: IconBlockTwoByThreeProps) => {
  return (
    <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridTwoByThree.map((_, index) => {
        return (
          <div className="col-span-1 row-span-1 flex justify-center items-center aspect-square">
            {pattern[index] === 1 ? "yes" : "no"}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockOneByThreeProps extends IconBlockBase<[Bit, Bit, Bit]> {}
export const IconBlockOneByThree = ({ pattern }: IconBlockOneByThreeProps) => {
  return (
    <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-3">
      {/* className="grid grid-cols-3 grid-rows-3" */}
      {MyGridOneByThree.map((_, index) => {
        return (
          <div className="col-span-1 row-span-1 flex justify-center items-center aspect-square">
            {pattern[index] === 1 ? "yes" : "no"}
          </div>
        );
      })}
    </div>
  );
};

interface IconBlockFullProps extends IconBlockBase<[Bit & 1]> {}

export const IconBlockFull = ({ pattern }: IconBlockFullProps) => {
  return (
    <div className="col-span-3 row-span-3 grid grid-cols-1 grid-rows-1">
      <div className="flex justify-center items-center aspect-square">
        {"yes"}
      </div>
    </div>
  );
};

function IconSquare({ filename }) {
  return (
    <Image
      src={`icons/${filename}.svg`}
      fill={true}
      priority
      sizes="(max-width: 40px) 100vw, 60px"
      style={{
        objectFit: "contain",
        borderRadius: 3,
      }}
      alt={filename}
    ></Image>
    // <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-2 md:p-6 my-6 w-full">
    //   <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-4">
    //     {icons.map((icon) => (
    //       <img title={icon} key={icon} className='h-[32px] w-[32px] md:h-[60px] md:w-[60px] rounded-md border-[1px] p-1 border-black border-solid bg-white' src={`/icons/${icon}.svg`} />
    //     ))}
    //   </div>

    // </div>
  );
}
