import { useEffect, useState } from 'react'

export default function IntroLoader() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsOpen(false)
      return undefined
    }

    const timer = window.setTimeout(() => setIsOpen(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="intro-loader" role="status" aria-live="polite">
      <div className="intro-loader__content">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Fitzgerald Larido</p>
        <div className="mt-5 flex items-center gap-3">
          <span className="intro-loader__line" aria-hidden="true" />
          <span className="text-sm text-muted">Building useful systems</span>
        </div>
        <button
          type="button"
          className="mt-8 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setIsOpen(false)}
        >
          Skip intro
        </button>
      </div>
    </div>
  )
}
