const Experience = () => {
  type experiences = {
    period: String;
    role: String;
    company: String;
    place: String[];
    description: String;
    technologies: String[];
    current: boolean;
  };
  const experience: experiences[] = [
    {
      period: "July 2025 - October 2025",
      role: "Web Development",
      company: "Labmentix Startup",
      place: ["Bengaluru,", "India"],
      description:
        "I worked as a fullstack developer role in remote paid internship position.",
      technologies: [
        "ReactJs",
        "Javascript",
        "HTML",
        "CSS",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Neon",
        "Tailwind CSS",
        "Stripe",
      ],
      current: true,
    },
  ];
  return (
    <div
      id="experience"
      className="relative text-white/80 px-10 sm:px-12 lg:px-24 xl:px-40 w-full pt-30 md:pt-25 pb-30 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 bg-secondary/15 animate-ping w-150 h-96 rounded-full blur-3xl -translate-y-1/2" />
      <p className="text-secondary text-sm">CAREER JOURNEY</p>
      <p className="text-secondary text-4xl py-2 mt-4">
        Showcasing My <br /> <span>Journey & Impact </span><br />
        <span className="italic font-thin text-white/90">
          through real-world work.
        </span>{" "}
      </p>
      <p className="text-sm text-gray-400 mb-12">
        A collection of experiences that reflect my growth, problem-solving, and
        ability to <br /> build meaningful solutions.
      </p>
      {/* <p className="text-secondary">Timeline</p> */}
      <div className="relative text-white/80">
        <div className="left-0 md:left-1/2 w-0.5 bg-linear-to-b from-secondary/70 via-secondary/50 to-transparent absolute top-0 bottom-0 md:-translate-x-1/2]" />
        {experience.map((item, index) => {
          return (
            <div
              key={index}
              className="relative grid md:grid-cols-2 md:gap-x-11"
            >
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-2 h-2 -translate-x-1/2 ring-1 ring-white/10 z-10 bg-secondary rounded-full">
                {item.current && (
                  <span className="absolute inset-0 rounded-full bg-secondary animate-ping"></span>
                )}
              </div>
              <div
                className={`border py-4 px-6 rounded-md  bg-mauve-950 border-mauve-900 ml-6 md:ml-0 ${index % 2 === 0 ? "md:col-start-1 md:text-right" : ""}`}
              >
                <p className="text-secondary font-bold text-xs">
                  {item.period}
                </p>
                <p className="text-lg mt-2">{item.role}</p>
                <p className="text-sm text-white/60">{item.company}</p>
                <span
                  className={`${index % 2 === 0 ? "flex md:justify-end gap-1 mb-4" : "flex gap-1 mb-4"}`}
                >
                  {item.place.map((item, index) => {
                    return (
                      <div key={index} className="text-xs text-white/60">
                        {item}
                      </div>
                    );
                  })}
                </span>
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                <span
                  className={`flex flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""} gap-2 my-2 text-xs md:text-sm justify text-gray-400`}
                >
                  {item.technologies.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-mauve-900 rounded-4xl px-4 py-2"
                      >
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </span>
                <p>{item.current}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
