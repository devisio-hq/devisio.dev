import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Mentions légales — Devisio",
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">Mentions légales</h1>

        <section className="flex flex-col gap-6 text-[var(--color-text-muted)] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Éditeur du site</h2>
            <p>Devisio</p>
            <p>Landes, France</p>
            <p>
              Contact :{" "}
              <a
                href="mailto:contact@devisio.fr"
                className="text-[var(--color-primary)] hover:underline"
              >
                contact@devisio.fr
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Hébergement</h2>
            <p>Vercel Inc.</p>
            <p>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, visuels, marque) est la propriété exclusive de Devisio.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Données personnelles</h2>
            <p>
              Les données collectées via le formulaire d&apos;inscription (adresse email) sont utilisées uniquement pour
              vous contacter dans le cadre de l&apos;accès anticipé à Devisio. Consultez notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-[var(--color-primary)] hover:underline"
              >
                politique de confidentialité
              </Link>{" "}
              pour en savoir plus.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
