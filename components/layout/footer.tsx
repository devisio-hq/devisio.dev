import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Link
          href="/mentions-legales"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/politique-confidentialite"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        >
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  )
}
