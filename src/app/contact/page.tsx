"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setStatus(`Thanks ${name || "there"}, we will reply within one business day.`);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border-2 border-white bg-black p-10">
        <div>
          <div className="mb-6 flex justify-center">
            <Image
              src="/White Logo.png"
              alt="Shiv Hardware Store Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Connect with Shiv Hardware Store</h1>
          <p className="mt-3 max-w-2xl text-base text-gray-300">
            Share your door and window requirements, and we will provide accurate quotes for your construction projects in Ramgarh, Jharkhand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border-2 border-white bg-black p-6">
            <h2 className="text-xl font-semibold text-white">Contact Information</h2>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a className="text-lg text-white" href="tel:+918092850954">
                +91 80928 50954
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-lg text-white">
                Ground floor, Shivaji Road,<br />
                Ramgarh Cantonment,<br />
                Jharkhand 829122
              </p>
            </div>
            <div className="rounded-xl border border-white bg-black p-4 text-sm text-gray-300">
              <p className="font-medium text-white">Business Hours</p>
              <p>Mon–Sat · 9:00 AM – 7:00 PM IST</p>
              <p>Sunday by appointment</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              ← Back to calculators
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border-2 border-white bg-black p-6">
            <div>
              <label className="text-sm text-gray-400" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border-2 border-white bg-black px-4 py-3 text-base text-white outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border-2 border-white bg-black px-4 py-3 text-base text-white outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border-2 border-white bg-black px-4 py-3 text-base text-white outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400" htmlFor="project">
                Project details or requirements
              </label>
              <textarea
                id="project"
                name="project"
                rows={5}
                placeholder="Describe your door/window requirements, dimensions, or any specific needs..."
                className="mt-1 w-full rounded-2xl border-2 border-white bg-black px-4 py-3 text-base text-white outline-none focus:border-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Request a quote
            </button>
            {status && <p className="rounded-xl border border-white bg-black px-4 py-3 text-sm text-white">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
