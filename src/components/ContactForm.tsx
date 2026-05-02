"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 size={36} className="mx-auto text-[var(--accent)]" />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">Merci !</h3>
        <p className="mt-2 text-[var(--muted)]">
          Votre message a bien été pris en compte. Notre équipe vous recontacte
          dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card p-8 space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Prénom" name="firstName" required />
        <Field label="Nom" name="lastName" required />
      </div>
      <Field label="Adresse mail" name="email" type="email" required />

      <label className="block">
        <span className="text-sm text-[var(--muted)]">Sujet</span>
        <select
          name="subject"
          required
          className="mt-2 w-full rounded-2xl border hairline bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Choisir un sujet
          </option>
          <option value="demo">Demande de démo</option>
          <option value="devis">Demande de devis</option>
          <option value="contact">Contact</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm text-[var(--muted)]">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border hairline bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--accent)] transition-colors resize-none"
        />
      </label>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={16} />
        Envoyer
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-[var(--muted)]">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-2xl border hairline bg-transparent px-4 py-3 text-[15px] outline-none focus:border-[var(--accent)] transition-colors"
      />
    </label>
  );
}
