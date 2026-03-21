"use client"

import { useEffect } from "react"

/**
 * Null-rendering component that lives in the layout (never unmounts, never
 * unmounts into bfcache without its listener). On bfcache restore, the browser
 * fires `pageshow` with `persisted: true`. We dispatch a custom event so
 * animated sections can bump their keys and replay framer-motion animations.
 */
export default function NavigationObserver() {
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        window.dispatchEvent(new CustomEvent("app:navigation"))
      }
    }
    window.addEventListener("pageshow", onPageShow)
    return () => window.removeEventListener("pageshow", onPageShow)
  }, [])

  return null
}
