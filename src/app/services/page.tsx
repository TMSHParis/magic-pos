import { Code2, Wrench, Headphones, Truck } from "lucide-react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";

const services = [
  {
    icon: Code2,
    title: "Service développement",
    body: "Notre équipe de développeurs conçoit entièrement nos logiciels en interne. Nous sommes donc capables de modifier et d'adapter nos programmes rapidement.",
  },
  {
    icon: Wrench,
    title: "Service technique",
    body: "Notre équipe technique assure l'installation et l'assistance des équipements de caisse ainsi que la maintenance réseau et informatique en général. Ce service est aussi en charge de l'intégration des nouveaux équipements spécialisés tels que les bornes prix, les étiquettes électroniques…",
  },
  {
    icon: Headphones,
    title: "Hotline",
    body: "Notre hotline assure l'assistance et la formation en prenant la main sur vos ordinateurs. Le support travaille en étroite collaboration avec le service développement et le service technique, ce qui permet une extrême réactivité quel que soit le type de demande.",
  },
  {
    icon: Truck,
    title: "Service installation",
    body: "Intervention sur site lors de l'installation ou la migration d'un nouveau magasin. Nous nous occupons de la migration et de la récupération des données de votre ancien système.",
  },
];

export const metadata = { title: "Services" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Des équipes <em className="not-italic bg-gradient-to-r from-[#0071e3] to-[#af52de] bg-clip-text text-transparent">à votre service</em>.
          </>
        }
        subtitle="De la conception du logiciel à l'installation sur site, tout est piloté en interne."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.05}>
              <div className="card p-8 h-full">
                <Icon size={26} className="text-[var(--accent)]" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-[15px] text-[var(--muted)] leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
