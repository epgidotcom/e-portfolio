export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{project.type}</p>
        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
      </header>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">My role</dt>
          <dd className="mt-1 text-text">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Key features</dt>
          <dd className="mt-1 text-muted">{project.keyFeatures.join(', ')}</dd>
        </div>
      </dl>
    </article>
  )
}
