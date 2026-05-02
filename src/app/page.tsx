import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Boxes,
  Tags,
  Scale,
  Store,
  Cloud,
  Sparkles,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mesh" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-32 text-center">
          <Reveal>
            <p className="eyebrow">Computer Associés · Marseille</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display mt-6 text-5xl sm:text-7xl md:text-8xl">
              Logiciel de caisse.
              <br />
              <span className="bg-gradient-to-r from-[#0071e3] via-[#5e5ce6] to-[#af52de] bg-clip-text text-transparent">
                Pensé pour votre magasin.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Magic est la solution complète d&apos;encaissement et de gestion
              de magasin, certifiée NF525 par l&apos;AFNOR et développée 100 %
              en France.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Demander une démo <ArrowRight size={16} />
              </Link>
              <Link href="/fonctionnalites" className="btn-secondary">
                Découvrir les fonctionnalités
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-20 mx-auto max-w-5xl">
              <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden border hairline shadow-[0_60px_120px_-40px_rgba(0,0,0,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=2000&q=80"
                  alt="Magasin moderne équipé de Magic"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="border-y hairline bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "NF525", l: "Certifié AFNOR" },
            { v: "100 %", l: "Développé en France" },
            { v: "∞", l: "Caisses par magasin" },
            { v: "30+ ans", l: "D'expertise retail" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <p className="display text-4xl md:text-5xl">{s.v}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY MAGIC */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-center">Pourquoi Magic</p>
            <h2 className="display mt-4 text-center text-4xl md:text-6xl">
              Pourquoi choisir Magic comme logiciel
              <br />
              de caisse et de gestion de votre commerce&nbsp;?
            </h2>
            <p className="mt-6 text-center text-lg text-[var(--muted)] max-w-3xl mx-auto">
              Une solution multi-magasins, adaptable à vos besoins, conçue par
              une équipe qui maîtrise totalement le développement de ses
              logiciels.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Certifié NF525",
                body: "MAGIC est certifié NF-525 par l'AFNOR. Une caisse conforme, sécurisée et inviolable.",
              },
              {
                icon: Store,
                title: "Aucune limite",
                body: "Aucune limite du nombre de caisses par magasin, mono ou multi-sites.",
              },
              {
                icon: Sparkles,
                title: "Adaptable",
                body: "Développement 100 % français : nous adaptons le logiciel à vos besoins, rapidement.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="card p-8 h-full">
                  <Icon size={28} className="text-[var(--accent)]" />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="section bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow">Back-office</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Toute votre activité, parfaitement orchestrée.
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)]">
              Gestion avancée des produits, des stocks, des
              approvisionnements et des ventes — avec statistiques complètes
              et exports adaptés au retail. Mono ou multi-magasins, balances
              connectées, modules e-commerce.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Création rapide des articles, mise à jour automatisée des tarifs",
                "Calcul de prix sécurisé, relevés concurrence, multifournisseurs",
                "Gestion complète du stock et des inventaires",
                "Connecteurs Shopify, Prestashop, WooCommerce, Oxatis",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px]">
                  <CheckCircle2 size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border hairline">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
                alt="Tableau de bord retail"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-24 grid gap-16 md:grid-cols-2 items-center">
          <Reveal delay={0.1} className="md:order-2">
            <p className="eyebrow">Caisse certifiée</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Encaissement sans friction.
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)]">
              Écran paramétrable, multi-règlements, connexion TPE standards,
              gestion des retours et de la fidélité. Une caisse pensée pour
              la vitesse, la conformité et l&apos;ergonomie.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Multi-règlement et connexion TPE standards",
                "Gestion des retours et programmes de fidélité",
                "Pesée assistée, balance arrière et libre-service",
                "Étiquetage papier et électronique (SES, Hanshow)",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px]">
                  <CheckCircle2 size={20} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="md:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border hairline">
              <Image
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80"
                alt="Caisse Magic en magasin"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO USES MAGIC */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-center">Qui utilise Magic ?</p>
            <h2 className="display mt-4 text-center text-4xl md:text-6xl">
              Pensé pour tous les commerces.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Store, t: "Retail & boutiques", d: "Mode, librairie, déco, sport." },
              { icon: Boxes, t: "Épiceries bio", d: "Vrac, traçabilité, zéro déchet." },
              { icon: Scale, t: "Métiers de bouche", d: "Boulangerie, primeur, fromager." },
              { icon: Tags, t: "Chaînes & franchises", d: "Multi-magasins, centralisé." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="card p-6 h-full">
                  <Icon size={22} className="text-[var(--accent)]" />
                  <h3 className="mt-4 font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SOLUTIONS */}
      <section className="section bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-center">Solutions additionnelles</p>
            <h2 className="display mt-4 text-center text-4xl md:text-5xl">
              Des modules pour aller plus loin.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Magic Producteurs",
                d: "Plateforme internet pour les producteurs BIO. Suivi des ventes, stocks et facturation en temps réel.",
              },
              {
                t: "Magic Tracking",
                d: "Application clé en main de suivi des traçabilités. Interface intuitive et surveillance des températures.",
              },
              {
                t: "Magic Zéro Déchet",
                d: "Pour boutiques et épiceries bio. Étiquetage automatisé et gestion du vrac.",
              },
              {
                t: "Magic Scanoid",
                d: "Une seule application pour tout simplifier. Caisse mobile et gestion magasin mobile.",
              },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="card p-6 h-full flex flex-col">
                  <Cloud size={20} className="text-[var(--accent)]" />
                  <h3 className="mt-4 font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] flex-1">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl">
              Prêt à équiper votre magasin&nbsp;?
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Notre équipe vous accompagne du diagnostic à la mise en route, et
              prend en charge la migration de votre ancien système.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Demander une démo <ArrowRight size={16} />
              </Link>
              <a href="tel:+33491364333" className="btn-secondary">
                <Phone size={16} /> +33 4 91 36 43 33
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
