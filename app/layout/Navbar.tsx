"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  type Navbar = {
    href: string;
    label: string;
  };
  const NavbarData: Navbar[] = [
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
    <nav className="px-10 sm:px-12 lg:px-24 xl:px-40 fixed top-0 backdrop-blur-xs left-0 text-secondary flex w-full items-center z-50 py-5 justify-between">
      <div className="hidden md:flex title text-2xl font-bold animate-fade-Y">
        <p className="glow-text text-4xl text-secondary">RuPaM</p>
      </div>
      <div
        className={`hidden gap-6 cursor-pointer md:flex border border-mauve-900 px-6 py-2 rounded-4xl shadow-xl shadow-secondary/30 bg-mauve-950 animate-fade-Y`}
      >
        {NavbarData.map((item) => (
          <a
            className="hidden md:flex hover:scale-103 hover:border-b hover:border-b-secondary transition-all duration-500"
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex cursor-pointer items-center ">
        <div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-2 px-4 hidden md:block bg-mauve-950 border border-mauve-900 text-secondary/90 rounded-4xl shadow-xl shadow-secondary/20 animate-fade-Y"
          >
            Contact
          </a>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <Menu
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden"
            />
          </div>
          <div className="block absolute right-6 md:hidden title text-2xl font-bold">
            <p className="glow-text text-4xl">Portfolio</p>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`fixed min-h-screen bg-black/90 -top-4 left-0 w-60 text-left py-14 my-4 px-12 gap-y-10 flex flex-col z-1 border text-secondary border-mauve-900 md:hidden font-thick animate-fade-X`}
        >
          <X
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden absolute top-4 left-4 cursor-pointer"
          />

          {NavbarData.map((item) => (
            <a
              className="hover:scale-101 transition-all duration-500"
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cursor-pointer text-center py-2 px-4 block md:hidden bg-white/80 text-mauve-950 font-light rounded-4xl shadow-xl"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
