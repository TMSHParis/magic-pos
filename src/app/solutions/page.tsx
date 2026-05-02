import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const solutions = [
  {
    name: "Magic Retail",
    desc: "La solution de référence pour les boutiques mono ou multi-magasins. Encaissement, stocks, fidélité, BI.",
    img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Magic Bio & Épicerie",
    desc: "Pensé pour les épiceries et magasins bio : vrac, étiquetage, zéro déchet et traçabilité native.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Magic MS — Multi-magasins",
    desc: "Module multi-site pour la gestion de chaînes : base produit centralisée ou décentralisée et carte de fidélité CLOUD.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Magic Producteurs",
    desc: "Plateforme internet pour les producteurs BIO. Suivi des ventes, des stocks et facturation en temps réel.",
    img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Magic Tracking",
    desc: "Application clé en main de suivi des traçabilités, avec interface intuitive et surveillance des températures.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Magic Scanoid",
    desc: "Une seule application pour tout simplifier : caisse mobile et gestion magasin mobile.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
  },
];

export const metadata = { title: "Solutions point de vente" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Une solution pour chaque commerce.</>}
        subtitle="De la boutique de quartier à la chaîne nationale, Magic s'adapte à votre métier."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.05}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
