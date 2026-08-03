import { useLocation, useNavigate } from "react-router-dom"
import { FiUser, FiTool, FiFolder, FiBriefcase, FiAward, FiMail } from "react-icons/fi"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareBehance } from "react-icons/fa6"
import logo from "../../assets/Logowhite.svg"

const NAV_ITEMS = [
  { label: "Home", icon: FiUser, path: "/" },
  { label: "Skills", icon: FiTool, path: "/skills" },
  { label: "Projects", icon: FiFolder, path: "/projects" },
  { label: "Experience", icon: FiBriefcase, path: "/experience" },
  { label: "Certification", icon: FiAward, path: "/certifications" },
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

  const handleNavClick = (item) => (e) => {
    e.preventDefault()
    navigate(item.path)
    onNavigate?.()
  }

  return (
    <div className="flex h-full flex-col bg-white/5 border-r border-white/10 backdrop-blur-[1.4px] px-6 py-8">
      {/* Logo */}
      <a href="/" aria-label="Home" className="flex items-center gap-5 mb-10">
        <img src={logo} className="h-12 w-auto" alt="logo" />
        <span className="text-xl font-medium uppercase tracking-wide text-stone-100">Rod  Du-ot</span>
      </a>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive =
            item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path)

          return (
            <a
              key={item.path}
              href={item.path}
              onClick={handleNavClick(item)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-blue-500/10 text-white"
                  : "text-stone-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </a>
          )
        })}
      </nav>

      {/* Contact prompt */}
      <div className="mt-auto pt-8 border-t border-white/10">
        <p className="text-xs text-stone-400 leading-relaxed">
          For work, collabs & everything else, reach me at
        </p>
        <a
          href="mailto:duotrodolinor@gmail.com"
          className="mt-2 flex items-center gap-2 text-sm text-stone-200 hover:text-white transition-colors"
        >
          <FiMail size={14} />
          duotrodolinor@gmail.com
        </a>
      </div>

      {/* Socials */}
      <div className="pt-6 mt-6 border-t border-white/10">
        <p className="text-xs text-stone-400 mb-3">Socials</p>
        <div className="flex items-center gap-4 text-xl">
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
    </div>
  )
}

export default Sidebar
