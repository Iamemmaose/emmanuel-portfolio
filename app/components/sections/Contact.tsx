import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-blue-600">Get In Touch</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let’s Work Together
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            I’m open to remote frontend development roles, freelance project
            collaborations, and full-stack web projects. Feel free to reach out!
          </p>
        </div>

        {/* Contact Links & Action Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email Card */}
          <a
            href="mailto:iamemmaose@gmail.com"
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
          >
            <MdEmail className="h-8 w-8 text-blue-600" />

            <h3 className="mt-4 text-base font-bold text-gray-900">
              Email
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Send an Email
            </p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Iamemmaose"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
          >
            <FaGithub className="h-8 w-8 text-gray-900" />

            <h3 className="mt-4 text-base font-bold text-gray-900">
              GitHub
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Check out my repositories
            </p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/emma-ose-43ab84385"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md sm:col-span-2 lg:col-span-1"
          >
            <FaLinkedin className="h-8 w-8 text-blue-700" />

            <h3 className="mt-4 text-base font-bold text-gray-900">
              LinkedIn
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Connect professionally
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

