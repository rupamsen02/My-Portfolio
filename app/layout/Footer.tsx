"use client";
import { useEffect, useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  type Footer = {
    href: string;
    label: string;
  };
  const FooterData: Footer[] = [
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#experience",
      label: "Experience",
    },
    {
      href: "#testimonial",
      label: "Testimonial",
    },
  ];

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="footer" className="flex flex-col text-white/90 items-center border-t-3 border-t-secondary justify-center py-15 button-glow bg-black/15 pb-20 relative px-10 sm:px-12 lg:px-0 xl:px-40 overflow-hidden w-full">
      <div className="absolute top-1/2 left-1/4 md:left-0 bg-secondary/10 animate-pulse w-96 md:w-full h-98 rounded-full blur-3xl -translate-y-1/2" />
      <div className="flex flex-col md:flex-row text-center item-center md:items-center justify-center gap-10">
        <div className="title text-2xl font-bold animate-fade-Y pt-2">
          <p className="glow-text text-4xl">RuPaM</p>
        </div>
        <div className="flex relative gap-4 mt-0 md:mt-4">
          {FooterData.map((item) => (
            <a key={item.href} href={item.href} className="">
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-2">
          <a
            href="#contact"
            className="text-sm font-bold animate-fade-Y shadow-sm shadow-white/90 my-40 mx-auto md:mx-0 w-1/2 md:w-full rounded-4xl py-3 px-4"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="container mx-auto my-15 px-20 sm:px-24 lg:px-40 xl:px-60">
        <p className="text-center">
          Thank you for visiting my portfolio. I am currently focused on
          expanding my technical expertise while building innovative solutions
          through my independent projects. I am eager to apply this experience
          to new challenges and professional opportunities. Please feel free to
          reach out via email or LinkedIn to discuss potential collaborations. I
          look forward to connecting and exploring how we might work together.
        </p>
      </div>
      <div className="flex flex-col relative items-center text-center gap-2">
        <p>Connect Me:</p>
        <span className="flex gap-1">
          <a href="https://github.com/rupamsen02" target="_blank" className="bg-black border border-gray-600 p-2 rounded-full cursor-pointer hover:text-gray-300">
            <VscGithubAlt />
          </a>
          <a href="https://www.linkedin.com/in/rupam-sen-37190121a" target="_blank" className="bg-black border border-gray-600 p-2 rounded-full cursor-pointer hover:text-gray-300">
            <FiLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
};
export default Footer;
