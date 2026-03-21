"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const stats = [
  {
    value: "1,5M",
    label: "artisans en France",
    detail: "dont la grande majorité sans outil numérique dédié pour leurs devis",
  },
  {
    value: "5h",
    label: "perdues chaque semaine",
    detail: "en moyenne sur l'administratif — source CAPEB 2024",
  },
  {
    value: "70%",
    label: "des devis ne signent pas",
    detail: "faute de relance et de suivi — autant de CA perdu",
  },
]

export default function SocialProof() {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const handler = () => setAnimKey((k) => k + 1)
    window.addEventListener("app:navigation", handler)
    return () => window.removeEventListener("app:navigation", handler)
  }, [])

  return (
    <section className="w-full bg-[var(--color-surface)] border-y border-[var(--color-border)] px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-widest">
          Le problème en chiffres
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.value}-${animKey}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2 px-4"
            >
              <span className="text-5xl font-bold text-[var(--color-primary)] leading-none">
                {stat.value}
              </span>
              <span className="text-base font-semibold text-[var(--color-text)]">
                {stat.label}
              </span>
              <span className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
