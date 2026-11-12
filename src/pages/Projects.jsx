import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

export default function Projects() {
  return <section className="space-y-6"><Reveal><SectionHeader level={1} label="/work" title="Projects" subtitle="Selected software development and AI/RAG work. The featured thesis is documented as a detailed case study with local-build evidence, workflow context, and technical decisions." /></Reveal><Reveal delay={100}><nav aria-label="Project navigation" className="flex flex-wrap gap-2 rounded-xl border border-border bg-surface p-3">{projects.map((project) => <a key={project.id} href={`#${project.id}`} className="motion-hover rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">{project.title}</a>)}</nav></Reveal><div className="grid gap-5">{projects.map((project, index) => <Reveal key={project.id} delay={Math.min(index * 70, 210)}><ProjectCard project={project} featured={project.featured} /></Reveal>)}</div></section>
}
