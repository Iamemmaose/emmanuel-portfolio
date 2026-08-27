"use client"

import Link from "next/link";
import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Skills", href: "#skills" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Experience", href: "#experience" },
  { id: 6, label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/90 px-6 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between"
      >
        <Link
          href="#home"
          className="text-lg font-bold tracking-tight text-gray-900"
        >
          Emmanuel Ose
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-900 border border-gray-200 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose /> : <CiMenuFries /> }
        </button>
      </nav>

       {isMenuOpen && (
          <div className="absolute top-16 right-0 w-56 rounded-lg border border-gray-200 bg-white/95 p-4 shadow-lg md:hidden backdrop-blur">
            <ul className="mx-auto flex max-w-6xl flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-medium text-gray-700 transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </header>
  );
};

export default NavBar;