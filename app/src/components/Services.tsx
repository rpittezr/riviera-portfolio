import { HiDesktopComputer, HiCode, HiDeviceMobile } from "react-icons/hi";

export function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Development of static and dynamic websites and web systems with React.js, Next.js, HTML5 and CSS3",
      icon: <HiDesktopComputer className="h-12 w-12" />,
    },
    {
      title: "Systems",
      description: "Development of systems and REST APIs with Node.js",
      icon: <HiCode className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description: "Android and iOS Application Development",
      icon: <HiDeviceMobile className="h-12 w-12" />,
    },
  ];
  return (
    <>
      <section className="bg-neutral-200">
        <div className="container mx-auto py-12 max-w-5xl p-4">
          <div className="p-4 text-center">
            <h2 className="flex items-center justify-center gap-x-5">
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
              <span className=" title">Services</span>
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            </h2>
            <p className="text-sm text-gray-600 my-5">What I do best</p>
          </div>
          <div className="mt-2 flex flex-col gap-2 md:flex-row">
            {services.map((service, index) => (
              <div
                className="flex flex-col items-center text-center basis-1/3 rounded-lg bg-neutral-950 p-4 text-white"
                key={`service-${index}`}
              >
                <div className="mb-2 bg-neutral-900 rounded-full w-16 p-2">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-400">
                  {service.title}
                </h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
