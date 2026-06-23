"use client";
import { ArrowRight, ChevronDown, ChevronUp, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import dynamic from "next/dynamic";
import Link from "next/link";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const Hero = () => {
  const skills: String[] = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Tailwind CSS",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Postman",
    "Thunder Client",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "MySQL",
    "Git",
    "Github",
    "Vercel",
  ];

  return (
    <div id="hero">
      <div className="container mx-auto relative flex items-center overflow-hidden min-w-full min-h-screen">
        <div className="absolute top-1/2 left-1/4 md:left-0 bg-secondary/10 animate-pulse w-96 md:w-full h-98 rounded-full blur-3xl -translate-y-1/2" />
        {/* White Dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full shadow-2xl shadow-white opacity-60"
              style={{
                backgroundColor: "white",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${
                  15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        {/* Hero Content */}
        <div className="flex flex-col container mx-auto mt-10 justify-center w-full px-10 sm:px-12 lg:px-24 xl:px-40 items-center text-center overflow-hidden py-30 animate-fade-Y">
          <div className="items-center justify-center">
            <div className="relative animate-fade-Y">
              <div className=" flex items-center mx-auto justify-center relative mt-6 my-10 z-1">
                <img
                  src="./me1.png"
                  alt=""
                  className="h-50 w-50 object-cover rounded-full border-3 border-secondary/90 bg-[#010B13] z-50 button-glow"
                />
              </div>
            </div>
            <div className="text-white text-center space-y-6 w-100 sm:w-full">
              <div className="text-4xl md:text-5xl font-inter space-y-20 my-4 font-semibold w-100 sm:w-full">
                <span className="text-secondary">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("Creating simple,").start();
                    }}
                    options={{ cursor: "", delay: 55 }}
                  />
                </span>
                <span className="text-secondary">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1500)
                        .typeString("precise solutions")
                        .start();
                    }}
                    options={{ cursor: "", delay: 55 }}
                  />
                </span>
                <span className="font-serif font-normal italic">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(2500)
                        .typeString("for complex needs.")
                        .start();
                    }}
                    options={{ cursor: "", delay: 50 }}
                  />
                </span>{" "}
              </div>
              <p className="text-sm md:text-base mt-4 text-white/90 w-100 sm:w-full italic">
                " I’m Rupam Sen, a Fullstack Developer <br /> specializing in
                React, Next.js, Javascript, TypeScript, Node.js and Express.js.{" "}
                <br /> I build scalable, responsive web applications designed to
                help clients turn <br />
                complex ideas into polished, production-ready solutions. "
              </p>
              <div className="flex gap-4 justify-center text-sm">
                <button className="h-10 bg-white/90 text-black/90 hover:text-black/85 cursor-pointer font-semibold px-6 py-2 hover:bg-white/85 rounded-3xl">
                  <a href="#contact" className="inline-flex gap-2">
                    Connect Me <ArrowRight className="w-3 h-3 mt-1" />
                  </a>
                </button>
                <button className="inline-flex gap-2 h-10 border-gray-500/40 border font-semibold px-6 hover:text-white/80 cursor-pointer py-2 rounded-3xl">
                  <a href="https://drive.google.com/file/d/1ihly2DEnfsmqCc5cxW6ZdkDWZcLvFraI/view?usp=sharing" target="_blank" className="inline-flex gap-2">
                    <Download className="w-3 h-3 mt-1" /> Download CV
                  </a>
                </button>
              </div>
              <div className="flex text-center justify-center">
                <p className="flex text-sm text-white/90 gap-2">
                  <span className="mt-1">Follow Me: </span>
                  <a
                    href="https://github.com/rupamsen02"
                    target="_blank"
                    className="bg-black border border-gray-600 p-2 rounded-full cursor-pointer hover:text-gray-300"
                  >
                    <VscGithubAlt />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rupam-sen-37190121a"
                    target="_blank"
                    className="bg-black border border-gray-600 p-2 rounded-full cursor-pointer hover:text-gray-300"
                  >
                    <FiLinkedin />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="container mx-auto relative text-white/90 items-center mt-10 min-w-full overflow-x-hidden lg:mt-0 bg-black px-10 sm:px-12 lg:px-24 xl:px-40 text-sm pb-10 animate-fade-Y">
        <p className="text-center">Skills & Technologies</p>
        <div className="relative overflow-hidden mt-2">
          <div className="mt-4 flex text-gray-400 text-base whitespace-nowrap animate-slide w-full">
            {[...skills, ...skills].map((item, index) => (
              <div key={index} className="px-4 sm:px-4.5 py-4 ">
                <span className="cursor-pointer hover:text-gray-300/90 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href="#hero" className="relative text-white">
        <div className="fixed z-20 bottom-0 flex justify-end w-full">
          <div className="flex flex-col text-gray-400  border-gray-400/20 px-6 py-2 rounded-sm backdrop-blur-2xl">
            <div className="">
              <ChevronUp className="mx-2 animate-bounce mt-1" />
            </div>
            <p className="text-md">Scroll</p>
          </div>
        </div>
      </a>
      <a href="#footer" className="relative text-white">
        <div className="fixed z-20 bottom-0 justify-start">
          <div className="flex flex-col text-gray-400  border-gray-400/20 px-6 py-2 rounded-sm backdrop-blur-2xl">
            <p className="text-md">Scroll</p>
            <div className="">
              <ChevronDown className="mx-2 animate-bounce mt-1" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Hero;
