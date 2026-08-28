const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-600">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Emma Ose. Built with Next.js & Tailwind CSS.</p>
        <div className="flex gap-6">
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;