import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact & demande de démo" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Parlons de votre projet.</>}
        subtitle="Une question, un devis, une démo ? Notre équipe vous répond depuis Marseille."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="card p-8 h-full">
            <h3 className="text-lg font-semibold tracking-tight">
              Computer Associés
            </h3>
            <ul className="mt-6 space-y-5 text-[15px]">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[var(--accent)]" />
                <span>
                  1, Montée de Saint-Menet
                  <br />
                  13011 Marseille
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-1 text-[var(--accent)]" />
                <a href="tel:+33491364333" className="hover:underline">
                  +33 4 91 36 43 33
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-1 text-[var(--accent)]" />
                <span>Via le formulaire ci-contre</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.05}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
