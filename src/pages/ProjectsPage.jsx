import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import Navbar from "../components/Navbar";

const TABS = [
  { label: "All", match: () => true },
  {
    label: "UI/UX Design",
    match: (cats) =>
      cats.some((c) =>
        ["UI/UX Design", "Website Redesign", "Web Design", "App Design"].includes(c)
      ),
  },
  {
    label: "Web Development",
    match: (cats) => cats.some((c) => c === "Web Development"),
  },
  {
    label: "Graphic Design",
    match: (cats) =>
      cats.some((c) =>
        ["Graphic Design", "Social Media Design", "Jersey Design", "Print Design", "BI Report"].includes(c)
      ),
  },
  {
    label: "Mobile App",
    match: (cats) => cats.some((c) => c === "Mobile App Development"),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeMatch = TABS.find((t) => t.label === activeTab)?.match ?? (() => true);
  const filtered = PROJECTS.filter((p) => activeMatch(p.categories));

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

        {/* Page header */}
        <div className="flex items-center justify-between mt-4 mb-10">
          <Link
            to="/"
            className="text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center mb-4"
        >
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-stone-400 text-sm mb-12"
        >
          {PROJECTS.length} projects across UI/UX, Web Development, Graphic Design and more
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.label
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 border border-white/15 text-stone-400 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white/5 border border-white/15 backdrop-blur-[1.4px] rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-stone-100">{project.title}</h3>
                  <p className="text-stone-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Category pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((cat, ci) => (
                      <span
                        key={ci}
                        className="bg-[#036BFF] px-3 py-1 text-xs font-medium rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Tool icons */}
                  {project.technologies.length > 0 && (
                    <div className="flex gap-3 flex-wrap">
                      {project.technologies.map((tech, ti) => (
                        <div
                          key={ti}
                          title={tech.name}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
                        >
                          <img src={tech.image} alt={tech.name ?? ""} className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;
