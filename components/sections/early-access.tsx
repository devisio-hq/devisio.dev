import WaitlistForm from "@/components/ui/waitlist-form"

export default function EarlyAccess() {
  return (
    <section className="w-full bg-[var(--color-primary)] px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Before / After / Bridge */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
              Avant Devisio
            </span>
            <p className="text-white/80 text-lg leading-relaxed">
              Tu finis ta journée sur le chantier, tu rentres, et tu passes encore
              une heure à remplir un tableau Excel. Ou tu remets ça à demain — et
              le devis ne part jamais.
            </p>
          </div>

          <div className="w-12 h-px bg-white/30 mx-auto" />

          <div className="flex flex-col gap-2">
            <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
              Avec Devisio
            </span>
            <p className="text-white text-lg font-medium leading-relaxed">
              Tu parles 30 secondes dans ton téléphone. Le devis est prêt. Tu
              l'envoies à ton client avant de partir du chantier.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/20" />

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Sois parmi les premiers artisans
          </h2>
          <p className="text-white/80 text-base max-w-md">
            Inscris-toi maintenant pour accéder à Devisio en avant-première.
            Les premiers inscrits participent à la construction du produit.
          </p>

          <div className="w-full max-w-md">
            <WaitlistForm
              variant="inverted"
              placeholder="ton@email.fr"
              buttonLabel="Je veux accès en priorité"
            />
            <p className="mt-2 text-xs text-white/60 text-center">
              3 devis offerts pour tester · Aucune carte bancaire requise
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
