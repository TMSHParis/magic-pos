import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh" />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display mt-6 text-5xl md:text-7xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
