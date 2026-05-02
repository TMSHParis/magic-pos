import Link from "next/link";
import { NAV } from "../lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t hairline bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--foreground)] text-[var(--background)] text-[13px] font-bold">M</span>
            <span>Magic</span>
          </Link>
          <p className="mt-4 text-sm text-[var(--muted)] max-w-md">
            Logiciel de caisse certifié NF525 et solution complète de gestion
            de magasin, développée à Marseille par Computer Associés.
          </p>
          <p className="mt-6 text-sm">
            1, Montée de Saint-Menet<br />
            13011 Marseille<br />
            <a href="tel:+33491364333" className="hover:underline">+33 4 91 36 43 33</a>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-[var(--accent)] transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Magic MS — Multi-magasins</li>
            <li>Magic Producteurs</li>
            <li>Magic Tracking</li>
            <li>Magic Zéro Déchet</li>
            <li>Magic Scanoid</li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Computer Associés. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
            <span>Certifié NF525</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
