import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center">
          © {new Date().getFullYear()} Emmanuel Ose. Built with Next.js &
          Tailwind CSS.
        </p>

        <nav className="flex gap-6" aria-label="Footer navigation">
          <Link href="#about" className="transition hover:text-gray-900">
            About
          </Link>

          <Link href="#skills" className="transition hover:text-gray-900">
            Skills
          </Link>

          <Link href="#projects" className="transition hover:text-gray-900">
            Projects
          </Link>

          <Link href="#contact" className="transition hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

