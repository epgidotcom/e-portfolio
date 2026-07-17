import { Link } from 'react-router-dom'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  const featuredProject = projects[0]

  return (
    <>
      <section className="rounded-2xl border border-border bg-gradient-to-b from-card to-surface p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">/hello_world</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
          Hi, I&apos;m Fitzgerald Larido.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          IT Student building systems, exploring data, and documenting the process.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
          This ePortfolio serves as my academic and professional workspace, documenting my learning,
          projects, and growth as an Information Technology student. Will be fully converted to a professional e-portfolio in the future.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/academic">Explore My Learning</Button>
          <Button to="/projects" variant="ghost">
            View Projects
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono">Academic Workspace</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">2026</p>
        </div>
      </section>

      <section id="academic-course-expectations" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <SectionHeader
          label="/academic/course-expectations"
          title="Course Expectations"
          subtitle="ITC-C508 · ITE ELECTIVE 4 - Deep Learning and Advanced Natural Language Processing"
        />

        <article className="space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h3 className="text-xl font-semibold text-text">01 — Deep Learning-Based Predictive Models</h3>
            <p className="mt-3">
             In the PDF that I read, there's one example mention about a specific business problem which is customer defection or customer churn. Its where the customers stop buying products to the companies and shift to a competitor. This is very risky because most of the profits of the company is from customer retention. Deep learning can mitigate the risk by managing massive amounts of non structural data to predict future customer actions. 

The black box challenge can be solved by doing confidence level thresholds where a system analyzes a situation, generate an answer then calculate the confidence level for that prediction. If the confidence level is high, the action is automated and if it is low, the system flags the result for human review. Others way to do it by doing performance benchmarking which their value is established through multiple validation against historical data and prior best performing models to prove their reliability but for me the best way is to have a human that approve or edit the model’s outputs when the system is uncertain.

            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text">
              02 — Advanced NLP Models and Conversational Systems
            </h3>
            <p className="mt-3">
              In the PDF that I read, modern organizations use advanced NLP models such as RNNs, BERT, and ULMFiT to create conversational systems that can understand context and adapt to different users. These systems can consider a user's characteristics, communication style, emotional state, and needs to provide more personalized interactions. NLP is also being used in socially intelligent systems, voice interfaces, and educational tools with virtual characters or gaming elements. The system can then adjust the interaction based on how the user responds to these features.


            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text">03 — My Expectations for ITC-C508 - ITE ELECTIVE 4</h3>
            <p className="mt-3">
             My expectation for ITC-C508 is to gain a better understanding of Natural Language Processing and conversational AI. From the readings, I became more interested in how NLP models can understand context and adapt to different users and their needs. I hope to learn how to apply these concepts by building practical NLP projects instead of only studying the theories behind them. I believe that developing these skills will support my academic projects and future research, while also helping me become more prepared for a career in IT and AI-related fields.
 
            </p>
          </section>
        </article>
      </section>

      <section className="space-y-6">
        <SectionHeader
          label="/projects/featured"
          title="Featured Work"
          subtitle="Selected academic and technical work with room for future expansion."
        />

        {featuredProject ? <ProjectCard project={featuredProject} /> : null}

        <Link
          to="/projects"
          className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          See all projects
        </Link>
      </section>
    </>
  )
}
