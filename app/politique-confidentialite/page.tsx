import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Politique de confidentialité — Devisio",
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">Politique de confidentialité</h1>

        <section className="flex flex-col gap-6 text-[var(--color-text-muted)] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Données collectées</h2>
            <p>
              Lors de votre inscription à la liste d&apos;attente, nous collectons uniquement votre adresse email.
              Aucune autre donnée personnelle n&apos;est collectée via ce site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Finalité</h2>
            <p>
              Votre adresse email est utilisée pour vous informer de l&apos;ouverture de l&apos;accès à Devisio et
              vous envoyer les informations relatives à votre inscription. Nous ne vous enverrons pas de communications
              non sollicitées.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Sous-traitants</h2>
            <p>
              Votre email est transmis à{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                Resend
              </a>{" "}
              (envoi d&apos;emails transactionnels) qui agit en tant que sous-traitant au sens du RGPD. Aucune donnée
              n&apos;est vendue ou partagée à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Durée de conservation</h2>
            <p>
              Vos données sont conservées jusqu&apos;au lancement du service ou jusqu&apos;à votre demande de
              suppression.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de
              vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:s3bc40@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                s3bc40@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Cookies</h2>
            <p>Ce site n&apos;utilise aucun cookie de tracking ou publicitaire.</p>
          </div>

          <p className="text-sm">
            Voir aussi nos{" "}
            <Link href="/mentions-legales" className="text-[var(--color-primary)] hover:underline">
              mentions légales
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
