import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="space-y-6">
      <SectionHeader
        label="/projects"
        title="Projects"
        subtitle="Academic and technical projects with structured documentation."
      />

      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
