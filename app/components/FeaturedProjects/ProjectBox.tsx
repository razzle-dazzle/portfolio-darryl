"use client";

import React from "react";
// import { Swiper } from "swiper";
// import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Balancer from "react-wrap-balancer";
// import { Project } from 'contentlayer/generated';
import { NAV_ITEMS } from "app/constants";
import { FeaturedProject } from ".";
import StackIcons from "./StackList";

interface ProjectBoxProps {
  project: FeaturedProject;
  /** If true, the text will be on the left and image right */
  flip?: boolean;
}

const ProjectBox = ({ project, flip }: ProjectBoxProps) => {
  // const [swiper, setSwiper] = React.useState<Swiper>();
  return (
    <Link
      href={`${NAV_ITEMS.projects.path}/${project.url}`}
      className={clsx("text-orange-300 font-medium text-md md:text-lg")}
    >
      <div
        className="grid grid-cols-12 mb-4 md:mb-16 lg:mb-32 gap-5 md:gap-10"
        
      >
        <div
          className={clsx(
            "project-image col-span-12 md:col-span-6 relative flex",
            flip ? "md:order-last md:justify-end" : ""
          )}
        >
          {/* <SwiperSlider onSwiper={setSwiper}>
          {project.images.map(({ alt, url }, imageIdx) => (
            <SwiperSlide key={imageIdx}>
              <Image
                src={url}
                alt={alt}
                // fill={true}
                width={500}
                height={400}
                style={{
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </SwiperSlide>
          ))}
        </SwiperSlider> */}

          <div className="w-full h-[200px] md:h-[380px] md:min-w-[120px] lg:h-[380px] relative overflow-hidden">
            <Image
              src={project.image}
              fill={true}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 500px, 600px"
              // width="0"
              // height="0"
              style={{
                // objectFit: "contain",
                objectFit: "cover",
                borderRadius: 8,
              }}
              alt={project.title}
            />
          </div>
        </div>
        <div className="project-desc flex col-span-12 md:col-span-6 text-neutral-800 dark:text-neutral-200 justify-self-stretch">
          <div
            className={clsx(
              // flip ? "md:pr-4" : "md:pl-4",
              "flex flex-col justify-around w-full"
            )}
          >
            <div>
              <h3
                className={clsx(
                  "font-bold text-xl md:text-3xl uppercase mb-4 text-neutral-800 dark:text-neutral-200 text-center",
                  flip ? "md:text-right" : "md:text-left"
                )}
              >
                {project.title}
              </h3>
              <p
                className={clsx(
                  "mb-2 text-sm md:text-lg text-center font-thin",
                  flip ? "md:text-right" : "md:text-left"
                )}
              >
                <Balancer ratio={0.6}>{project.description}</Balancer>
              </p>
            </div>

            <StackIcons icons={project.stack} flip={flip}></StackIcons>

            <div
              className={clsx(
                "text-orange-300",
                "flex flex-row gap-4 items-center justify-end my-2 md:my-0",
                flip ? "md:justify-end" : "md:justify-start"
              )}
            >
              View project &raquo;
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
