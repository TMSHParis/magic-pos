import { Monitor, Scale, Printer, Package, Smartphone } from "lucide-react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const items = [
  { icon: Monitor, t: "Matériels d'encaissement", d: "TPV, écrans tactiles, terminaux dédiés." },
  { icon: Smartphone, t: "TPV & écrans tactiles", d: "Configurations performantes, fiables, ergonomiques." },
  { icon: Scale, t: "Balances", d: "Balances de caisse, service arrière, libre-service." },
  { icon: Printer, t: "Imprimantes", d: "Tickets, étiquettes papier et étiquettes électroniques." },
  { icon: Package, t: "Mobilier", d: "Mobilier de caisse pensé pour vos points de vente." },
];

export const metadata = { title: "Matériels" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Matériels"
        title={<>Tout l&apos;équipement de votre point de vente.</>}
        subtitle="Computer Associés sélectionne, intègre et installe le matériel parfaitement adapté à votre logiciel Magic."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 6) * 0.04}>
              <div className="card p-7 h-full">
                <Icon size={24} className="text-[var(--accent)]" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
