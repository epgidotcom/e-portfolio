import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

export default function Academic() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <SectionHeader
        label="/academic"
        title="Academic Learning"
        subtitle="A structured record of coursework, outputs, and reflections."
      />

      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          This section serves as my academic workspace where I organize learning records, course-related
          outputs, and reflective notes. Content is structured for long-form reading and ongoing updates.
        </p>

        <p>
          Current course workspace available: <span className="text-text">ITE ELECTIVE 4 - Deep Learning and Advanced Natural Language Processing</span>.
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/academic/itc-c508"
          className="inline-flex rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Open ITE ELECTIVE 4 Workspace
        </Link>
      </div>
    </section>
  )
}
