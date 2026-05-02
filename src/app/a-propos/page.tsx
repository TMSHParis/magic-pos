import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

export const metadata = { title: "À propos" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={<>Computer Associés, éditeur français.</>}
        subtitle="Basés à Marseille, nous concevons, développons et accompagnons Magic depuis nos bureaux — sans sous-traitance."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-16 md:grid-cols-2 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border hairline">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
              alt="L'équipe Computer Associés"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Notre engagement</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">
            Maîtrise totale du développement de nos logiciels.
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Hotline interne, installation sur site, assistance rapide :
            l&apos;ensemble de la chaîne est gérée par nos équipes. C&apos;est
            la condition pour offrir la réactivité et l&apos;adaptabilité que
            méritent les commerces.
          </p>
          <ul className="mt-8 space-y-3 text-[15px]">
            <li>· Développement 100 % français, en interne</li>
            <li>· Certification NF525 délivrée par l&apos;AFNOR</li>
            <li>· Marseille — 1, Montée de Saint-Menet, 13011</li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
