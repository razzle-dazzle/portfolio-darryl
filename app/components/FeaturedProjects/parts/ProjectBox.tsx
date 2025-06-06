"use client";

import React from "react";
// import { Swiper } from "swiper";
// import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { NAV_ITEMS } from "app/constants";
import StackIcons from "./StackList";
import Button from "../../Button/Button";
import type { ProjectType } from "lib/types";
import { getProjectImages } from "app/utils/utils";
import { useIntersection } from "app/hooks/useIntersection";
import styles from "./ProjectBox.module.scss";

interface ProjectBoxProps {
  project: ProjectType;
  /** If true, the text will be on the left and image right */
  flip?: boolean;
  otherClasses?: string;
}

const ProjectBox = ({ project, flip, otherClasses }: ProjectBoxProps) => {
  // const [swiper, setSwiper] = React.useState<Swiper>();
  const {
    elementRef: projectsBoxRef
  } = useIntersection<HTMLAnchorElement>({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25,
    onFirstInteraction: () => {
      projectsBoxRef.current?.classList.add(styles.slideUpFadeIn);
    }
  });
  const projectImages = getProjectImages(project);
  return (
    <Link
      href={`${NAV_ITEMS.projects.path}${project.alias}`}
      ref={projectsBoxRef}
      className={clsx(
        "text-orange-300 font-medium text-md md:text-lg",
        "transform transition duration-500 md:hover:scale-105 block",
        "opacity-0",
        otherClasses
      )}
    >
      <article className="grid grid-cols-12 mb-12 md:mb-16 lg:mb-32 gap-5 md:gap-10">
        <div
          className={clsx(
            "col-span-12 md:col-span-6 relative flex",
            // flip ? "md:order-last md:justify-end" : ""
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

          <div className="w-full h-[80vw] md:h-[480px] md:min-w-[120px] lg:h-[420px] relative overflow-hidden">
            <Image
              src={projectImages.featured || projectImages.original}
              fill={true}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 500px, 600px"
              style={{
                objectFit: "cover",
                borderRadius: 16,
              }}
              alt={project.title}
              loading='lazy'
              quality={90}
            />
          </div>
        </div>
        <div className="project-desc flex col-span-12 md:col-span-6 justify-self-stretch">
          <div className={clsx("flex flex-col justify-around w-full")}>
            <div>
              <h2
                className={clsx(
                  "font-bold text-xl md:text-[40px] tracking-tight mb-4 md:mb-8 text-black dark:text-white",
                  // flip ? "md:text-right" : "md:text-left"
                  "md:text-left" // remove if using flip
                )}
              >
                {project.title}
              </h2>
              {project.role && (
                <p className="mb-4 md:mb-12 font-mono tracking-tighter text-sm">
                  <span className="text-[#679ad1]">
                    const <span className='text-black dark:text-[#dcdcaf]'>role</span>{" "}
                    <span className="text-black dark:text-white">=</span>{" "}
                  </span>
                  <span className="text-black dark:text-orange-300">
                    &quot;{project.role}&quot;<span className="text-black dark:text-white">{";"}</span>
                  </span>
                  {/* <span className="text-orange-300 font-light"> {"( ) {"}</span> */}
                </p>
              )}
              <p
                className={clsx(
                  "my-1 px-0 text-sm md:text-base text-left",
                  // flip ? "md:text-right" : "md:text-left"
                  "md:text-left", // remove if using flip
                  "line-clamp-5",
                  "leading-normal",
                  "text-black dark:text-white"
                )}
              >
                {project.description}. {project.description_secondary}
              </p>
              {/* {project.role && (
                <p>
                  <span className="text-orange-300 font-light"> {"}"}</span>
                </p>
              )} */}
            </div>

            <StackIcons
              icons={project.stack}
              // flip={flip}
            />

            <div className="flex justify-end md:justify-start mt-1">
              <Button icon size="small">View project details</Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectBox;
