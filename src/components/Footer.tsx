import Link from "next/link";

const navColumns = [
  {
    title: "Calculators",
    links: [
      { label: "Aluminium Door", href: "/aluminium-door" },
      { label: "2 Track Window", href: "/window-2track" },
      { label: "3 Track Window", href: "/window-3track" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Overview", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-white/10 bg-black/70 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Shiv Hardware Store</p>
            <h3 className="mt-3 font-serif text-3xl">Hardware intelligence for modern projects</h3>
            <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
              Estimating-grade calculators for doors and windows. Built in Ramgarh, serving builders everywhere with precise numbers and
              premium finishes.
            </p>
          </div>

          {navColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{column.title}</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Shiv Hardware Store. All rights reserved.</p>
          <p>Ramgarh Cantonment · Jharkhand 829122 · +91 80928 50954</p>
        </div>
      </div>
    </footer>
  );
}