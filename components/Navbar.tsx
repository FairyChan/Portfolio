"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#f7f5f0]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-editorial text-2xl font-semibold tracking-wide"
        >
          AS.
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#d9d5cd] bg-[#f7f5f0] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}