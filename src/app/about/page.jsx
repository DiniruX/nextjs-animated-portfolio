"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experinceRef = useRef();
  const isExperinceRefInView = useInView(experinceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Experienced full-stack software developer with more than a year of
              hands-on experience. Versatile in both development and DevOps,
              adept at tackling challenges with creativity and efficiency. Eager
              to collaborate with experts, driven by a genuine passion for
              Information Technology, and committed to continuous growth and
              excellence.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Innovate, Integrate, Iterate: Building Tomorrow's Technology
              Today.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="px-10 h-20 flex items-center justify-end">
              <Image
                className="-rotate-90"
                src="https://res.cloudinary.com/dtec5px2c/image/upload/v1709449107/dinirudev_portfolio/hxndvwijzp6kfgdjstfb.png"
                height={50}
                width={100}
                alt=""
              />
              
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongo DB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MERN Stack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jira Confluence
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WordPress
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experinceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperinceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCES
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperinceRefInView ? { x: 0 } : {}}
              className=""
            >
              <div className="flex justify-between h-58">
                <div className="w-2/5">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Associate Software Engineer - FullStack
                  </div>
                  <div className="p-3 text-sm italic">
                    Perfect exposure of working with local client and a wide range of projects.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-Oct - Present
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    CodeHub SL
                  </div>
                </div>
                <div className="w-1/5 flex items-center justify-center">
                  <div className="w-1 h-full rounded relative bg-gray-600">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-2/5"></div>
              </div>

              <div className="flex justify-between h-58">
                <div className="w-2/5"></div>
                <div className="w-1/5 flex items-center justify-center">
                  <div className="w-1 h-full rounded relative bg-gray-600">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
                    Software Engineer Intern - FullStack
                  </div>
                  <div className="p-3 text-sm italic">
                    Exposed to the professional environment for the first time.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022-Oct - 2023-April
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit h-fit">
                    Digiratina
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <Link href="https://drive.google.com/file/d/1FRgl7lgSI6sK56ijQv3_xLYHYSPRQYPZ/view?usp=sharing" className="">
                  <button className="bg-gray-500 text-white rounded p-4">
                    My Resume
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
