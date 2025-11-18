"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setStatus(`Thanks ${name || "there"}, our estimating desk will reply within one business day.`);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-slate-800/60 bg-slate-950/60 p-10 shadow-2xl shadow-black/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Connect with Inreo estimating</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Share your door and window schedules, and we will push them through the Inreo engine for exact labor + material numbers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
            <h2 className="text-xl font-semibold text-white">Direct lines</h2>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <a className="text-lg text-white" href="tel:+11234567890">
                +1 (123) 456 7890
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a className="text-lg text-white" href="mailto:estimating@inreo.build">
                estimating@inreo.build
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-400">Showroom</p>
              <p className="text-lg text-white">58 Madison Street, Suite 204, Brooklyn NY</p>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Hours</p>
              <p>Mon–Fri · 7:00a – 6:00p EST</p>
              <p>Saturday by appointment</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
            >
              ← Back to calculators
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-slate-950/40 p-6">
            <div>
              <label className="text-sm text-slate-400" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400" htmlFor="project">
                Project link or notes
              </label>
              <textarea
                id="project"
                name="project"
                rows={5}
                placeholder="Dropbox, Procore, or quick scope notes..."
                className="mt-1 w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              Request a callback
            </button>
            {status && <p className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
