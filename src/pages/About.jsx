import SectionHeader from '../components/SectionHeader'

export default function About() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <SectionHeader
        label="/about"
        title="About Me"
        subtitle="Fitzgerald Larido · Information Technology Student"
      />

      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          I am an Information Technology student focused on building reliable systems and improving how data is
          used to support better decisions. My ePortfolio documents both academic progress and technical growth
          through structured learning records and project outputs.
        </p>

        <p>
          My current interests include full stack web development and DevOPS, I enjoy
          understanding how these areas connect in practical applications that are clear, maintainable, and
          useful to real users. I also like to do videography, video editing and content creation.
        </p>

        <p>
          This workspace is designed to show my development process, not just final outputs. As I continue my
          studies, I will keep refining this portfolio with stronger academic artifacts, clearer reflections,
          and more complete project documentation. This will be revamp into a professional e-portfolio in the future.
        </p>
      </div>
    </section>
  )
}
