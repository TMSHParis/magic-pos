import {
  Boxes,
  Tags,
  Scale,
  ShieldCheck,
  Users,
  ShoppingCart,
  BarChart3,
  Smartphone,
  FileText,
  Recycle,
  Globe2,
  Building2,
  Cloud,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const features = [
  {
    icon: Boxes,
    title: "Gestion référencement Fournisseur / Article",
    body: "Création rapide des articles, mise à jour des tarifs automatisée. Arborescence, calcul de prix sécurisé, relevé concurrence, multifournisseurs et gestion complète du stock.",
  },
  {
    icon: Tags,
    title: "Étiquetage papier & électronique",
    body: "Personnalisation via générateur convivial, interfaçage avec les standards SES et Hanshow.",
  },
  {
    icon: ShieldCheck,
    title: "Caisse certifiée NF525",
    body: "Écran paramétrable, multi-règlement, connexion TPE standards, gestion des retours et fidélité.",
  },
  {
    icon: Scale,
    title: "Balances de caisse, service arrière, libre-service",
    body: "Pesée assistée, génération de tickets, gestion des contenants.",
  },
  { icon: Users, title: "Fidélité & adhérents", body: "Programme de fidélité, gestion des adhérents et des clients professionnels." },
  { icon: ShoppingCart, title: "Achats / Stock / Inventaire", body: "Approvisionnement maîtrisé, inventaires fluides, traçabilité complète." },
  { icon: BarChart3, title: "Décisionnel — BI", body: "Statistiques complètes et exports adaptés à votre activité retail." },
  { icon: Smartphone, title: "Mobilité & traçabilité", body: "Outils mobiles pour la prise d'inventaire et le suivi terrain." },
  { icon: FileText, title: "Dématérialisation", body: "Tickets, factures et documents dématérialisés." },
  { icon: Recycle, title: "Zéro Déchet", body: "Étiquetage automatisé et gestion du vrac pour les épiceries bio." },
  { icon: Globe2, title: "E-commerce", body: "Connecteurs directs vers Shopify, Prestashop, WooCommerce, Oxatis." },
  { icon: Building2, title: "Multi-magasins", body: "Gestion centralisée ou décentralisée pour les chaînes et franchises." },
  { icon: FileText, title: "Interfaces comptabilité", body: "Exports vers les logiciels comptables standards du marché." },
  { icon: Cloud, title: "Cloud", body: "Une infrastructure pensée pour la sécurité et la disponibilité." },
];

export const metadata = { title: "Fonctionnalités" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fonctionnalités"
        title={<>Tout ce qu&apos;il faut pour piloter votre magasin.</>}
        subtitle="Un logiciel complet, modulaire, qui s'adapte à votre métier — du référencement fournisseur à la BI."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 6) * 0.04}>
              <div className="card p-6 h-full">
                <Icon size={22} className="text-[var(--accent)]" />
                <h3 className="mt-5 font-semibold tracking-tight text-lg">{title}</h3>
                <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
