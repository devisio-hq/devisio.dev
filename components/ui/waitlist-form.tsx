"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface WaitlistFormProps {
  variant?: "default" | "inverted"
  placeholder?: string
  buttonLabel?: string
}

export default function WaitlistForm({
  variant = "default",
  placeholder = "ton@email.fr",
  buttonLabel = "Rejoindre la liste",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isInverted = variant === "inverted"

  async function handleSubmit() {
    if (status === "loading" || status === "success") return

    const trimmed = email.trim()
    if (!trimmed) {
      setErrorMessage("Saisis ton adresse email.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error ?? "Une erreur est survenue.")
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setErrorMessage("Pas de connexion. Réessaie dans un instant.")
      setStatus("error")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSubmit()
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl px-6 py-4 text-center text-sm font-medium ${
          isInverted
            ? "bg-white/20 text-white"
            : "bg-green-50 text-green-600"
        }`}
      >
        Tu es sur la liste ! On te contacte en premier au lancement.
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (errorMessage) setErrorMessage("")
            if (status === "error") setStatus("idle")
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={status === "loading"}
          className={`flex-1 h-12 text-base ${
            isInverted
              ? "bg-white/15 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
              : "bg-white border-[var(--color-border)]"
          }`}
        />
        <Button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className={`h-12 px-6 text-base font-semibold shrink-0 ${
            isInverted
              ? "bg-white text-[var(--color-primary)] hover:bg-white/90"
              : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white"
          }`}
        >
          {status === "loading" ? "Inscription…" : buttonLabel}
        </Button>
      </div>
      {errorMessage && (
        <p
          className={`text-sm ${
            isInverted ? "text-white/80" : "text-red-500"
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}
