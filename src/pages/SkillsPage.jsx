import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TECHNOLOGIES, TECHNOLOGIES2, TECHNOLOGIES3, EXTRA_SKILLS } from "../constants";
import { groupByCategory } from "../utils/groupByCategory";
import { floatVariants } from "../utils/floatVariants";

const ALL_SKILLS = [...TECHNOLOGIES, ...TECHNOLOGIES2, ...TECHNOLOGIES3, ...EXTRA_SKILLS];

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = groupByCategory(ALL_SKILLS);

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
          Tech Stacks
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-stone-400 text-sm mb-16"
        >
          {ALL_SKILLS.length} tools across {groups.length} categories
        </motion.p>

        <div className="pb-20 space-y-16">
          {groups.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-8">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-8">
                {group.items.map(({ image, delay, name }) => (
                  <motion.div
                    key={name}
                    initial="initial"
                    animate="animate"
                    variants={floatVariants(delay)}
                    className="flex flex-col items-center gap-2"
                  >
                    {image ? (
                      <img src={image} alt={name} className="w-10 h-10 lg:w-12 lg:h-12" />
                    ) : (
                      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg border border-dashed border-white/20 text-stone-500 text-[10px] uppercase">
                        {name.slice(0, 2)}
                      </div>
                    )}
                    <p className="text-xs text-stone-400">{name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
