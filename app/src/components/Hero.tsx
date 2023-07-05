import { HiDownload } from "react-icons/hi";
import imageHero from "../assets/image-hero.png";

export function Hero() {
  return (
    <>
      <section className="bg-gradient-to-tr from-black to-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl px-2 py-12 flex items-center flex-col md:flex-row">
          <div className="basis-1/2  text-center md:text-left">
            <h1 className="mb-6">
              <span className="font-handwriting block text-2xl">
                Hi! My name is
              </span>
              <span className="font-sans text-5xl">Johnny </span>
              <span className="font-sans text-5xl text-teal-400">Doe</span>
            </h1>
            <h2 className="font-light flex items-center justify-center md:justify-start gap-x-5">
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
              Fullstack Developer | React.js | Typescript | Node.js
            </h2>

            <p className="font-light text-gray-400 my-6">
              Crafting Seamless Experiences: Empowering Web Solutions as a Full
              Stack Developer.Unleashing the Power of Frontend and Backend
              Technologies for Innovative Web Development
            </p>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="#" className="text-white link">
                Contact me!
              </a>
              <a
                href="#"
                className="button text-teal-400 hover:text-teal-300 flex items-center gap-2"
              >
                <HiDownload />
                Download resume
              </a>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={imageHero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
