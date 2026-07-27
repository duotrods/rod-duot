import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Project from "./components/Project"
import Work from "./components/Work"
import Services from "./components/Services"
import Contact from "./components/Contact"
import AppShell from "./components/shell/AppShell"
import ProjectsPage from "./pages/ProjectsPage"
import CaseStudyPage from "./pages/CaseStudyPage"

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    })
    return () => cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <div className="container mx-auto px-8">
      <Hero />
      <Technologies />
      <Project />
      <Work />
      <Services />
      <Contact />
    </div>
  )
}

const App = () => (
  <AppShell>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<CaseStudyPage />} />
    </Routes>
  </AppShell>
)

export default App
