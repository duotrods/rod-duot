import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-stone-300"
              aria-label="Close"
            >
              <FiX size={16} />
            </button>

            {/* Left — image + category pills */}
            <div className="lg:w-2/5 flex-shrink-0 flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 lg:h-full object-cover"
              />
              <div className="hidden lg:flex flex-wrap gap-2 p-4 bg-slate-950/60 border-t border-white/10">
                {project.categories.map((cat, i) => (
                  <span key={i} className="bg-[#036BFF] px-3 py-1 text-xs font-medium rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — scrollable case study */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
              {/* Title + role */}
              <div>
                <h2 className="text-2xl font-bold text-stone-100 pr-8">{project.title}</h2>
                {project.role && (
                  <p className="mt-1 text-sm font-medium text-blue-400">{project.role}</p>
                )}
              </div>

              {/* Mobile category pills */}
              <div className="flex flex-wrap gap-2 lg:hidden">
                {project.categories.map((cat, i) => (
                  <span key={i} className="bg-[#036BFF] px-3 py-1 text-xs font-medium rounded-full">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Overview</p>
                <p className="text-sm text-stone-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Problem */}
              {project.problem && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">The Problem</p>
                  <p className="text-sm text-stone-300 leading-relaxed">{project.problem}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">The Solution</p>
                  <p className="text-sm text-stone-300 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {/* Tools */}
              {project.technologies.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Tools Used</p>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                          <img src={tech.image} alt={tech.name ?? ""} className="w-6 h-6" />
                        </div>
                        {tech.name && (
                          <p className="text-xs text-stone-400">{tech.name}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live link */}
              {project.link && (
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 rounded-full px-6 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Project <FiExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
