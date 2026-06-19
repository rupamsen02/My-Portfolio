import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  type projects = {
    name: string;
    description: string;
    image: string;
    skills: string[];
    link: string;
  };
  const Projects: projects[] = [
    {
      name: "Educate",
      description: "I build a frontend website with HTML, CSS, Javascript and React.",
      image: "./Educate pic.png",
      skills: ["HTML", "CSS", "React", "Javascript"],
      link: "https://frontend-projects-azure-beta.vercel.app/",
    },
    {
      name: "Agency.ai",
      description: "I build a frontend website with HTML, Tailwind CSS, Javascript and React.",
      image: "./Agency.ai pic.png",
      skills: ["HTML", "Tailwind CSS", "React", "Javascript"],
      link: "https://frontend-projects-711j.vercel.app/",
    },
    {
      name: "Freelancer clone",
      description: "I build a fullstack website with HTML, CSS, Next.js, Javascript, Node.js, Express.js, Mongoose and MongoDB.",
      image: "./freelancer.png",
      skills: ["HTML", "CSS", "Next.js", "Javascript", "Node.js", "Express.js", "Mongoose", "MongoDB"],
      link: "https://freelance-platform-frontend.vercel.app/"
    },
    {
      name: "Uber-drive clone",
      description: "It's a fullstack website with HTML, CSS, React, Javascript, Node.js, Express.js and PostgreSQL(Supabase).",
      image: "./uberdriveclone.png",
      skills: ["HTML", "CSS", "Next.js", "Javascript", "Node.js", "Express.js", "PostgreSQL(Supabase)"],
      link: "https://uberclone-drive-frontend.vercel.app/"
    }
  ];
  return (
    <div
      id="projects"
      className="container relative mx-auto text-white/90 text-center px-10 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-10 overflow-hidden w-full"
    >
      <div className="absolute top-1/2 left-1/4 md:left-0 bg-secondary/15 animate-pulse w-96 md:w-full h-98 rounded-full blur-3xl -translate-y-1/2" />
      <p className="text-sm text-secondary">PROJECT WORK</p>
      <p className="text-3xl text-gray-400">
        Featured work that can made an impact
      </p>
      <div className="relative grid md:grid-cols-2 py-8 gap-12 md:gap-8">
        {Projects.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.link} target="_blank" className="relative h-full hover:text-secondary bg-mauve-950 ">
                <div className="relative overflow-hidden cursor-pointer hover:scale-102 transition-transform duration-500">
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover h-full w-full hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-4 space-y-3 bg-mauve-950 w-full flex flex-col text-left">
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">{item.name}</span>{" "}
                      <span><ArrowUpRight className="w-5"/></span>
                    </div>

                    <span className="text-sm text-gray-400">
                      {item.description}
                    </span>
                    <div className="text-xs sm:text-sm text-gray-400">
                      <span className="flex flex-wrap gap-4">
                        {item.skills.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-mauve-900 py-2 px-4 rounded-4xl  hover:text-gray-500"
                            >
                              {item}
                            </div>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="relative cursor-pointer text-center text-sm inline-flex bg-mauve-950 border mt-10 border-mauve-900 px-4 py-2 gap-2 rounded-4xl items-center justify-center">
        View All Projects
        <ArrowUpRight className="w-4" />
      </div>
    </div>
  );
};
export default Projects;
