"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import WaitlistForm from "@/components/ui/waitlist-form"

export default function Hero() {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const handler = () => setAnimKey((k) => k + 1)
    window.addEventListener("app:navigation", handler)
    return () => window.removeEventListener("app:navigation", handler)
  }, [])

  return (
    <section className="w-full bg-[var(--color-background)] px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text + form */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          {/* Badge with shimmer */}
          <span className="relative inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/8 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)] overflow-hidden">
            <span
              className="absolute inset-0 -translate-x-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(249,115,22,0.18), transparent)",
                animation: "shimmer 2.2s ease-in-out infinite",
              }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            </span>
            <span className="relative">Accès anticipé gratuit</span>
          </span>

          <motion.h1
            key={`h1-${animKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text)] leading-tight"
          >
            Fais tes devis{" "}
            <span className="text-[var(--color-primary)]">à la voix</span>
            {" "}en 2 minutes
          </motion.h1>

          <motion.p
            key={`p-${animKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed"
          >
            Tu décris le chantier, Devisio génère le devis. Plus de tableaux Excel,
            plus de soirées à remplir des colonnes. Juste toi et ton client.
          </motion.p>

          <div className="w-full max-w-md">
            <WaitlistForm />
            <p className="mt-2 text-xs text-[var(--color-text-muted)] text-center lg:text-left">
              3 devis offerts pour tester · Aucune carte bancaire requise
            </p>
          </div>
        </div>

        {/* Three-device floating composition */}
        <div className="flex-shrink-0 w-full max-w-[340px] mx-auto lg:mx-0">
          <div className="relative h-[380px] w-full">

            {/* Laptop — back left, sm+ only */}
            <div className="hidden sm:block absolute left-0 top-14 z-0 -rotate-[5deg] origin-top-right opacity-90">
              <div className="w-[188px] rounded-t-[6px] rounded-b-[2px] border-2 border-[var(--color-border)] bg-white shadow-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="h-5 bg-[var(--color-surface)] border-b border-[var(--color-border)] flex items-center gap-1 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                  <div className="flex-1 mx-2 h-2 bg-[var(--color-border)] rounded-full" />
                </div>
                {/* Content */}
                <div className="p-2 flex flex-col gap-1.5">
                  <div className="h-3 w-16 bg-[var(--color-surface)] rounded" />
                  <div className="rounded bg-[var(--color-surface)] border border-[var(--color-border)] p-1.5 flex flex-col gap-1">
                    <p className="text-[6px] font-bold text-[var(--color-text)] uppercase tracking-wide">
                      Devis #2024-042
                    </p>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div className="flex justify-between">
                      <span className="text-[6px] text-[var(--color-text-muted)]">Carrelage 45m²</span>
                      <span className="text-[6px] text-[var(--color-text-muted)]">1 365 €</span>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div className="flex justify-between">
                      <span className="text-[6px] font-bold text-[var(--color-text)]">Total TTC</span>
                      <span className="text-[6px] font-bold text-[var(--color-primary)]">1 365 €</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Keyboard base */}
              <div className="w-full h-2.5 bg-[var(--color-surface)] border-x-2 border-b-2 border-[var(--color-border)] rounded-b-sm" />
              <div className="w-[115%] h-1.5 -ml-[7.5%] bg-[var(--color-border)]/50 rounded-b" />
            </div>

            {/* Tablet — back right, sm+ only */}
            <div className="hidden sm:block absolute right-0 top-10 z-0 rotate-[5deg] origin-top-left opacity-90">
              <div className="w-[104px] h-[148px] rounded-[14px] border-2 border-[var(--color-border)] bg-white shadow-lg overflow-hidden flex flex-col">
                <div className="h-5 bg-[var(--color-primary)] flex items-center justify-between px-2 shrink-0">
                  <span className="text-white text-[6px] font-bold">Devisio</span>
                  <span className="text-white/70 text-[6px]">9:41</span>
                </div>
                <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
                  <div className="rounded bg-[var(--color-surface)] border border-[var(--color-border)] p-1.5 flex flex-col gap-1">
                    <p className="text-[6px] font-bold text-[var(--color-text)] uppercase">Devis #2024-042</p>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div className="flex justify-between">
                      <span className="text-[6px] text-[var(--color-text-muted)]">Carrelage</span>
                      <span className="text-[6px] text-[var(--color-text-muted)]">1 365 €</span>
                    </div>
                    <div className="h-px bg-[var(--color-border)]" />
                    <div className="flex justify-between">
                      <span className="text-[6px] font-bold text-[var(--color-text)]">Total TTC</span>
                      <span className="text-[6px] font-bold text-[var(--color-primary)]">1 365 €</span>
                    </div>
                  </div>
                  {/* Send button */}
                  <div className="mt-auto w-full h-4 rounded-md bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="text-white text-[5px] font-bold">Envoyer au client</span>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="h-3 flex items-center justify-center shrink-0">
                  <div className="w-8 h-0.5 bg-[var(--color-border)] rounded-full" />
                </div>
              </div>
            </div>

            {/* Mobile — front center, always visible */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10 w-40">
              <div className="relative w-40 h-[320px] rounded-[2rem] border-4 border-[var(--color-text)] bg-[var(--color-text)] shadow-2xl overflow-hidden">
                <div className="absolute inset-1 rounded-[1.6rem] bg-[var(--color-surface)] overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-7 bg-[var(--color-primary)] flex items-center justify-between px-3 shrink-0">
                    <span className="text-white text-[9px] font-semibold">Devisio</span>
                    <span className="text-white text-[9px]">9:41</span>
                  </div>
                  {/* Chat UI */}
                  <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
                    <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--color-primary)] px-2.5 py-1.5 text-white text-[9px] leading-relaxed">
                      Pose de carrelage 45m², salle de bain, dépose incluse
                    </div>
                    <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-[var(--color-border)] px-2.5 py-1.5 text-[var(--color-text)] text-[9px] leading-relaxed shadow-sm">
                      Devis généré…
                      <span className="inline-flex gap-0.5 ml-1">
                        <span className="animate-bounce inline-block w-1 h-1 rounded-full bg-[var(--color-text-muted)]" style={{ animationDelay: "0ms" }} />
                        <span className="animate-bounce inline-block w-1 h-1 rounded-full bg-[var(--color-text-muted)]" style={{ animationDelay: "150ms" }} />
                        <span className="animate-bounce inline-block w-1 h-1 rounded-full bg-[var(--color-text-muted)]" style={{ animationDelay: "300ms" }} />
                      </span>
                    </div>
                    {/* Devis card */}
                    <div className="self-start w-full rounded-xl bg-white border border-[var(--color-border)] p-2 shadow-sm flex flex-col gap-1">
                      <p className="text-[8px] font-bold text-[var(--color-text)] uppercase tracking-wide">Devis #2024-042</p>
                      <div className="h-px bg-[var(--color-border)]" />
                      <div className="flex justify-between text-[8px] text-[var(--color-text-muted)]">
                        <span>Fourniture</span>
                        <span>480 €</span>
                      </div>
                      <div className="flex justify-between text-[8px] text-[var(--color-text-muted)]">
                        <span>Pose + joints</span>
                        <span>675 €</span>
                      </div>
                      <div className="h-px bg-[var(--color-border)]" />
                      <div className="flex justify-between text-[8px] font-bold text-[var(--color-text)]">
                        <span>Total TTC</span>
                        <span>1 365 €</span>
                      </div>
                    </div>
                    {/* Send button */}
                    <div className="self-stretch mt-auto rounded-xl bg-[var(--color-accent)] px-2 py-1.5 text-center text-[9px] font-semibold text-white">
                      Envoyer au client
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-[var(--color-text)] rounded-full z-10" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
