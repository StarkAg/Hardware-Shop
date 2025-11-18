"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const DOOR_MATERIALS = {
  timber: { label: "Premium Timber", costPerSqM: 310, insulation: "0.7 W/m²K" },
  steel: { label: "Powder-Coated Steel", costPerSqM: 265, insulation: "1.5 W/m²K" },
  fiberglass: { label: "Composite Fiberglass", costPerSqM: 340, insulation: "0.6 W/m²K" },
};

const ALUMINIUM_GRADES = {
  residential: { label: "Residential 1.8mm", base: 280 },
  commercial: { label: "Commercial 2.2mm", base: 360 },
  heavy: { label: "Heavy-Duty 2.8mm", base: 430 },
};

const FINISH_MULTIPLIERS = {
  matte: { label: "Matte Anodized", multiplier: 1 },
  polished: { label: "Polished Anodized", multiplier: 1.15 },
  timber: { label: "Timber-Grain Wrap", multiplier: 1.25 },
};

const WINDOW_GLAZING = {
  single: { label: "Single (6mm)", glassCost: 110 },
  double: { label: "Double Low-E (12mm)", glassCost: 185 },
  acoustic: { label: "Acoustic Laminate (10.5mm)", glassCost: 235 },
};

export default function Home() {
  const [door, setDoor] = useState({
    width: 0.96,
    height: 2.1,
    material: "timber",
  });

  const [aluminium, setAluminium] = useState({
    width: 1.2,
    height: 2.4,
    grade: "residential",
    finish: "matte",
    hardware: true,
    sidelights: false,
  });

  const [windowCalc, setWindowCalc] = useState({
    width: 1.5,
    height: 1.2,
    panels: 3,
    glazing: "double",
  });

  const doorSummary = useMemo(() => {
    const area = +(door.width * door.height).toFixed(2);
    const costPerSqM = DOOR_MATERIALS[door.material as keyof typeof DOOR_MATERIALS].costPerSqM;
    const leafCost = +(area * costPerSqM).toFixed(0);
    const hardware = 185;
    const install = 220;
    return {
      area,
      leafCost,
      total: leafCost + hardware + install,
      insulation: DOOR_MATERIALS[door.material as keyof typeof DOOR_MATERIALS].insulation,
    };
  }, [door]);

  const aluminiumSummary = useMemo(() => {
    const area = +(aluminium.width * aluminium.height).toFixed(2);
    const perimeter = +((aluminium.width * 2 + aluminium.height * 2).toFixed(2));
    const base = ALUMINIUM_GRADES[aluminium.grade as keyof typeof ALUMINIUM_GRADES].base;
    const finishMultiplier = FINISH_MULTIPLIERS[aluminium.finish as keyof typeof FINISH_MULTIPLIERS].multiplier;
    const hardware = aluminium.hardware ? 260 : 0;
    const sidelights = aluminium.sidelights ? 320 : 0;
    const fabrication = +(area * base * finishMultiplier).toFixed(0);
    const glazing = +(area * 145).toFixed(0);
    return {
      area,
      perimeter,
      fabrication,
      total: fabrication + glazing + hardware + sidelights,
      hardware,
      sidelights,
      glazing,
    };
  }, [aluminium]);

  const windowSummary = useMemo(() => {
    const area = +(windowCalc.width * windowCalc.height).toFixed(2);
    const glass = WINDOW_GLAZING[windowCalc.glazing as keyof typeof WINDOW_GLAZING];
    const glassCost = +(area * glass.glassCost).toFixed(0);
    const mullions = Math.max(windowCalc.panels - 1, 0);
    const frameCost = +((windowCalc.width * 2 + windowCalc.height * 2) * 95).toFixed(0);
    const mullionCost = +(mullions * windowCalc.height * 75).toFixed(0);
    return {
      area,
      glassCost,
      frameCost,
      mullionCost,
      total: glassCost + frameCost + mullionCost,
    };
  }, [windowCalc]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16">
        <header className="rounded-3xl bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)] p-10 text-center shadow-2xl shadow-slate-950/30">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">
            Inreo Hardware Collective
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Complete hardware pricing intelligence for modern builders
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Configure custom doors and windows in seconds. Inreo blends supplier pricing with on-site data so you can quote confidently and keep every project on schedule.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#door-calculator"
              className="rounded-full bg-sky-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              Start with door sizing
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
            >
              Talk with estimating
            </Link>
          </div>
        </header>

        <section
          id="door-calculator"
          className="grid gap-8 rounded-3xl bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/20 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Entry doors</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Door leaf calculator</h2>
            <p className="mt-2 text-slate-300">
              Capture openings, pick materials, and immediately see the labor-ready cost stack for any custom door.
            </p>
            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm text-slate-400">Width (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.6"
                  value={door.width}
                  onChange={(event) => setDoor((prev) => ({ ...prev, width: Number(event.target.value) }))}
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-400">Height (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="1.8"
                  value={door.height}
                  onChange={(event) => setDoor((prev) => ({ ...prev, height: Number(event.target.value) }))}
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-400">Leaf material</span>
                <select
                  value={door.material}
                  onChange={(event) => setDoor((prev) => ({ ...prev, material: event.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                >
                  {Object.entries(DOOR_MATERIALS).map(([key, material]) => (
                    <option key={key} value={key}>
                      {material.label}
                    </option>
                  ))}
                </select>
              </label>
            </form>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Cost stack</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Projected: ${doorSummary.total}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center justify-between">
                <span>Leaf area</span>
                <span>{doorSummary.area} m²</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Leaf fabrication</span>
                <span>${doorSummary.leafCost}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Premium hardware kit</span>
                <span>$185</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Install & sealing</span>
                <span>$220</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-slate-900/80 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Performance</p>
              <p className="text-slate-400">Thermal rating {doorSummary.insulation}</p>
              <p className="text-slate-500">Lead time 12 business days</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800/70 bg-slate-950/40 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Aluminium systems</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Designer aluminium door</h2>
            <p className="mt-2 text-slate-300">
              Mix grades, anodized finishes, and glass packages to keep every lobby compliant without overspending.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-300">
              <label className="space-y-1">
                <span>Width (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.8"
                  value={aluminium.width}
                  onChange={(event) => setAluminium((prev) => ({ ...prev, width: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="space-y-1">
                <span>Height (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="2"
                  value={aluminium.height}
                  onChange={(event) => setAluminium((prev) => ({ ...prev, height: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="space-y-1">
                <span>Frame grade</span>
                <select
                  value={aluminium.grade}
                  onChange={(event) => setAluminium((prev) => ({ ...prev, grade: event.target.value }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                >
                  {Object.entries(ALUMINIUM_GRADES).map(([key, grade]) => (
                    <option key={key} value={key}>
                      {grade.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-1">
                <span>Finish</span>
                <select
                  value={aluminium.finish}
                  onChange={(event) => setAluminium((prev) => ({ ...prev, finish: event.target.value }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                >
                  {Object.entries(FINISH_MULTIPLIERS).map(([key, finish]) => (
                    <option key={key} value={key}>
                      {finish.label}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex flex-wrap gap-4 pt-2">
                <label className="inline-flex items-center gap-2 text-slate-200">
                  <input
                    type="checkbox"
                    checked={aluminium.hardware}
                    onChange={(event) => setAluminium((prev) => ({ ...prev, hardware: event.target.checked }))}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900/60 text-sky-400 focus:ring-sky-400"
                  />
                  Premium panic hardware
                </label>
                <label className="inline-flex items-center gap-2 text-slate-200">
                  <input
                    type="checkbox"
                    checked={aluminium.sidelights}
                    onChange={(event) => setAluminium((prev) => ({ ...prev, sidelights: event.target.checked }))}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900/60 text-sky-400 focus:ring-sky-400"
                  />
                  Fluted sidelights
                </label>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-6 shadow-inner shadow-black/40">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Build sheet</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Turnkey: ${aluminiumSummary.total}</h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <dt>Fabrication (frame + leaf)</dt>
                <dd>${aluminiumSummary.fabrication}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Low-E glazing</dt>
                <dd>${aluminiumSummary.glazing}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Perimeter</dt>
                <dd>{aluminiumSummary.perimeter} m</dd>
              </div>
              {aluminiumSummary.hardware > 0 && (
                <div className="flex items-center justify-between">
                  <dt>Panic hardware suite</dt>
                  <dd>${aluminiumSummary.hardware}</dd>
                </div>
              )}
              {aluminiumSummary.sidelights > 0 && (
                <div className="flex items-center justify-between">
                  <dt>Sidelights package</dt>
                  <dd>${aluminiumSummary.sidelights}</dd>
                </div>
              )}
            </dl>
            <div className="mt-6 rounded-xl border border-slate-700 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Compliance snapshot</p>
              <p>Wind load certified to N4 | BAL-19 ready | Acoustic Rw 32</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-slate-950/60 p-8 shadow-inner shadow-slate-950/30 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Windows</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Multi-panel window calculator</h2>
            <p className="mt-2 text-slate-300">
              Estimate any punched window opening with glass packages and mullion requirements built in.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-300">
              <label className="space-y-1">
                <span>Width (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.6"
                  value={windowCalc.width}
                  onChange={(event) => setWindowCalc((prev) => ({ ...prev, width: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="space-y-1">
                <span>Height (m)</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.6"
                  value={windowCalc.height}
                  onChange={(event) => setWindowCalc((prev) => ({ ...prev, height: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="space-y-1">
                <span>Panels</span>
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={windowCalc.panels}
                  onChange={(event) => setWindowCalc((prev) => ({ ...prev, panels: Number(event.target.value) }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                />
              </label>
              <label className="space-y-1">
                <span>Glazing</span>
                <select
                  value={windowCalc.glazing}
                  onChange={(event) => setWindowCalc((prev) => ({ ...prev, glazing: event.target.value }))}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-base text-white outline-none focus:border-sky-400"
                >
                  {Object.entries(WINDOW_GLAZING).map(([key, glazing]) => (
                    <option key={key} value={key}>
                      {glazing.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quantity take-off</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Budget: ${windowSummary.total}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center justify-between">
                <span>Opening area</span>
                <span>{windowSummary.area} m²</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Glass package</span>
                <span>${windowSummary.glassCost}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Framing</span>
                <span>${windowSummary.frameCost}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Mullions ({Math.max(windowCalc.panels - 1, 0)})</span>
                <span>${windowSummary.mullionCost}</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Delivery</p>
              <p>4-week fabrication window | Nationwide freight capped at $420</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-slate-950/30 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Ready for precise numbers?</h2>
          <p className="mt-3 text-slate-300">
            Send us your drawings and we will push them through the Inreo estimating engine for a project-grade take-off within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 shadow-lg shadow-white/20 transition hover:-translate-y-0.5"
            >
              Contact us
            </Link>
            <a
              href="mailto:estimating@inreo.build"
              className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
            >
              estimating@inreo.build
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
