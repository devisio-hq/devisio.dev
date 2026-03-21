const steps = [
  {
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    title: "Tu parles",
    description:
      "Décris le chantier comme tu l'expliquerais à un collègue. Matériaux, surface, main d'œuvre — tout y passe en 30 secondes.",
  },
  {
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Le devis est généré",
    description:
      "Devisio structure les postes, applique tes tarifs et calcule le total TTC. En moins de 10 secondes, le document est prêt.",
  },
  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9l20-7z" />
      </svg>
    ),
    title: "Tu envoies",
    description:
      "Relis, ajuste si besoin, et envoie directement par email ou SMS. Ton client reçoit un devis pro signable en ligne.",
  },
]

export default function DemoFlow() {
  return (
    <section className="w-full bg-[var(--color-background)] px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
            Comment ça marche
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] tracking-tight">
            De la voix au devis signé
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md">
            Trois étapes. Pas d'Excel, pas de copier-coller, pas de soirée sacrifiée.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden sm:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[var(--color-border)] -z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center gap-4 px-4">
              {/* Icon circle */}
              <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                {step.icon}
              </div>
              <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                Étape {step.number}
              </span>
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
