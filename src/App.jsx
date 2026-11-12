import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import About from './pages/About'
import Academic from './pages/Academic'
import DevLogs from './pages/DevLogs'
import Home from './pages/Home'
import NLPLLMRAG from './pages/NLP_LLM_RAG'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ThesisCaseStudy from './pages/ThesisCaseStudy'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <IntroLoader />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/nlp-llm-rag" element={<NLPLLMRAG />} />
          <Route path="/dev-logs" element={<DevLogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/student-discipline-management-system" element={<ThesisCaseStudy />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
