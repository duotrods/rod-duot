import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FiUser, FiTool, FiFolder, FiBriefcase, FiMail } from "react-icons/fi"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareBehance } from "react-icons/fa6"
import profilePic from "../../assets/rodprofile.png"
import logo from "../../assets/Logowhite.svg"

const NAV_ITEMS = [
  { id: "hero", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiTool },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "work", label: "Work", icon: FiBriefcase },
  { id: "contact", label: "Contact", icon: FiMail },
]

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/rod-olinor-du-ot-87a912278/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://www.behance.net/rodolinorduot", label: "Behance", Icon: FaSquareBehance },
  { href: "https://github.com/duotrods", label: "Github", Icon: FaGithub },
  { href: "https://www.instagram.com/duotrods_", label: "Instagram", Icon: FaInstagram },
]

const Sidebar = ({ onNavigate }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState("hero")
  const isProjectsRoute = location.pathname.startsWith("/projects")

  useEffect(() => {
    if (location.pathname !== "/") return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const handleSectionClick = (item) => (e) => {
    e.preventDefault()
    if (location.pathname === "/") {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate(`/#${item.id}`)
    }
    onNavigate?.()
  }

  const handleProjectsClick = (e) => {
    e.preventDefault()
    navigate("/projects")
    onNavigate?.()
  }

  return (
    <div className="flex h-full flex-col bg-white/5 border-r border-white/10 backdrop-blur-[1.4px] px-6 py-8">
      {/* Logo */}
      <a href="/" aria-label="Home" className="flex items-center mb-6">
        <img src={logo} className="h-8 w-auto" alt="logo" />
      </a>

      {/* Identity badge */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={profilePic}
          alt="Rod Du-ot"
          className="w-12 h-12 rounded-full object-cover border border-white/15"
        />
        <div>
          <p className="text-stone-100 font-semibold leading-tight">Rod Du-ot</p>
          <p className="text-xs text-stone-400">Web Developer · UI/UX Designer</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isProjects = item.id === "projects"
          const isActive = isProjects ? isProjectsRoute : !isProjectsRoute && activeId === item.id

          return (
            <a
              key={item.id}
              href={isProjects ? "/projects" : `/#${item.id}`}
              onClick={isProjects ? handleProjectsClick : handleSectionClick(item)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors border-l-2 ${
                isActive
                  ? "bg-white/10 border-blue-500 text-white"
                  : "border-transparent text-stone-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </a>
          )
        })}
      </nav>

      {/* Socials */}
      <div className="mt-auto flex items-center gap-4 pt-8 text-xl">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-stone-400 hover:text-white transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
