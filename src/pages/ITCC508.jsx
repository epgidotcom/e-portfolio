import LearningRecordCard from '../components/LearningRecordCard'
import SectionHeader from '../components/SectionHeader'
import { learningRecords } from '../data/learningRecords'

const courseSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'learning-records', label: 'Learning Records' },
  { id: 'academic-outputs', label: 'Academic Outputs' },
  { id: 'reflections', label: 'Reflections' },
]

export default function ITCC508() {
  return (
    <article className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <SectionHeader title="ITC-C508" subtitle="ITE ELECTIVE 4 - Deep Learning and Advanced Natural Language Processing" />
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          This course workspace captures my progress in predictive analytics, intelligent systems, and reflective
          academic practice. The structure is designed for continuous additions without redesigning the page.
        </p>
      </header>

      <nav
        aria-label="ITC-C508 section navigation"
        className="rounded-xl border border-border bg-surface p-3"
      >
        <ul className="flex flex-wrap gap-2">
          {courseSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="overview" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-text">Overview</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          The course focuses on advanced predictive modeling and intelligent systems. My objective is to build a
          disciplined workflow for model understanding, experimentation, interpretation, and documentation of
          insights through academic records and project-linked artifacts.
        </p>
      </section>

      <section id="learning-records" className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-text">Learning Records</h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          Static learning records are provided below and can be expanded as new class sessions, activities, and
          outputs are completed.
        </p>
        <div className="grid gap-4">
          {learningRecords.map((record) => (
            <LearningRecordCard key={record.recordNumber} record={record} />
          ))}
        </div>
      </section>

      <section id="academic-outputs" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-text">Academic Outputs</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          PLACEHOLDER: Add links and summaries for submissions, reports, notebooks, presentation files, and
          other formal outputs for ITC-C508.
        </p>
      </section>

      <section id="reflections" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-text">Reflections</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          PLACEHOLDER: Add reflection entries connecting what was learned, what was difficult, and how each
          learning milestone influences your long-term technical direction.
        </p>
      </section>
    </article>
  )
}
