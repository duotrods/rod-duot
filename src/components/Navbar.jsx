import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareBehance } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">

      {/* Nav links */}
      <div className="flex items-center gap-6">
        <a href="/#hero" className="text-sm text-stone-400 hover:text-white transition-colors">About</a>
        <a href="/#skills" className="text-sm text-stone-400 hover:text-white transition-colors">Skills</a>
        <a href="/#projects" className="text-sm text-stone-400 hover:text-white transition-colors">Projects</a>
        <a href="/#work" className="text-sm text-stone-400 hover:text-white transition-colors">Work</a>
        <a href="/#contact" className="text-sm text-stone-400 hover:text-white transition-colors">Contact</a>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rod-olinor-du-ot-87a912278/"
          target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-stone-400 hover:text-white transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/rodolinorduot"
          target="_blank" rel="noopener noreferrer" aria-label="Behance"
          className="text-stone-400 hover:text-white transition-colors">
          <FaSquareBehance />
        </a>
        <a href="https://github.com/duotrods"
          target="_blank" rel="noopener noreferrer" aria-label="Github"
          className="text-stone-400 hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/duotrods_"
          target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="text-stone-400 hover:text-white transition-colors">
          <FaInstagram />
        </a>
      </div>

    </nav>
  )
}

export default Navbar