"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-32 pt-20">
        {/* Hero Section */}
        <header className="relative rounded-[2rem] border border-white/20 bg-gradient-to-br from-black via-black to-[#0a0a0a] p-12 md:p-16 text-center backdrop-blur-sm shadow-2xl shadow-black/50">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
                <Image
                  src="/White Logo.png"
                  alt="Shiv Hardware Store Logo"
                  width={220}
                  height={220}
                  className="relative object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80 mb-2">
              Shiv Hardware Store
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              Complete Hardware Solutions
              <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-normal">for Modern Builders</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              Configure custom doors and windows in seconds. Get accurate pricing and quotes for your construction projects in Ramgarh, Jharkhand.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/aluminium-door"
                className="group relative rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">Aluminium Door Calculator</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/contact"
                className="group rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
              >
                Contact us
              </Link>
            </div>
          </div>
        </header>

        {/* Calculator Cards Section */}
        <section className="grid gap-8 md:grid-cols-3">
          <Link
            href="/aluminium-door"
            className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-black via-[#0a0a0a] to-black p-8 text-center transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="mb-4 text-4xl">🚪</div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white">Aluminium Door</h2>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Calculate pricing for bathroom aluminium doors with chaukhat. Includes all thickness options and premium add-ons.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                View Calculator
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
          
          <Link
            href="/window-2track"
            className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-black via-[#0a0a0a] to-black p-8 text-center transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="mb-4 text-4xl">🪟</div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white">2 Track Window</h2>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Calculate pricing for 2 track aluminium sliding windows with area-based rates and premium glass options.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                View Calculator
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
          
          <Link
            href="/window-3track"
            className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-black via-[#0a0a0a] to-black p-8 text-center transition-all duration-500 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="mb-4 text-4xl">🏠</div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-white">3 Track Window</h2>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Calculate pricing for 3 track aluminium sliding windows with half SS net and all customization options.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                View Calculator
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Contact Section */}
        <section className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-black via-[#0a0a0a] to-black p-12 md:p-16 text-center backdrop-blur-sm shadow-2xl shadow-black/50">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Contact</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Precise Numbers?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed">
              Send us your drawings and we will provide accurate quotes for your door and window requirements within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <a
                href="tel:+918092850954"
                className="group rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
              >
                +91 80928 50954
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
