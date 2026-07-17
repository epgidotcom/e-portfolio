import SectionHeader from '../components/SectionHeader'

const resumeSections = ['Education', 'Skills', 'Projects', 'Experience']

export default function Resume() {
  return (
    <section className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <SectionHeader
        label="/resume"
        title="Resume"
        subtitle="A structured summary page with placeholders for formal resume details."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {resumeSections.map((section) => (
          <article key={section} className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-lg font-semibold text-text">{section}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
             The {section.toLowerCase()} is to be added in future updates.
            </p>
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-dashed border-border bg-surface p-4">
        <h3 className="text-lg font-semibold text-text">Downloadable Resume PDF</h3>
        <p className="mt-2 text-sm text-muted">
          To be added in future updates
        </p>
      </div>
    </section>
  )
}
