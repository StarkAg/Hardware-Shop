"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16">
        <header className="rounded-3xl border-2 border-white bg-black p-10 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/White Logo.png"
              alt="Shiv Hardware Store Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Shiv Hardware Store
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Complete hardware solutions for modern builders
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Configure custom doors and windows in seconds. Get accurate pricing and quotes for your construction projects in Ramgarh, Jharkhand.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/aluminium-door"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Aluminium Door Calculator
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </header>

        {/* Calculator Links Section */}
        <section className="grid gap-6 md:grid-cols-3">
          <Link
            href="/aluminium-door"
            className="rounded-3xl border-2 border-white bg-black p-8 text-center transition hover:bg-white hover:text-black"
          >
            <h2 className="mb-3 text-2xl font-semibold">Aluminium Door</h2>
            <p className="text-gray-300">
              Calculate pricing for bathroom aluminium doors with chaukhat. Includes all thickness options (1.2 MM, 1.6 MM, 1.2 MM Hindalco) and add-ons like Décor Film and Brown Coated.
            </p>
            <div className="mt-4 text-sm font-medium">View Calculator →</div>
          </Link>
          <Link
            href="/window-2track"
            className="rounded-3xl border-2 border-white bg-black p-8 text-center transition hover:bg-white hover:text-black"
          >
            <h2 className="mb-3 text-2xl font-semibold">2 Track Window</h2>
            <p className="text-gray-300">
              Calculate pricing for 2 track aluminium sliding windows with area-based rates, glass options (Clear & Texture, Reflective), and add-ons.
            </p>
            <div className="mt-4 text-sm font-medium">View Calculator →</div>
          </Link>
          <Link
            href="/window-3track"
            className="rounded-3xl border-2 border-white bg-black p-8 text-center transition hover:bg-white hover:text-black"
          >
            <h2 className="mb-3 text-2xl font-semibold">3 Track Window</h2>
            <p className="text-gray-300">
              Calculate pricing for 3 track aluminium sliding windows with half SS net, area-based rates, and all customization options.
            </p>
            <div className="mt-4 text-sm font-medium">View Calculator →</div>
          </Link>
        </section>

        <section className="rounded-3xl border-2 border-white bg-black p-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Ready for precise numbers?</h2>
          <p className="mt-3 text-gray-300">
            Send us your drawings and we will provide accurate quotes for your door and window requirements within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Contact us
            </Link>
            <a
              href="tel:+918092850954"
              className="rounded-full border-2 border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              +91 80928 50954
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
