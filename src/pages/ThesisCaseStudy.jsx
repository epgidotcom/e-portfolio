import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

function CaseSection({ number, label, title, children }) {
  return <Reveal delay={Number(number) * 70}><section className="border-t border-border pt-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{number} · {label}</p><h2 className="mt-2 text-2xl font-semibold leading-tight text-text sm:text-3xl">{title}</h2><div className="mt-5 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">{children}</div></section></Reveal>
}

function BulletGrid({ items }) {
  return <div className="mt-5 grid gap-3 sm:grid-cols-2">{items.map((item) => <div key={item} className="rounded-lg border border-border bg-surface p-4 text-sm text-text"><span className="mr-2 text-accent">/</span>{item}</div>)}</div>
}

export default function ThesisCaseStudy() {
  const project = projects[0]

  return <article className="space-y-10">
    <Reveal><header className="space-y-6"><Link to="/projects" className="inline-flex text-sm text-muted transition-colors hover:text-accent">← Back to projects</Link><div className="flex flex-wrap items-center gap-2"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Featured thesis · Full case study</p><span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{project.status}</span></div><h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl">{project.title}</h1><p className="max-w-3xl text-lg leading-relaxed text-muted">{project.description}</p><dl className="grid gap-4 border-y border-border py-5 text-sm sm:grid-cols-3"><div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Full project name</dt><dd className="mt-1 text-text">{project.fullName}</dd></div><div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Context</dt><dd className="mt-1 text-text">{project.period}</dd></div><div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Organization</dt><dd className="mt-1 text-text">{project.organization}</dd></div></dl></header></Reveal>

    <Reveal delay={80}><figure className="overflow-hidden rounded-2xl border border-border bg-bg shadow-panel"><img src={project.evidence[0].src} alt={project.evidence[0].alt} className="w-full object-contain" /><figcaption className="border-t border-border px-4 py-3 text-xs text-muted">{project.evidence[0].caption} Screenshots show the updated local build, which is not yet deployed.</figcaption></figure></Reveal>

    <CaseSection number="01" label="The problem" title="Why the system was needed"><p>{project.problem}</p><p className="mt-4">{project.research}</p></CaseSection>

    <CaseSection number="02" label="The solution" title="What we built"><p>{project.solution}</p><BulletGrid items={project.modules} /></CaseSection>

    <CaseSection number="03" label="My contributions" title="What I personally did"><div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr]"><div className="rounded-lg border border-border bg-surface p-5"><p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">My role</p><p className="mt-3 font-semibold text-text">{project.role}</p><p className="mt-2 text-sm text-muted">Led coordination for a four-person thesis team while owning the primary full-stack implementation.</p></div><div><ol className="space-y-3">{[project.contribution, 'Connected role-aware screens to API-backed records, appeals, communication, and analytics workflows.', 'Reviewed the updated experience through route checks, predictive contract coverage, and responsive UI review.'].map((item, index) => <li key={item} className="flex gap-4 rounded-lg border border-border bg-surface p-4"><span className="font-mono text-sm text-accent">0{index + 1}</span><span>{item}</span></li>)}</ol></div></div></CaseSection>

    <CaseSection number="04" label="Tech stack" title="How the system is structured"><p>The updated build separates the user-facing workflow from API, persistence, predictive inference, and messaging responsibilities.</p><BulletGrid items={project.architecture} /><div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5"><h3 className="font-semibold text-text">One connected discipline system</h3><div className="mt-4 grid gap-3 sm:grid-cols-3">{['Frontend surfaces staff and student workflows.', 'REST APIs coordinate records, violations, appeals, accounts, and messages.', 'Analytics and predictive services support human review and follow-up.'].map((item, index) => <div key={item} className="text-sm text-muted"><span className="font-mono text-accent">0{index + 1}</span><p className="mt-2">{item}</p></div>)}</div></div></CaseSection>

    <CaseSection number="05" label="Challenges & solutions" title="Technical problems addressed"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-lg border border-border bg-surface p-5"><h3 className="font-semibold text-text">Challenge</h3><p className="mt-2">{project.challenge}</p></div><div className="rounded-lg border border-border bg-surface p-5"><h3 className="font-semibold text-text">Solution direction</h3><p className="mt-2">{project.solution}</p></div></div></CaseSection>

    <CaseSection number="06" label="Key features" title="How the workflow works"><p>Staff can move through a traceable workflow from account access to follow-up, while students have a dedicated route for their own portal and appeals flow.</p><BulletGrid items={project.workflow} /><div className="mt-5 rounded-lg border border-border bg-surface p-5"><h3 className="font-semibold text-text">Predictive analytics with a human-review boundary</h3><p className="mt-2">{project.predictiveAnalytics}</p></div></CaseSection>

    <CaseSection number="07" label="Outcome & links" title="Where the project stands"><p>{project.validation}</p><div className="mt-5 flex flex-wrap gap-3"><a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{project.liveLabel} <span aria-hidden="true" className="ml-2">↗</span></a><Button to="/projects" variant="ghost">Back to all projects</Button></div><p className="mt-4 rounded-lg border border-border bg-surface p-4 text-xs leading-relaxed text-muted">{project.note}</p></CaseSection>
  </article>
}
