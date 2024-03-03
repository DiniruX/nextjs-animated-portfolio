"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl gap-4">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="https://res.cloudinary.com/dtec5px2c/image/upload/v1709409302/dinirudev_portfolio/vpzxuxzujiriz1eicpho.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center pt-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Innovate, Integrate, Iterate: Building Tomorrow's Technology Today.
          </h1>
          <p className="md:text-xl">
            Welcome to my online showcase! Prepare to be inspired as we delve
            into the world of software development and design. My portfolio
            showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          <div className=" flex gap-4 pb-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-xl ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-xl ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
