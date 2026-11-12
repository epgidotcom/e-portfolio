import resumePdf from '../assets/documents/Larido_Fitzgerald OJT Resume.pdf'
import SectionHeader from '../components/SectionHeader'

const resumeSections = [
  {
    title: 'Education',
    items: [
      'Bachelor of Science in Information Technology · Jose Rizal University (July 2022 – June 2027)',
    ],
  },
  {
    title: 'Experience',
    items: [
      'Project Manager / Full-Stack Developer for a student discipline management system with predictive analytics (January 2025 – November 2025).',
      'Built web features with React, Tailwind CSS, Node.js, REST APIs, and predictive models.',
      'Deployed application components using Vercel, Render, and Neon.',
    ],
  },
  {
    title: 'Projects',
    items: [
      'CycleLink augmented-generation chatbot for bicycle maintenance troubleshooting.',
      'Explored LLM configuration and domain knowledge integration for practical applications.',
      'Custom Discord Live Status modification built with Node.js as a personal project.',
    ],
  },
  {
    title: 'Skills and Activities',
    items: [
      'Full-stack web development, REST APIs, predictive analytics, vector search, and retrieval augmented generation.',
      'Member of the Junior Philippine Computer Society · Jose Rizal University, Media and Publications (2023–2025).',
      'CompTIA IT Fundamentals certification (December 2022).',
    ],
  },
]

const resumeLinks = [
  {
    label: 'LinkedIn',
    description: 'Connect with me professionally and view my experience.',
    href: 'https://www.linkedin.com/in/fitzgerald-larido-663699314',
  },
  {
    label: 'GitHub',
    description: 'Explore my code, projects, and technical work.',
    href: 'https://github.com/epgidotcom',
  },
  {
    label: 'Credly',
    description: 'View my CompTIA IT Fundamentals certification.',
    href: 'https://www.credly.com/badges/f2214e4f-2ed1-499a-a673-a79e05a08f80',
  },
]

export default function Resume() {
  return (
    <section className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <SectionHeader
        level={1}
        label="/resume"
        title="Resume"
        subtitle="Full-stack developer and BSIT student · Open to OJT opportunities"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {resumeSections.map((section) => (
          <article key={section.title} className="rounded-lg border border-border bg-surface p-4">
            <h3 className="text-lg font-semibold text-text">{section.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-accent/30 bg-surface p-5 shadow-panel sm:p-6">
        <div>
          <h2 className="text-xl font-semibold text-text">Professional links</h2>
          <p className="mt-1 text-sm text-muted">Connect with me, explore my code, or verify my certification.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {resumeLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="motion-hover flex h-full flex-col rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <h3 className="text-lg font-semibold text-text">{link.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{link.description}</p>
              <span className="mt-auto inline-block pt-4 text-sm font-semibold text-accent">Visit {link.label} &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-text">Downloadable Resume PDF</h3>
        <p className="mt-2 text-sm text-muted">
          Download the current formal resume for a complete overview of my experience, projects, education, and
          qualifications.
        </p>
        <a
          href={resumePdf}
          download="Larido_Fitzgerald_OJT_Resume.pdf"
          className="mt-4 inline-flex rounded-md border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
