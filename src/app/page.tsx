"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for logo
    const handleScroll = () => {
      if (logoRef.current) {
        const scrolled = window.scrollY;
        logoRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <main className="relative mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-32">
        {/* Minimalist Header */}
        <Reveal delay={0}>
          <div className="mb-20 md:mb-32">
            <div ref={logoRef} className="mb-12 wave">
              <Image
                src="/White Logo.png"
                alt="Shiv Hardware Store Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] mb-6 tracking-tight">
              Shiv Hardware
              <span className="block mt-2">Store</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Complete hardware solutions for modern builders. Configure custom doors and windows in seconds.
            </p>
          </div>
        </Reveal>

        {/* Calculator Links - Minimalist List Style */}
        <Reveal delay={200}>
          <section className="mb-32">
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-12 font-medium">
              Calculators
            </h2>
            <div className="space-y-1">
              <Link
                href="/aluminium-door"
                data-hover
                className="group block py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif mb-1 link-hover">
                      Aluminium Door
                    </div>
                    <p className="text-sm text-white/50">
                      Calculate pricing for bathroom aluminium doors with chaukhat
                    </p>
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors text-xl">
                    →
                  </span>
                </div>
              </Link>

              <Link
                href="/window-2track"
                data-hover
                className="group block py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif mb-1 link-hover">
                      2 Track Window
                    </div>
                    <p className="text-sm text-white/50">
                      Calculate pricing for 2 track aluminium sliding windows
                    </p>
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors text-xl">
                    →
                  </span>
                </div>
              </Link>

              <Link
                href="/window-3track"
                data-hover
                className="group block py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif mb-1 link-hover">
                      3 Track Window
                    </div>
                    <p className="text-sm text-white/50">
                      Calculate pricing for 3 track aluminium sliding windows with half SS net
                    </p>
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors text-xl">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Contact Section - Minimalist */}
        <Reveal delay={400}>
          <section className="mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-12 font-medium">
              Contact
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-white/50 text-sm mb-2">Phone</p>
                <a
                  href="tel:+918092850954"
                  data-hover
                  className="text-2xl md:text-3xl font-serif link-hover"
                >
                  +91 80928 50954
                </a>
              </div>
              <div>
                <p className="text-white/50 text-sm mb-2">Location</p>
                <p className="text-lg text-white/80">
                  Ground floor, Shivaji Road,<br />
                  Ramgarh Cantonment, Jharkhand 829122
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/contact"
                  data-hover
                  className="inline-block text-lg link-hover"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Footer */}
        <Reveal delay={600}>
          <footer className="pt-20 border-t border-white/5">
            <p className="text-sm text-white/30">
              © 2025 Shiv Hardware Store. Ramgarh, Jharkhand.
            </p>
          </footer>
        </Reveal>
      </main>
    </div>
  );
}
