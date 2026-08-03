import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { CERTIFICATIONS } from "../constants";
import { groupByCategory } from "../utils/groupByCategory";

const TILT_CLASSES = ["-rotate-2", "rotate-2", "-rotate-3", "rotate-3"];

const CertificationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = groupByCategory(CERTIFICATIONS);

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
          Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-stone-400 text-sm mb-16"
        >
          {CERTIFICATIONS.length} certification{CERTIFICATIONS.length === 1 ? "" : "s"} earned
        </motion.p>

        <div className="pb-20 space-y-16">
          {groups.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-6">
                {group.category}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.items.map((cert, index) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/5 border border-white/15 backdrop-blur-[1.4px] rounded-xl p-6 flex flex-col cursor-pointer hover:border-white/30 transition-transform duration-300 ease-out hover:rotate-0 ${TILT_CLASSES[index % TILT_CLASSES.length]}`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-5 overflow-hidden">
                      {cert.issuerLogo ? (
                        <img src={cert.issuerLogo} alt={cert.issuer} className="w-7 h-7 object-contain" />
                      ) : (
                        <FiAward size={22} />
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-1 text-stone-100">{cert.title}</h3>
                    <p className="text-sm text-stone-400 mb-4">{cert.issuer}</p>
                    <div className="mt-auto flex items-center justify-between text-xs text-stone-500">
                      <span>{cert.date}</span>
                      <span className="flex items-center gap-1 text-stone-400">
                        View Certificate <FiExternalLink size={12} />
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
