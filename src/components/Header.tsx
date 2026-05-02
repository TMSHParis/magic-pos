"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV } from "../lib/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "nav-glass" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--foreground)] text-[var(--background)] text-[13px] font-bold">M</span>
          <span>Magic</span>
          <span className="hidden sm:inline text-[var(--muted)] font-normal">· Computer Associés</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            aria-label={dark ? "Passer en mode jour" : "Passer en mode nuit"}
            onClick={toggleTheme}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border hairline hover:bg-[var(--surface)] transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/contact" className="btn-primary text-[13px] px-4 py-2">
            Demande de démo
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <button
            type="button"
            aria-label={dark ? "Passer en mode jour" : "Passer en mode nuit"}
            onClick={toggleTheme}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Ouvrir le menu"
            className="p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden nav-glass border-t hairline">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary justify-center mt-2"
              onClick={() => setOpen(false)}
            >
              Demande de démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
