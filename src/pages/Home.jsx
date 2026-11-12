import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Home() {
  const thesis = projects[0]
  return <>
    <Reveal><section className="hero-motion relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-card via-card to-surface p-6 shadow-glow sm:p-8 lg:p-12">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/portfolio · open to OJT opportunities</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">Building practical software with a systems mindset.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">I’m Fitzgerald Larido, a fourth-year BSIT student building full-stack web applications and exploring practical AI systems.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button to="/projects">View featured work</Button><Button to="/resume" variant="ghost">Download / view resume</Button><Button to="/about#contact" variant="ghost">Get in touch</Button></div>
        </div>
        <div className="rounded-xl border border-border bg-bg/40 p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Current focus</p>
          <ul className="mt-4 space-y-3 text-sm text-text">
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />Full-stack web development and deployment</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />AI, predictive analytics, and RAG workflows</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />Quality-minded engineering and troubleshooting</li>
          </ul>
        </div>
      </div>
    </section></Reveal>
    <section className="space-y-5">
      <Reveal delay={100}><SectionHeader label="/selected-work · 01" title="A discipline-management thesis built around real workflows" subtitle="Project management and primary full-stack development for a four-person team, with an updated local build and a separate live demo prototype." /></Reveal>
      <Reveal delay={180}><ProjectCard project={thesis} featured /></Reveal>
      <Reveal delay={260}><Link to="/projects/student-discipline-management-system" className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Read full thesis case study →</Link></Reveal>
    </section>
    <Reveal delay={150}><section className="rounded-2xl border border-border bg-card p-6 sm:p-8"><SectionHeader label="/focus" title="From feature idea to working system" subtitle="I combine implementation, applied AI exploration, and quality-minded problem solving." /><div className="grid gap-4 sm:grid-cols-3">{[['01 · Build', 'Full-stack web application work with React, Node.js, REST APIs, and PostgreSQL.'], ['02 · Explore', 'Domain-focused chatbot projects, retrieval workflows, predictive analytics, and LLM integration.'], ['03 · Improve', 'Deployment troubleshooting, reliable software practices, and a growing interest in quality assurance.']].map(([title, text]) => <article key={title} className="motion-hover rounded-lg border border-border bg-surface p-4"><h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{text}</p></article>)}</div></section></Reveal>
    <Reveal delay={200}><section className="motion-hover rounded-2xl border border-border bg-surface p-5 sm:p-6"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">/specialization</p><h2 className="mt-1 text-xl font-semibold text-text">AI & RAG</h2><p className="mt-1 text-sm text-muted">Domain-focused chatbot projects and technical exploration.</p></div><Button to="/academic" variant="ghost">Explore AI / RAG</Button></div></section></Reveal>
  </>
}
