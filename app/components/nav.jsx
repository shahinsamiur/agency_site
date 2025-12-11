"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90  lg:bg-linear-to-l from-secondary/10 to-background ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-secondary text-xl font-semibold">Stygar</span>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-secondary"
                    : "hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>

              {pathname === item.href && (
                <span className="absolute left-0 -bottom-1 block w-full h-0.5 bg-secondary"></span>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:block bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary transition"
        >
          Get in Touch
        </Link>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <div
        className={`md:hidden bg-background/90
        transition-all duration-300 overflow-hidden
        ${open ? " py-4" : "max-h-0 py-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-300">
          {navItems.map((item) => (
            <li key={item.href} onClick={() => setOpen(false)}>
              <Link
                href={item.href}
                className={`text-lg transition ${
                  pathname === item.href
                    ? "text-secondary"
                    : "hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-secondary transition"
          >
            Get in Touch
          </Link>
        </ul>
      </div>
    </header>
  );
}
