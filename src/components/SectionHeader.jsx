export default function SectionHeader({ label, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`mb-6 max-w-3xl ${alignment}`}>
      {label ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold leading-tight text-text sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p> : null}
    </header>
  )
}
