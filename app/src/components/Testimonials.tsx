import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
  return (
    <>
      <section className="container mx-auto my-12 max-w-5xl p-4">
        <div className="relative p-4 text-center">
          <h2 className="flex items-center justify-center gap-x-5">
            <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            <span className=" title">Testimonials</span>
            <div className="w-8 h-1 rounded-full bg-teal-400"></div>
          </h2>
          <p className="text-sm text-gray-600 my-5">
            See what they think about my work
          </p>
        </div>
        <figure>
          <FaQuoteLeft className="h-8 w-8 text-teal-200" />
          <blockquote className="mb-6">
            <p className="text-gray-900 md:text-center">
              I am absolutely thrilled with the exceptional work delivered by
              the talented team behind our web project. From start to finish,
              they demonstrated an impressive level of professionalism,
              expertise, and attention to detail. They took our vision and
              transformed it into a stunning, user-friendly website that far
              exceeded our expectations.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center gap-2">
            <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhciUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60"
              alt="João da Silva"
            />
            <div className="flex items-center divide-x-2 divide-gray-200">
              <div className="pr-3 font-medium text-gray-900">Dean Doe</div>
              <div className="pl-3 text-sm font-light text-gray-500">
                Company.com
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
