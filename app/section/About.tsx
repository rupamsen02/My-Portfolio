import {
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  Lightbulb,
  LucideIcon,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
const About = () => {
  type about = {
    icon: LucideIcon;
    title: String;
    description: String;
  };
  const aboutArray: about[] = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete apps using React, Next.js, Node & databases",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Fast loading apps with optimized APIs and efficient rendering",
    },
    {
      icon: ShieldCheck,
      title: "Authentication & Security",
      description: "JWT auth, protected routes, and secure backend practices",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Structured schemas with MongoDB/MySQL for scalable apps",
    },
    {
      icon: GitBranch,
      title: "Real-world Projects",
      description: "Hands-on experience with production-like applications",
    },
    {
      icon: MessageSquare,
      title: "API Integration",
      description: "Connecting frontend with REST APIs and handling data flow",
    },
    {
      icon: LayoutDashboard,
      title: "Responsive UI/UX",
      description: "Clean, mobile-friendly interfaces with modern design",
    },
    {
      icon: Rocket,
      title: "Deployment & Hosting",
      description: "Deploying apps on Vercel, handling builds and environments",
    },
  ];
  return (
    <div
      id="about"
      className="relative text-white/90 px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden flex flex-col pt-25 pb-30 "
    >
      <div className="absolute top-1/2 left-1/4 md:left-0 bg-secondary/10 animate-pulse w-96 md:w-full h-98 rounded-full blur-3xl -translate-y-1/2" />
      <p className="text-sm animate-fade-Y text-secondary">ABOUT ME</p>
      <div className="container ">
        <div className="flex flex-col gap-16 justify-between">
          <div className="flex flex-col items-left">
            <h2 className="text-4xl my-6 animate-fade-Y text-secondary">
              Turning complex ideas into
              <br />
              <span className="italic font-thin text-white/90">
                {" "}
                simple, clean, and responsive interfaces.
              </span>{" "}
            </h2>
            <p className="text-gray-400 text-sm animate-fade-Y w-3/4">
              I am a developer who has gained practical experience by building
              personal projects. My focus is on creating clean, user-friendly
              websites that are easy to navigate. I use modern web technologies
              to ensure that my interfaces look great on all devices. I enjoy
              solving technical challenges and finding efficient solutions to
              improve my work. I am very motivated to join a professional team
              where I can contribute and learn further. My goal is to deliver
              high-quality, professional results through dedication and hard
              work.{" "}
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 -mt-6 mb-2 lg:mb-0 w-full shadow-md animate-fade-Y">
            {aboutArray.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="">
                  <div className="bg-mauve-950 p-4 rounded-md shadow-md">
                    <div className="w-10 pl-2 py-2 mb-2 rounded-md bg-mauve-900">
                      <Icon className="text-indigo-500" />
                    </div>
                    <span>{item.title}</span>
                    <br />
                    <span className="text-sm text-gray-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="-mt-10 rounded-md bg-mauve-950 p-4 italic animate-fade-Y">
            "My mission is to apply the skills from my personal projects to
            solve real-world problems within a professional development team..."
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
