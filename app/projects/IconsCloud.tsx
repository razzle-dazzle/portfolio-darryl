"use client";
import React, { type ReactNode } from "react";
import {
  IconBlockThreeByThree,
  IconBlockTwoByThree,
  IconBlockFull,
  IconBlockOneByThree,
  IconBlockOneByOne,
} from "./IconBlocks";
import type { StackIcon } from "lib/types";
import { useRouter } from "next/navigation";
import myProjectService from "app/services/projects.service";

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
  filterByTag?: (tag: StackIcon) => void;
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
  p7: [0, 1, 0, 0, 0, 0],
  p8: [1, 1, 1, 1, 1, 1, 0, 1, 1],
  p9: [1],
  p10: [1],
  p11: [1],
  p12: [1, 1, 1, 1, 1, 0, 1, 0, 0],
  p13: [0, 0, 0],
  // row 3
  p14: [0, 1, 1, 0, 0, 1, 0, 0, 0],
  p15: [1, 1, 1, 1, 1, 1, 0, 1, 1],
  p16: [1],
  p17: [1],
  p18: [1, 1, 1, 1, 1, 1, 1, 1, 0],
  p19: [1, 1, 0, 1, 0, 0, 0, 0, 0],
};

export const IconsCloud = ({ data }: IconsCloudProps) => {
  const [filterBy, setFilterBy] = React.useState<string>("");
  const iconsList = Array.from(Object.entries(data));
  const patternsList = Object.values(patterns);
  const router = useRouter();

  const handleClick = (icon: StackIcon) => {
    // @todo - if already filtering by this icon, remove filter from url
    // console.log(icon);

    // get URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const filterIcon = urlParams.get("filter");

    if (icon === filterIcon) {
      setFilterBy("");
      router.push("/projects");
    } else {
      if (icon) {
        setFilterBy(icon);
        router.push(`/projects?filter=${icon}`);
      }
      //  else {
      //   setFilterBy(icon);
      //   router.push("/projects");
      // }
    }
  };

  const getBlock = (
    somePattern: PatternBitTypes,
    icons: StackIcon[],
    isMobile?: boolean
  ): ReactNode => {
    const tileType = somePattern.length;
    switch (tileType) {
      case 9: {
        return (
          <IconBlockThreeByThree
            // pattern={somePattern as Tile1}
            icons={icons}
            handleClick={handleClick}
            filterString={filterBy}
          />
        );
      }
      case 6: {
        return (
          <IconBlockTwoByThree
            // pattern={somePattern as Tile2}
            icons={icons}
            handleClick={handleClick}
            filterString={filterBy}
          />
        );
      }
      case 3: {
        return (
          <IconBlockOneByThree
            // pattern={somePattern as Tile3}
            icons={icons}
            handleClick={handleClick}
            filterString={filterBy}
          />
        );
      }
      case 1: {
        return isMobile ? (
          <IconBlockOneByOne
            icons={icons}
            handleClick={handleClick}
            filterString={filterBy}
          />
        ) : (
          <IconBlockFull
            // pattern={somePattern as Tile4}
            icons={icons}
            handleClick={handleClick}
            filterString={filterBy}
          />
        );
      }
    }
  };

  let iconIndexOffsetCounter = 0;
  return (
    <React.Fragment>
      <div className="px-0 md:px-6">
        <div className="hidden md:grid md:grid-cols-[repeat(18,_1fr)] md:grid-rows-[repeat(9,_1fr)] text-white">
          {patternsList.map((pattern, index) => {
            // how many icons do we need to show?
            const iconsToShow = pattern.filter((isSet) => isSet === 1).length;
            // get the next set of 'n' icons
            const iconsSet = iconsList
              .slice(
                iconIndexOffsetCounter,
                iconIndexOffsetCounter + iconsToShow
              )
              .map((i) => i[0]);

            // improve this...
            // build a similar list of icons based on the pattern - use empty string if pattern has a zero
            let setCounter = -1;
            const icons: string[] = pattern.map((p) => {
              if (p === 1) {
                setCounter++;
                return iconsSet[setCounter];
              }
              return "";
            });

            iconIndexOffsetCounter += iconsToShow;
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <React.Fragment key={index}>
                {getBlock(pattern, icons as StackIcon[])}
              </React.Fragment>
            );
          })}
        </div>

        {/* repeat rows needs to allow all icons to fit on the page! Update as needed... */}
        <div className="grid md:hidden grid-cols-[repeat(6,_1fr)] grid-rows-[repeat(11,_1fr)] text-white gap-2">
          {iconsList.map((icon, index) => {
            // // how many icons do we need to show?
            // const iconsToShow = pattern.filter((isSet) => isSet === 1).length;
            // // get the next set of 'n' icons
            // const iconsSet = iconsList
            //   .slice(
            //     iconIndexOffsetCounter,
            //     iconIndexOffsetCounter + iconsToShow
            //   )
            //   .map((i) => i[0]);

            // // improve this...
            // // build a similar list of icons based on the pattern - use empty string if pattern has a zero
            // let setCounter = -1;
            // const icons: string[] = pattern.map((p) => {
            //   if (p === 1) {
            //     setCounter++;
            //     return iconsSet[setCounter];
            //   }
            //   return "";
            // });

            // iconIndexOffsetCounter += iconsToShow;
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <React.Fragment key={index}>
                {getBlock([1], icon as StackIcon[], true)}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {filterBy ? (
        <div className="my-8 mt-2 flex flex-col md:flex-row md:gap-4 md:justify-center">
          <p className="text-black dark:text-white text-center text-3xl font-300">
            <span className="flex flex-row gap-2">
              <span className="inline-block">Filtering by:</span>
              <span className="inline-block pl-1 text-red-700 font-bold">
                {myProjectService.getSpecialStackLabel(filterBy as StackIcon)}.
              </span>
            </span>
          </p>
          <div className="flex justify-end">
            <button
              className="text-right text-lg text-black dark:text-yellow-300 underline"
              type="button"
              onClick={() => handleClick(filterBy as StackIcon)}
            >
              clear filter &raquo;
            </button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default IconsCloud;
