import { HiArrowSmRight } from "react-icons/hi";

export function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Project 2",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Project 3",
      description: "Project description here",
      image:
        "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Project 4",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Project 5",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Project 6",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Project 7",
      description: "Project description here",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
  ];
  return (
    <>
      <div className="absolute left-0 -mt-[4px] h-2 w-48 rounded-r-full bg-gradient-to-l from-teal-400 to-teal-600 md:w-96" />
      <section className="bg-gradient-to-tr from-black to-neutral-950">
        <div className="container mx-auto py-12 max-w-5xl p-4">
          <div className="relative p-4 text-center">
            <h2 className="flex items-center justify-center gap-x-5">
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
              <span className="title text-gray-100">Projects</span>
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            </h2>
            <p className="text-sm text-gray-600 my-6">
              Some personal projects and others I did for reputable companies in
              the market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <div
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                key={`project-${index}`}
                style={{ backgroundImage: `url("${project.image}")` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-teal-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowSmRight className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="absolute right-0 -mt-[4px] h-2 w-48 rounded-l-full bg-gradient-to-r from-teal-400 to-teal-600 md:w-96" />
    </>
  );
}
