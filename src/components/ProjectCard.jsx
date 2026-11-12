function DetailList({ items }) {
  if (!items?.length) return null

  return <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
}

function DetailSection({ title, children, className = '' }) {
  return <section className={`rounded-lg border border-border bg-surface p-4 ${className}`}><h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{title}</h3>{children}</section>
}

export default function ProjectCard({ project, featured = false }) {
  return <article id={project.id} className={`motion-hover scroll-mt-24 rounded-xl border ${featured ? 'border-accent/50 bg-gradient-to-b from-card to-surface p-6 shadow-panel sm:p-8' : 'border-border bg-card p-5 sm:p-6'}`}>
    <header className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{project.type}</p>
        {project.featured ? <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">Featured work</span> : null}
      </div>
      <h2 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl'} max-w-4xl font-semibold leading-tight tracking-tight text-text`}>{project.title}</h2>
    </header>

    {featured && project.evidence ? <div className="mt-6 grid gap-3 sm:grid-cols-2">{project.evidence.map((item, index) => <figure key={item.src} className={`group relative overflow-hidden rounded-xl border border-border bg-bg ${index === 0 ? 'sm:col-span-2' : ''}`}><img src={item.src} alt={item.alt} className={`${index === 0 ? 'h-56 sm:h-72' : 'h-44 sm:h-52'} w-full object-contain object-top transition duration-700 group-hover:scale-105`} /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent px-4 pb-3 pt-10 text-xs text-text">{item.caption}</figcaption></figure>)}</div> : null}

    <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

    {project.status ? <div className="mt-4 flex flex-wrap items-center gap-3"><p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">{project.status}</p>{project.evidenceLabel ? <span className="text-xs text-muted">{project.evidenceLabel}</span> : null}</div> : null}

    {featured && project.problem ? <div className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-2"><div><h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent">The problem</h3><p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p></div><div><h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Research framing</h3><p className="mt-2 text-sm leading-relaxed text-muted">{project.research}</p></div></div> : null}

    <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-muted">{tech}</span>)}</div>

    <dl className="mt-6 grid gap-4 border-t border-border pt-5 text-sm sm:grid-cols-2"><div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">My role</dt><dd className="mt-1 text-text">{project.role}</dd></div><div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">What it demonstrates</dt><dd className="mt-1 text-muted">{project.keyFeatures.join(' · ')}</dd></div></dl>

    {featured ? <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <DetailSection title="Who it serves"><DetailList items={project.users} /></DetailSection>
      <DetailSection title="Core workflow"><DetailList items={project.workflow} /></DetailSection>
    </div> : null}

    {featured && project.modules ? <div className="mt-5"><h3 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Prototype modules</h3><div className="mt-3 flex flex-wrap gap-2">{project.modules.map((module) => <span key={module} className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-text">{module}</span>)}</div></div> : null}

    {featured ? <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <DetailSection title="How it is structured"><DetailList items={project.architecture} /></DetailSection>
      <DetailSection title="Predictive analytics"><p className="mt-3 text-sm leading-relaxed text-muted">{project.predictiveAnalytics}</p></DetailSection>
    </div> : null}

    {featured && project.liveUrl ? <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">{project.caseStudyUrl ? <a href={project.caseStudyUrl} className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-[#3c8fdd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Read full case study <span aria-hidden="true" className="ml-2">→</span></a> : null}<a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{project.liveLabel} <span aria-hidden="true" className="ml-2">↗</span></a><span className="self-center text-xs text-muted">The live link opens the deployed demo prototype; the updated build shown above is pending deployment.</span></div> : null}

    {featured ? <details className="mt-5 border-t border-border pt-4"><summary className="cursor-pointer rounded text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Case study: contribution, decisions & lessons</summary><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><h3 className="text-sm font-semibold text-text">My contribution</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.contribution}</p></div><div><h3 className="text-sm font-semibold text-text">Key constraint</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.challenge}</p></div><div><h3 className="text-sm font-semibold text-text">Approach / solution</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.solution}</p></div><div><h3 className="text-sm font-semibold text-text">Validation</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.validation}</p></div><div className="sm:col-span-2"><h3 className="text-sm font-semibold text-text">Lessons learned</h3><DetailList items={project.lessons} /></div></div>{project.note ? <p className="mt-4 rounded-md border border-border bg-surface p-3 text-xs leading-relaxed text-muted">{project.note}</p> : null}</details> : <details className="mt-5 border-t border-border pt-4"><summary className="cursor-pointer rounded text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Case study: contributions, challenge & approach</summary><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><h3 className="text-sm font-semibold text-text">My contribution</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.contribution}</p></div><div><h3 className="text-sm font-semibold text-text">Challenge</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.challenge}</p></div><div className="sm:col-span-2"><h3 className="text-sm font-semibold text-text">Approach / solution</h3><p className="mt-1 text-sm leading-relaxed text-muted">{project.solution}</p></div></div>{project.note ? <p className="mt-4 rounded-md border border-border bg-surface p-3 text-xs leading-relaxed text-muted">{project.note}</p> : null}</details>}
  </article>
}
