import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_email",
        form.current,
        "your_form_address"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };

  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 11 99999-9999",
      link: "https://wa.me/5512982041640?text=Hi...",
      icon: <FaWhatsapp className="h-10 w-10 text-teal-400" />,
    },
    {
      name: "Email",
      description: "johndoe@email.com",
      link: "mailto:johndoe@email.com?subject=Hi...",
      icon: <HiOutlineEnvelope className="h-10 w-10 text-teal-400" />,
    },
    {
      name: "São Paulo",
      description: "Centro, 123",
      link: "https://goo.gl/maps/B81vuCVwDgwFnxxS7",
      icon: <HiOutlineMapPin className="h-10 w-10 text-teal-400" />,
    },
  ];
  return (
    <>
      <div className="absolute left-0 -mt-[4px] h-2 w-48 rounded-r-full bg-gradient-to-l from-teal-400 to-teal-600 md:w-96" />
      <section className="bg-gradient-to-tr from-black to-neutral-950">
        <div className="container mx-auto py-12 max-w-5xl p-4">
          <div className="relative p-4 text-center mt-4 mb-12">
            <h2 className="flex items-center justify-center gap-x-5">
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
              <span className="title text-gray-100">Contacts</span>
              <div className="w-8 h-1 rounded-full bg-teal-400"></div>
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:flex-row text-gray-100">
            <div className="basis-3/4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4 flex flex-col gap-4 md:flex-row">
                  <div className="flex-grow">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block ps-4 font-semibold text-teal-400"
                    >
                      Name:
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-2 outline-none"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="email"
                      className="mb-2 block ps-4 font-semibold text-teal-400"
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-2 outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block ps-4 font-semibold text-teal-400"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="h-32 w-full rounded-lg border border-neutral-800 bg-neutral-950 outline-none"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="button flex items-center gap-2 text-teal-400"
                    disabled={loading}
                  >
                    {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                    {success && <HiCheckCircle className="h-4 w-4" />}
                    Send message
                  </button>

                  {error && (
                    <p className="mt-2">
                      There was an error sending the message, please try again
                      later.
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className="basis-1/4 md:mt-8">
              {contacts.map((contact, index) => (
                <div
                  className="mb-4 flex items-center gap-4 rounded-lg bg-neutral-950 p-2"
                  key={`contact-${index}`}
                >
                  {contact.icon}
                  <div>
                    <p className="font-semibold">{contact.name}</p>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="text-gray-300 link underline underline-offset-2 font-light"
                    >
                      {contact.description}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[4px] h-2 w-48 rounded-l-full bg-gradient-to-r from-teal-400 to-teal-600 md:w-96" />
    </>
  );
}
