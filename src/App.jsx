import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Hero, RoleStrip, Technologies, Project, Work, GithubActivity } from "./pages/HomeSections"
import AppShell from "./components/shell/AppShell"
import ProjectsPage from "./pages/ProjectsPage"
import CaseStudyPage from "./pages/CaseStudyPage"
import CertificationsPage from "./pages/CertificationsPage"
import SkillsPage from "./pages/SkillsPage"
import ExperiencePage from "./pages/ExperiencePage"

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
    <div className="container mx-auto px-8 lg:px-24 pt-8 lg:pt-16">
      <Hero />
      <RoleStrip />
      <Technologies />
      <Project />
      <Work />
      <GithubActivity />
    </div>
  )
}

const App = () => (
  <AppShell>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<CaseStudyPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
  </AppShell>
)

export default App
