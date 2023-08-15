"use client";
import React, { ReactNode } from "react";
import {
  IconBlockThreeByThree,
  IconBlockTwoByThree,
  IconBlockFull,
  IconBlockOneByThree,
} from "./IconBlocks";
import { StackIcon } from "lib/_all-db";

export type IconBit = 1 | 0;
/**
 * This is old...!
 * Boxes:
 * Left Top End:    0,0,1 0,1,1 1,1,1
 * Left Middle End: 0,0,0 0,0,1 0,0,0
 * Left Bottom End: 0,1,1 0,0,1 0,0,0
 * Full Block:      1,1,1 1,1,1 1,1,1
 * Big Icon Block:  I (3x3)
 * Right End:       1,0,0 1,1,0 1,1,1
 * Special Middle:  1,1 BBB 1,1
 *                  1,1 BBB 1,1
 *                  1,1 BBB 1,1
 *
 *
 * On Desktop, the cloud is like this:
 * LTE FB BIB BIB
 */
type IconsCloudProps = {
  data: Record<StackIcon, number>;
};
type Tile1 = [
  IconBit,
  IconBit,
  IconBit,
  IconBit,
  IconBit,
  IconBit,
  IconBit,
  IconBit,
  IconBit
];
type Tile2 = [IconBit, IconBit, IconBit, IconBit, IconBit, IconBit];
type Tile3 = [IconBit, IconBit, IconBit];
type Tile4 = [IconBit];
type PatternBitTypes = Tile1 | Tile2 | Tile3 | Tile4;
const patterns: Record<string, PatternBitTypes> = {
  // row 1
  p1: [0, 0, 1, 0, 1, 1, 1, 1, 1],
  p2: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  p3: [1],
  p4: [1],
  p5: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  p6: [1, 0, 0, 1, 1, 0, 1, 1, 1],
  // row 2
  p7: [0, 0, 0, 1, 0, 0],
  p8: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  p9: [1],
  p10: [1],
  p11: [1],
  p12: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  p13: [1, 1, 0],
  // row 3
  p14: [0, 0, 1, 0, 0, 1, 0, 0, 0],
  p15: [1, 1, 1, 1, 1, 1, 0, 1, 1],
  p16: [1],
  p17: [1],
  p18: [1, 1, 1, 1, 1, 1, 1, 1, 0],
  p19: [1, 1, 0, 0, 0, 0, 0, 0, 0],
};


export const IconsCloud = ({ data }: IconsCloudProps) => {
  const [filterBy, setFilterBy] = React.useState<string>('');
  const iconsList = Array.from(Object.entries(data));
  const patternsList = Object.values(patterns);
  // console.log(Object.keys(data).sort());
  // console.log(Object.keys(data));

  const handleClick = (icon: StackIcon) => {
    // console.log(icon);
    setFilterBy(icon);
  };

  const getBlock = (
    somePattern: PatternBitTypes,
    icons: StackIcon[]
  ): ReactNode => {
    const tileType = somePattern.length;
    switch (tileType) {
      case 9: {
        return (
          <IconBlockThreeByThree
            // pattern={somePattern as Tile1}
            icons={icons}
            handleClick={handleClick}
          ></IconBlockThreeByThree>
        );
      }
      case 6: {
        return (
          <IconBlockTwoByThree
            // pattern={somePattern as Tile2}
            icons={icons}
            handleClick={handleClick}
          ></IconBlockTwoByThree>
        );
      }
      case 3: {
        return (
          <IconBlockOneByThree
            // pattern={somePattern as Tile3}
            icons={icons}
            handleClick={handleClick}
          ></IconBlockOneByThree>
        );
      }
      case 1: {
        return (
          <IconBlockFull
            // pattern={somePattern as Tile4}
            icons={icons}
            handleClick={handleClick}
          ></IconBlockFull>
        );
      }
    }
  };

  let iconIndexOffsetCounter = 0;
  return (
    <React.Fragment>
      {<h2 className='text-black dark:text-white my-6'>{filterBy ? `Filter by: ${filterBy}`: 'Showing all projects'}</h2>}
      <div className='px-0 md:px-6'>
        <div className="grid grid-cols-[repeat(18,_1fr)] grid-rows-[repeat(9,_1fr)] text-white">
          {patternsList.map((pattern, index) => {
            // how many icons do we need to show?
            const iconsToShow = pattern.filter((isSet) => isSet === 1).length;
            // get the next set of 'n' icons
            const iconsSet = iconsList
              .slice(iconIndexOffsetCounter, iconIndexOffsetCounter + iconsToShow)
              .map((i) => i[0]);

            // improve this...
            // build a similar list of icons based on the pattern - use empty string if pattern has a zero
            let setCounter = -1;
            const icons: string[] = pattern.map((p) => {
              if (p === 1) {
                setCounter++;
                return iconsSet[setCounter];
              } else {
                return "";
              }
            });

            iconIndexOffsetCounter += iconsToShow;
            return (
              <React.Fragment key={index}>
                {getBlock(pattern, icons as StackIcon[])}
              </React.Fragment>
            );
          })}

          {/* ROW 1 */}
          {/* <IconBlockThreeByThree
            pattern={patterns.p1 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockThreeByThree
            pattern={patterns.p2 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockFull pattern={patterns.p3 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockFull pattern={patterns.p4 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockThreeByThree
            pattern={patterns.p5 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockThreeByThree
            pattern={patterns.p6 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree> */}

          {/* ROW 2 */}
          {/* <IconBlockTwoByThree
            pattern={patterns.p7 as Tile2}
            icons={[]}
          ></IconBlockTwoByThree>
          <IconBlockThreeByThree
            pattern={patterns.p8 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockFull pattern={patterns.p9 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockFull pattern={patterns.p10 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockFull pattern={patterns.p11 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockThreeByThree
            pattern={patterns.p12 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockOneByThree pattern={patterns.p13 as Tile3} icons={[]}></IconBlockOneByThree> */}

          {/* ROW 3 */}
          {/* <IconBlockThreeByThree
            pattern={patterns.p14 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockThreeByThree
            pattern={patterns.p15 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockFull pattern={patterns.p16 as Tile4} icons={[]}></IconBlockFull>
          <IconBlockFull pattern={patterns.p17 as Tile4} icons={[]}></IconBlockFull>

          <IconBlockThreeByThree
            pattern={patterns.p18 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree>
          <IconBlockThreeByThree
            pattern={patterns.p19 as Tile1}
            icons={[]}
          ></IconBlockThreeByThree> */}
        </div>

      </div>
    </React.Fragment>
  );
};
export default IconsCloud;
