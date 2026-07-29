import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import profilePic from "../assets/rodprofile.png"
import contributionsChart from "../assets/github-contributions.svg?raw"
import { HERO_CONTENT, TECHNOLOGIES, TECHNOLOGIES2, TECHNOLOGIES3, PROJECTS, EXPERIENCES } from "../constants"
import { floatVariants } from "../utils/floatVariants"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.5 } },
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export const Hero = () => {
  return (
    <div id="hero" className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              src={profilePic}
              alt="Rod DU-ot"
              width={650}
              height={650}
              className="h-[460px] w-auto max-w-full object-contain"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col lg:items-start sm:items-center">
            <motion.h1 variants={childVariants} className="mt-5 pb-2 text-4xl font-bold text-stone-100 tracking-wider uppercase lg:text-8xl sm:text-7xl">
              Rod Du-ot
            </motion.h1>
            <motion.span variants={childVariants} className="mt-2 text-xl font-medium text-stone-200"> Software Developer | UI/UX Designer | Virtual Assistant</motion.span>
            <motion.p variants={childVariants} className="my-2 mx-w-lg py-6 text-md leading-[1.8] tracking-tighter text-sm">
              {HERO_CONTENT}
            </motion.p>
            <motion.a variants={childVariants} href="/Rod_Du-ot_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-blue-600 rounded-full p-3 pl-6 pr-6 text-md font-medium mb-10 hover:bg-blue-800 hover:text-stone-100">
              Download Resume
            </motion.a>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

const ROLES = ["Software Developer", "UI/UX Designer", "Web Developer"]
const REPEAT_COUNT = 6
const LOOP_ITEMS = Array.from({ length: REPEAT_COUNT }, () => ROLES).flat()
const LOOP_SHIFT = `${-100 / REPEAT_COUNT}%`

const RibbonTrack = ({ animate, children }) => (
  <motion.div
    className="flex w-max items-center"
    animate={animate}
    transition={{ duration: 16, ease: "linear", repeat: Infinity }}
  >
    {children}
  </motion.div>
)

export const RoleStrip = () => (
  <div className="relative my-24 h-56 lg:h-64">
    {/* Ribbon 1 — glass style, scrolls left */}
    <div
      className="absolute inset-x-0 top-[38%] -translate-y-1/2 -rotate-6 overflow-hidden border-y border-white/10 bg-white/5 py-4 backdrop-blur-sm shadow-xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <RibbonTrack animate={{ x: ["0%", LOOP_SHIFT] }}>
        {LOOP_ITEMS.map((role, index) => (
          <div key={index} className="flex items-center">
            <span className="whitespace-nowrap px-6 text-lg font-semibold uppercase tracking-tight text-stone-100 lg:text-2xl">
              {role}
            </span>
            <span className="text-base text-blue-500 lg:text-lg">•</span>
          </div>
        ))}
      </RibbonTrack>
    </div>

    {/* Ribbon 2 — solid blue accent, scrolls right */}
    <div
      className="absolute inset-x-0 top-[62%] -translate-y-1/2 rotate-6 overflow-hidden border-y border-blue-400/30 bg-blue-600 py-4 shadow-xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <RibbonTrack animate={{ x: [LOOP_SHIFT, "0%"] }}>
        {LOOP_ITEMS.map((role, index) => (
          <div key={index} className="flex items-center">
            <span className="whitespace-nowrap px-6 text-lg font-semibold uppercase tracking-tight text-white lg:text-2xl">
              {role}
            </span>
            <span className="text-base text-blue-950 lg:text-lg">•</span>
          </div>
        ))}
      </RibbonTrack>
    </div>
  </div>
)

export const Technologies = () => {
  return (
    <div id="skills" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Technologies / Tools
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-14"
      >
        {TECHNOLOGIES.map(({ image, delay, name }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={floatVariants(delay)}
            className="flex flex-col items-center gap-2"
          >
            <img src={image} alt={name} className="w-20 h-20" />
            <p className="text-xs text-stone-400">{name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-12 grid grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-10"
      >
        {TECHNOLOGIES2.map(({ image, delay, name }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={floatVariants(delay)}
            className="flex flex-col items-center gap-2"
          >
            <img src={image} alt={name} className="w-20 h-20" />
            <p className="text-xs text-stone-400">{name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-12 grid grid-cols-3 gap-8 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-14"
      >
        {TECHNOLOGIES3.map(({ image, delay, name }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={floatVariants(delay)}
            className="flex flex-col items-center gap-2"
          >
            <img src={image} alt={name} className="w-20 h-20" />
            <p className="text-xs text-stone-400">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const RECENT_PROJECTS = PROJECTS.slice(0, 5)

export const Project = () => {
  const navigate = useNavigate()

  return (
    <div id="projects" className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {RECENT_PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.slug}`)}
            className={`mb-8 flex flex-wrap lg:justify-center gap-24 lg:items-center cursor-pointer ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 overflow-hidden"
            >
              <img
                src={project.image}
                width={500}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              transition={{ duration: 1 }}
              className="p-8 sm:mb-10 max-w-xl lg:w-3/4 bg-white/5 border-2 border-white/15 backdrop-blur-[1.4px] rounded-lg"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-6 text-stone-400 text-sm">{project.description}</p>
              {project.categories.map((category, i) => (
                <span key={i} className="mr-2 bg-[#036BFF] p-2 pl-4 pr-4 text-xs font-medium rounded-full">
                  {category}
                </span>
              ))}
              <p className="mt-8 mb-2 font-semibold text-xs">Tools I used:</p>
              <div className="flex gap-4">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <img src={tech.image} alt={tech.name} className="w-8 h-8" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <Link
          to="/projects"
          onClick={(e) => e.stopPropagation()}
          className="bg-blue-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Browse All Projects →
        </Link>
      </div>
    </div>
  )
}

const PREVIEW_COUNT = 4

const getYear = (period) => period.match(/\d{4}/)?.[0] ?? period

export const Work = () => {
  const preview = EXPERIENCES.slice(0, PREVIEW_COUNT)

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {preview.map((experience, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-10 py-8 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors"
          >
            <span className="text-sm text-stone-500 w-14 shrink-0">{getYear(experience.period)}</span>
            <span className="font-semibold text-stone-100 flex-1">{experience.role}</span>
            <span className="text-sm text-stone-400 text-right shrink-0">{experience.company}</span>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12 mb-8">
        <Link
          to="/experience"
          className="bg-blue-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Full History →
        </Link>
      </div>
    </div>
  )
}

const GITHUB_USERNAME = "duotrods"
const CONTRIBUTIONS_LAST_YEAR = "383"

export const GithubActivity = () => (
  <div className="pb-4">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl"
    >
      GitHub Activity
    </motion.h2>

    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto bg-white/5 border-2 border-white/15 backdrop-blur-[1.4px] rounded-lg p-8"
    >
      <div className="github-chart w-full" dangerouslySetInnerHTML={{ __html: contributionsChart }} />
      <p className="mt-4 text-center text-sm text-stone-400">
        {CONTRIBUTIONS_LAST_YEAR} contributions in the last year
      </p>
    </motion.div>

    <div className="flex justify-center mt-12 mb-8">
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        View Profile →
      </a>
    </div>

    <style>{`
      .github-chart svg {
        display: block;
        width: 100%;
        height: auto;
      }
      .github-chart rect[style*="EEEEEE"] {
        fill: rgba(255, 255, 255, 0) !important;
        stroke: rgba(255, 255, 255, 0.2);
        stroke-width: 0.25px;
      }
    `}</style>
  </div>
)
