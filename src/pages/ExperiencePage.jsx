import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { EXPERIENCES } from "../constants";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-stone-300 antialiased min-h-screen">
      <div className="container mx-auto px-8 lg:px-24 pt-8 lg:pt-16">
        {/* Page header */}
        <div className="flex items-center justify-between mb-10">
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
          Work Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-stone-400 text-sm mb-16"
        >
          {EXPERIENCES.length} roles across my career so far
        </motion.p>

        <div className="pb-20">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 mb-4 lg:mb-0"
              >
                <div className="pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-400 text-xs shrink-0" />
                    <p className="text-sm font-semibold text-white tracking-wide">
                      {experience.period}
                    </p>
                  </div>
                  {experience.employment && (
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-stone-500 text-xs shrink-0" />
                      <p className="text-xs text-stone-400">{experience.employment}</p>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-stone-500 text-xs shrink-0" />
                    <p className="text-xs text-stone-400">{experience.location}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 mb-6"
              >
                <h3 className="mb-2 text-xl font-semibold">
                  {experience.role}
                  <br />
                  <span className="text-sm font-medium text-stone-400">{experience.company}</span>
                </h3>
                <p className="mt-2 mb-6 text-sm text-stone-500">{experience.description}</p>

                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 bg-[#036BFF] p-2 pl-4 pr-4 text-xs rounded-full font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
