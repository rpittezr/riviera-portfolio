import { HiAcademicCap, HiCode } from "react-icons/hi";

export function Skills() {
  const educations = [
    {
      name: "Computer Engineering | University",
    },
    {
      name: "Mathematics | University",
    },
  ];

  const skills = [
    {
      name: "HTML5",
      icon: "images/html.svg",
      level: "5 years",
    },
    {
      name: "CSS3",
      icon: "images/css.svg",
      level: "5 years",
    },
    {
      name: "JavaScript",
      icon: "images/js.svg",
      level: "5 years",
    },
    {
      name: "React.js",
      icon: "images/react.svg",
      level: "5 years",
    },
    {
      name: "Node.js",
      icon: "images/node.svg",
      level: "5 years",
    },
    {
      name: "Express.js",
      icon: "images/node.svg",
      level: "5 years",
    },
  ];

  return (
    <>
      <section className="bg-neutral-200">
        <div className="container mx-auto py-12 max-w-5xl p-4">
          <div className="p-4 text-center">
            <h2 className="flex items-center justify-center gap-x-5">
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
              <span className=" title">Education & Skills</span>
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            </h2>
            <p className="text-sm text-gray-600 mt-5">I am a fast learner</p>
          </div>
          <div className="flex flex-col justify-center items-center md:items-baseline gap-8 md:flex-row">
            <div className="basis-1/2 max-w-md">
              <h3 className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-gray-700">
                <HiAcademicCap className="h-8 w-8 text-teal-400" />
                Education
              </h3>
              {educations.map((education, index) => (
                <div
                  className="mb-2 text-center rounded-lg bg-neutral-300 p-4 text-sm font-semibold text-gray-900"
                  key={`education-${index}`}
                >
                  {education.name}
                </div>
              ))}
            </div>
            <div className="basis-1/2">
              <h3 className="mb-4 flex justify-center gap-2 text-lg font-bold text-gray-700">
                <HiCode className="h-8 w-8 text-teal-400" />
                Skills
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                {skills.map((skill, index) => (
                  <div
                    className="flex flex-col items-center text-center gap-2"
                    key={`skill-${index}`}
                  >
                    <div className="flex flex-col md:flex-row h-10 w-10 items-center rounded-lg p-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-10 w-10 rounded"
                      />
                    </div>
                    <div className="w-full flex-grow">
                      <h4 className="text-gray-900">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
