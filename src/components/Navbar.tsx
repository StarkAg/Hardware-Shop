"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "#calculators" },
  { label: "Aluminium Door", href: "/aluminium-door" },
  { label: "2 Track Window", href: "/window-2track" },
  { label: "3 Track Window", href: "/window-3track" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 px-6 py-3 transition-all duration-500 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/30" : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white">
          <Image src="/favicon.png" alt="Shiv Hardware Store mark" width={36} height={36} className="rounded-full" />
          Shiv Hardware Store
        </Link>

        <div className="hidden items-center gap-4 text-sm text-white/80 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white"
              prefetch
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-white/40 bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/40 px-3 py-2 text-sm text-white transition md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/80 p-4 text-white md:hidden">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
              <span className="block rounded-full px-4 py-2 text-sm transition hover:bg-white/10">{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

