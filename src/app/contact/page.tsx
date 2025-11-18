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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex max-w-5xl flex-col gap-12 rounded-2xl border border-white/20 bg-gradient-to-br from-black/50 via-[#0a0a0a]/50 to-black/50 p-12 backdrop-blur-sm shadow-2xl">
          <div>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
                <Image
                  src="/White Logo.png"
                  alt="Shiv Hardware Store Logo"
                  width={150}
                  height={150}
                  className="relative object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80 mb-4">Contact</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Connect with Shiv Hardware Store</h1>
            <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
              Share your door and window requirements, and we will provide accurate quotes for your construction projects in Ramgarh, Jharkhand.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-2xl border border-white/20 bg-gradient-to-br from-black/30 via-[#0a0a0a]/30 to-black/30 p-8 backdrop-blur-sm">
              <h2 className="font-serif text-2xl font-bold text-white">Contact Information</h2>
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
              <div className="rounded-xl border border-white/20 bg-white/5 p-5 text-sm text-gray-300 backdrop-blur-sm">
                <p className="font-semibold text-white mb-2">Business Hours</p>
                <p>Mon–Sat · 9:00 AM – 7:00 PM IST</p>
                <p>Sunday by appointment</p>
              </div>
              <Link
                href="/"
                className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  ← Back to calculators
                </span>
              </Link>
            </div>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/20 bg-gradient-to-br from-black/30 via-[#0a0a0a]/30 to-black/30 p-8 backdrop-blur-sm">
            <div>
              <label className="text-sm text-gray-400" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white backdrop-blur-sm transition-all focus:border-white/40 focus:bg-white/10 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white backdrop-blur-sm transition-all focus:border-white/40 focus:bg-white/10 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white backdrop-blur-sm transition-all focus:border-white/40 focus:bg-white/10 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="project">
                Project details or requirements
              </label>
              <textarea
                id="project"
                name="project"
                rows={5}
                placeholder="Describe your door/window requirements, dimensions, or any specific needs..."
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white backdrop-blur-sm transition-all focus:border-white/40 focus:bg-white/10 focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Request a quote</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            {status && <p className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white backdrop-blur-sm">{status}</p>}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
