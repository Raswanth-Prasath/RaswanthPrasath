"use client";
import Image from "next/image";
import Link from "next/link";
import { LogoSlider } from "@/app/about/logoSlider";
import { Expertise } from "@/app/about/industryExperience";
import { ReadingList } from "@/app/about/readingList";
import ImageWebp from "../../assets/images/profile-photo.webp";
import ImageJpg from "../../assets/images/profile-photo.jpg";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="relative overflow-hidden py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="inset-0 w-full h-full">
          <picture>
            <source srcSet={ImageWebp.src} type="image/webp" />
            <source srcSet={ImageJpg.src} type="image/jpeg" />
            <Image
              src={ImageJpg}
              className="rounded-2xl mx-auto md:w-64 md:h-auto"
              alt="Profile image"
              width={200}
              height={200}
            />
          </picture>
        </div>
        <div className="text-center">
          <h1 className="font-Bitform text-gray-800 dark:text-gray-200 font-semibold lg:text-5xl md:text-3xl text-2xl tracking-tight lg:leading-tight md:my-8 my-4">
            I&apos;m Raswanth Prasath. <br />{" "}
            <span className="text-gray-800/50 dark:text-gray-200/40">
              I design, analyze, and build transportation solutions.
            </span>
          </h1>
          <div className="my-4 text-left text-base sm:text-lg leading-6 text-gray-700 dark:text-gray-400">
            <p className="md:my-4 my-3">
              Hi, I&apos;m a Civil Engineer specializing in Transportation Engineering with a passion for leveraging data and technology to improve urban mobility and safety.
            </p>
            <p>
              My journey in transportation engineering has equipped me with strong skills in traffic modeling, geospatial analysis, and data-driven infrastructure solutions. I&apos;ve worked on various projects including traffic impact studies, corridor planning, and collision avoidance systems using machine learning.
            </p>
            <p className="md:my-4 my-3">
              I focus on developing innovative solutions that enhance transportation systems, making them safer, more efficient, and sustainable. My technical toolkit includes Python, QGIS, traffic simulation software like VISSIM and Synchro, and data analysis tools that help me transform complex transportation challenges into actionable insights.
            </p>
            <p className="md:my-4 my-3">
              Currently pursuing my Master&apos;s at Arizona State University, I&apos;m also working as a Graduate Research Assistant at the School of Earth and Space Exploration, where I&apos;m developing Python-based QGIS plugins for geospatial analysis. Previously, I worked as a Traffic and Transportation Engineer at Concept Dash, conducting traffic impact studies and transportation demand management analyses.
            </p>
            <p className="md:my-4 my-3">
              When I&apos;m not working on transportation solutions, I enjoy exploring new data visualization techniques, contributing to open-source GIS projects, and staying updated with the latest advancements in autonomous vehicle technologies and smart city initiatives.
            </p>
          </div>
        </div>
        <Expertise />
        <ReadingList />
      </div>
    </section>
  );
};

export default About;