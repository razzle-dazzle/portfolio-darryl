import React from "react";
import {
  IconBlockThreeByThree,
  IconBlockTwoByThree,
  IconBlockFull,
  IconBlockOneByThree,
} from "./IconBlocks";
import { StackIcon } from "lib/_all-db";

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
export const IconsCloud = ({ data }: IconsCloudProps) => {
  // console.log(Object.keys(data));
  console.log(data);
  return (
    <div className="grid grid-cols-[repeat(18,_1fr)] grid-rows-[repeat(9,_1fr)] text-white">
      {/* ROW 1 */}
      <IconBlockThreeByThree
        pattern={[0, 0, 1, 0, 1, 1, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockThreeByThree
        pattern={[1, 0, 0, 1, 1, 0, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>

      {/* ROW 2 */}
      <IconBlockTwoByThree
        pattern={[0, 0, 0, 1, 0, 0]}
        icons={[]}
      ></IconBlockTwoByThree>
      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockOneByThree pattern={[1, 1, 0]} icons={[]}></IconBlockOneByThree>

      {/* ROW 3 */}
      <IconBlockThreeByThree
        pattern={[0, 0, 1, 0, 0, 1, 0, 0, 0]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 0, 1, 1]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>
      <IconBlockFull pattern={[1]} icons={[]}></IconBlockFull>

      <IconBlockThreeByThree
        pattern={[1, 1, 1, 1, 1, 1, 1, 1, 0]}
        icons={[]}
      ></IconBlockThreeByThree>
      <IconBlockThreeByThree
        pattern={[1, 1, 0, 0, 0, 0, 0, 0, 0]}
        icons={[]}
      ></IconBlockThreeByThree>
    </div>
  );
};
export default IconsCloud;
