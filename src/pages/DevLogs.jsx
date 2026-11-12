import SectionHeader from '../components/SectionHeader'

const devLogs = [
  {
    date: 'July 17 2026',
    title: 'Portfolio workspace initial release',
    changes: [
      'Added home, about, academic, project, and resume sections.',
      'Added temporary content for some section.',
    ],
  },
  {
    date: 'November 12 2026',
    title: 'Expanded the portfolio and AI learning showcase',
    changes: [
      'Added more contents and improved the home and resume sections with better layout, typography, and content.',
      'Expanded the AI learning area into an AI & Machine Learning section covering NLP, deep learning, LLMs, and Retrieval-Augmented Generation.',
      'Added detailed learning records with practical activities, key takeaways, reflections, and downloadable supporting reports for each record.',
      'Added a fuller CycleLink final-project presentation with its RAG workflow, experiments, evaluation observations, leadership contribution, and personal learning reflection.',
      'Added a dedicated Student Discipline Management System case study with project context, workflows, screenshots, technical decisions, and a clear distinction between the updated local build and the live demo prototype.',
      'Improved project presentation with progressive scroll-reveal animations, staggered content sections, and clearer case-study navigation.',
      'Refined the portfolio’s academic and project descriptions to better communicate software development, AI experimentation, technical leadership, and quality-minded problem solving.',
    ],
  },

]

export default function DevLogs() {
  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <SectionHeader
          label="/dev-logs"
          title="Dev Logs"
          subtitle="A dated history of changes, improvements, and additions to my portfolio."
        />
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          This log documents how my portfolio evolves over time.
        </p>
      </header>

      <div className="space-y-4">
        {devLogs.map((log) => (
          <article key={log.date} className="motion-hover rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <time className="font-mono text-sm text-accent">{log.date}</time>
                <h2 className="mt-1 text-xl font-semibold text-text">{log.title}</h2>
              </div>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
              {log.changes.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
