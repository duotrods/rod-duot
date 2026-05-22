import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PROJECTS } from "../constants";
import Navbar from "../components/Navbar";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-stone-300">
        <div className="text-center">
          <p className="text-xl mb-4">Project not found.</p>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = index > 0 ? PROJECTS[index - 1] : null;
  const nextProject = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null;

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[50vh] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-8 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-bold text-stone-100"
          >
            {project.title}
          </motion.h1>
          {project.role && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-blue-400 font-medium text-sm lg:text-base"
            >
              {project.role}
            </motion.p>
          )}
        </div>
      </motion.div>

      <div className="container mx-auto px-8">
        {/* Back link */}
        <div className="mt-6 mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors"
          >
            <FiArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>

        {/* Info bar: categories + tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-white/10"
        >
          <div className="flex flex-wrap gap-2">
            {project.categories.map((cat, i) => (
              <span key={i} className="bg-[#036BFF] px-3 py-1 text-xs font-medium rounded-full">
                {cat}
              </span>
            ))}
          </div>

          {project.technologies.length > 0 && (
            <div className="flex gap-3 flex-wrap ml-auto">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  title={tech.name}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                    <img src={tech.image} alt={tech.name ?? ""} className="w-5 h-5" />
                  </div>
                  {tech.name && (
                    <p className="text-xs text-stone-500">{tech.name}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Case study sections */}
        <div className="max-w-3xl mx-auto space-y-16 pb-20">

          {/* Overview */}
          <Section label="Overview" delay={0.4}>
            <p className="text-stone-300 leading-relaxed">{project.description}</p>
          </Section>

          {/* Problem */}
          {project.problem && (
            <Section label="The Problem" delay={0.45}>
              <p className="text-stone-300 leading-relaxed">{project.problem}</p>
            </Section>
          )}

          {/* Process */}
          {project.process && (
            <Section label="The Process" delay={0.5}>
              <p className="text-stone-300 leading-relaxed">{project.process}</p>
              {project.images?.length > 0 && (
                <ImageGrid images={project.images} />
              )}
            </Section>
          )}

          {/* Solution */}
          {project.solution && (
            <Section label="The Solution" delay={0.55}>
              <p className="text-stone-300 leading-relaxed">{project.solution}</p>
            </Section>
          )}

          {/* Live link */}
          {project.link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                View Project <FiExternalLink size={14} />
              </a>
            </motion.div>
          )}
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-white/10 py-12 flex items-center justify-between gap-4">
          {prevProject ? (
            <button
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="flex items-center gap-3 group text-left max-w-xs"
            >
              <FiChevronLeft size={20} className="text-stone-500 group-hover:text-white transition-colors flex-shrink-0" />
              <div>
                <p className="text-xs text-stone-500 mb-1">Previous</p>
                <p className="text-sm text-stone-300 group-hover:text-white transition-colors line-clamp-1">{prevProject.title}</p>
              </div>
            </button>
          ) : <div />}

          {nextProject ? (
            <button
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="flex items-center gap-3 group text-right max-w-xs ml-auto"
            >
              <div>
                <p className="text-xs text-stone-500 mb-1">Next</p>
                <p className="text-sm text-stone-300 group-hover:text-white transition-colors line-clamp-1">{nextProject.title}</p>
              </div>
              <FiChevronRight size={20} className="text-stone-500 group-hover:text-white transition-colors flex-shrink-0" />
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};

const Section = ({ label, delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">{label}</p>
    {children}
  </motion.div>
);

const ImageGrid = ({ images }) => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {images.map((src, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="rounded-xl overflow-hidden border border-white/10"
      >
        <img src={src} alt="" className="w-full h-auto object-cover" />
      </motion.div>
    ))}
  </div>
);

export default CaseStudyPage;
