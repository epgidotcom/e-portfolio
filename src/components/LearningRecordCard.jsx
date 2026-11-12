export default function LearningRecordCard({ record }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <header className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Record {record.recordNumber}</p>
          <h3 className="mt-1 text-lg font-semibold text-text">{record.topic}</h3>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{record.category}</p>
          <p className="mt-1 text-sm text-muted">{record.date}</p>
        </div>
      </header>

      <div className="mt-4 space-y-4 text-sm leading-relaxed">
        <section>
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Overview</h4>
          <p className="mt-1 text-muted">{record.overview}</p>
        </section>
        <section>
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Key Learning</h4>
          <p className="mt-1 text-muted">{record.keyLearning}</p>
        </section>
        <section>
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Artifact</h4>
          <p className="mt-1 text-muted">{record.artifact}</p>
        </section>
        <section>
          <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Reflection</h4>
          <p className="mt-1 text-muted">{record.reflection}</p>
        </section>
        <a href={record.download.file} download className="inline-flex rounded-md border border-accent px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{record.download.label} ↓</a>
      </div>
    </article>
  )
}
