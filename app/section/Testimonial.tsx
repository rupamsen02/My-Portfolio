"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const Testimonial = () => {
  const [slide, setSlide] = useState(0);

  type testimonialInterface = {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  const testimonial: testimonialInterface[] = [
    {
      quote:
        "Working with Rupam was a smooth experience. He quickly understood the requirements and delivered a clean, responsive web application. His attention to detail and ability to solve problems efficiently really stood out.",
      author: "Priya Verma",
      role: "UI/UX Designer",
      avatar: "./Agency.ai pic.png",
    },
    {
      quote:
        "Rupam is a reliable developer who communicates clearly and collaborates well in a team environment. During our project, he consistently delivered features on time and was always open to feedback and improvements.",
      author: "Sneha Kapoor",
      role: "Project Manager",
      avatar: "./Agency.ai pic.png",
    },
    {
      quote:
        "What impressed me most about Rupam is his strong understanding of full-stack development. From frontend design in React to backend logic with Node.js, he handled everything with confidence and good coding practices.",
      author: "Amit Sharma",
      role: "Backend Developer",
      avatar: "./Agency.ai pic.png",
    },
    {
      quote:
        "Rupam is a fast learner with a great attitude toward development. He is always exploring new technologies and improving his skills, which makes him a valuable asset for any development team.",
      author: "Rahul Das",
      role: "Backend Developer",
      avatar: "./Agency.ai pic.png",
    },
  ];

  const next = () => {
    setSlide((prev) => (prev + 1) % testimonial.length);
  };

  const previous = () => {
    setSlide((prev) => (prev - 1 + testimonial.length) % testimonial.length);
  };

  return (
    <div
      id="testimonial"
      className="items-center px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden text-white/90 pt-50 pb-30"
    >
      <div className="space-y-2 relative">
        <div className="absolute top-1/3 left-1/4 md:left-0 bg-secondary/15 animate-pulse w-98 px-40 h-30 rounded-full blur-3xl -translate-y-1/2" />
        <p className="text-sm text-center text-secondary">FEEDBACK</p>
        <p className="text-3xl text-gray-400 pb-2 text-center">
          Some reviews <span className=" ">they shared with us.</span>{" "}
        </p>
        <div className="relative max-w-5xl mx-auto max-h-1/4 gap-8">
          <div className="relative px-4 py-6 rounded-lg border border-secondary/15 shadow-sm shadow-secondary/80">
            <div className="absolute -top-4 right-4 bg-secondary py-1 px-2 rounded-full">
              <Quote className="w-4" />
            </div>
            <span className="flex-1 ">
              <div className="text-md text-white font-light">
                <span className="font-normal">" </span>
                {testimonial[slide].quote}
                <span className="font-normal"> "</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div>
                  <p className="w-full">
                    <img
                      src={testimonial[slide].avatar}
                      alt=""
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </p>
                </div>
                <div>
                  <p className="text-sm">{testimonial[slide].author}</p>
                  <p className="text-xs text-gray-400">
                    {testimonial[slide].role}
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative items-center justify-center mt-10 gap-8">
        <button
          className="bg-mauve-950 rounded-full p-1 hover:text-secondary/90"
          onClick={previous}
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonial.map((_, index) => (
            <div key={index} className="">
              <button
                onClick={() => setSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === slide ? "w-6 bg-secondary" : " bg-white"}`}
              />
            </div>
          ))}
        </div>
        <button
          className="bg-mauve-950 rounded-full p-1 hover:text-secondary/90"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Testimonial;
