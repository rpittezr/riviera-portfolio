import imageAbout from "../assets/image-about.jpg";

export function About() {
  return (
    <>
      <section className="container mx-auto my-12 max-w-5xl p-4">
        <div className="relative p-4 text-center">
          <h2 className="flex items-center justify-center gap-x-5">
            <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            <span className=" title">About me</span>
            <div className="w-8 h-1 rounded-full bg-teal-400"></div>
          </h2>
          <p className="text-sm text-gray-600 my-5">
            I have more than XX projects executed and the next one could be
            yours
          </p>
        </div>
        <div className="relative mx-auto mt-8 md:mt-12 max-w-lg">
          <div className="relative w-full rounded-lg bg-neutral-950 shadow-xl p-4 ps-20 md:h-64 md:ps-48">
            <div className="relative h-full w-full rounded-lg text-white bg-neutral-900 p-4">
              <p className="font-handwriting text-lg font-bold">Hi there!</p>
              <p>
                <span className="mr-1">My name is</span>
                <span className="font-bold uppercase text-teal-400">
                  Johnny Doe
                </span>
              </p>

              <table className="mt-4 w-full text-sm">
                <tbody>
                  <tr>
                    <td className="font-headline font-bold text-neutral-500">
                      Age:
                    </td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold text-neutral-500">
                      Phone:
                    </td>
                    <td>
                      <a
                        href="tel:+551299999999"
                        className="underline hover:text-teal-400"
                      >
                        +55 11 9999-9999
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold text-neutral-500">
                      Email:
                    </td>
                    <td>
                      <a
                        href="mailto:johndoe@email.com"
                        className="underline hover:text-teal-400"
                      >
                        johndoe@email.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold text-neutral-500">
                      Address:
                    </td>
                    <td>
                      <a
                        href="https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt"
                        target="_blank"
                        className="underline hover:text-teal-400"
                      >
                        São Paulo - SP
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold text-neutral-500">
                      Available:
                    </td>
                    <td>
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="absolute -left-2 -top-6 h-24 w-20 rounded-lg bg-gray-600 bg-cover bg-center md:-left-4 md:-top-4 md:h-64 md:ps-48"
              style={{ backgroundImage: `url(${imageAbout})` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
