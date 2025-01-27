"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortfolioPage = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "IIHE Official Website",
      desc: "IIHE is a leading university in Sri Lanka. They wanted to give a new look for their official website and we had to redesign the official website of IIHE university Sri Lanka and we had to redesign and complete it using proper technology stack from the scratch.",
      img: "https://res.cloudinary.com/dtec5px2c/image/upload/v1709453171/dinirudev_portfolio/evbzkyomo0zbrqklowlx.png",
      link: "https://iihe.lk/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "AsianMirror News",
      desc: "AsianMirror is a daily news website developed using WordPress. We had to improve few function while improving the user experience. Throughout this project, I had a great exposure to WordPress development",
      img: "https://res.cloudinary.com/dtec5px2c/image/upload/v1709463849/dinirudev_portfolio/ri8w9ivmyhwr2ylq9ktu.png",
      link: "https://www.asianmirror.lk/",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "HappyKid Mobile App",
      desc: "This app, I developed to treat primary school ADHD children. This was the research application I did for my final year research. Throughout this application, I had the perfect exposure to AI and ML.",
      img: "https://res.cloudinary.com/dtec5px2c/image/upload/v1709486215/dinirudev_portfolio/syjhhmu59kndgrqrpjzs.png",
      link: "https://adhdsupportapp.netlify.app/",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "TrainGo Ticket Booking",
      desc: "TrainGo was developed based on a final year assignment which we were assigned to. Through this mobile application, users are able to search their train and book seats. More easily and More efficiently.",
      img: "https://res.cloudinary.com/dtec5px2c/image/upload/v1709485650/dinirudev_portfolio/yogc9o00jm56g7ppqq3s.png",
      link: "#",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
            />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-54 lg:w-[500px] lg:h-[281px] xl:w-[800px] xl:h-[450px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[800px] text-justify">
                    {item.desc}
                  </p>
                  <Link className="flex justify-end" href={item.link}>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:px-8 lg:text-lg bg-white text-gray-600 font-semibold rounded-lg m-4">
                      More info
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                FullStack Developer and DevOps
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
