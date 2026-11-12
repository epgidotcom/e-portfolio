import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

const learningAreas = [
  { number: '01', title: 'Natural Language Processing', text: 'Study of language processing concepts and conversational systems.' },
  { number: '02', title: 'Large Language Models', text: 'Exploration of language model integration and response generation.' },
  { number: '03', title: 'Retrieval Augmented Generation', text: 'Working with domain knowledge, retrieval, chunking, and generated responses.' },
  { number: '04', title: 'AI Evaluation & Responsible AI', text: 'Evaluating model behavior, evidence quality, grounding, limitations, and responsible AI decisions.' },
]

const academicProjects = [
  { title: 'CycleLink', detail: 'Bicycle maintenance RAG chatbot', href: '/projects#cyclelink', tag: 'Applied RAG' },
  { title: 'Gaming Lore RAG Chatbot', detail: 'Domain-specific chatbot with chunking experiments', href: '/projects#gaming-lore-rag-chatbot', tag: 'RAG experimentation' },
]

export default function Academic() {
  return (
    <article className="space-y-6">
      <header className="rounded-2xl border border-border bg-gradient-to-b from-card to-surface p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">/specialization · applied AI</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-text sm:text-4xl">AI & Machine Learning</h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">A focused look at my AI projects, experiments, and supporting technical learning.</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">This space connects hands-on project work with the concepts and methods behind applied AI and machine learning.</p>
        <Link to="/academic/nlp-llm-rag" className="mt-6 inline-flex rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Open learning archive <span aria-hidden="true" className="ml-2">→</span></Link>
      </header>

      <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <SectionHeader label="/technical-focus" title="Technical focus" subtitle="Concepts explored through course learning and applied project work." />
        <div className="grid gap-3 sm:grid-cols-2">
          {learningAreas.map((area) => (
            <article key={area.number} className="motion-hover rounded-xl border border-border bg-surface p-4 sm:p-5">
              <p className="font-mono text-xs text-accent">{area.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-text">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <SectionHeader label="/selected-projects" title="AI projects" subtitle="Domain-focused applications, presented as part of my wider software development experience." />
        <div className="grid gap-3 sm:grid-cols-2">
          {academicProjects.map((project) => (
            <Link key={project.title} to={project.href} className="motion-hover group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{project.tag}</p>
              <h3 className="mt-2 text-lg font-semibold text-text group-hover:text-accent">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.detail}</p>
              <span className="mt-4 inline-block text-sm font-medium text-accent">View project case study →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div><h2 className="text-lg font-semibold text-text">Explore My LLM & RAG Learning Journey</h2><p className="mt-1 text-sm text-muted">Discover my learning records, hands-on experiments, technical insights, and laboratory reports covering Large Language Models and Retrieval-Augmented Generation.</p></div>
        <Link to="/academic/nlp-llm-rag" className="inline-flex shrink-0 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">View archive</Link>
      </section>
    </article>
  )
}
