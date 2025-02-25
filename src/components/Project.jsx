import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-wrap lg:justify-center gap-24 lg:items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3  overflow-hidden"
            >
              <img
                src={project.image}
                width={500}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              transition={{ duration: 1 }}
              className="p-8 sm:mb-10  max-w-xl lg:w-3/4 bg-white/5 border-2 border-white/15 backdrop-blur-[1.4px] rounded-lg"
            >
             
              <h3 className=" mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-6 text-stone-400 text-sm">
                {project.description}
              </p>
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="mr-2 bg-[#036BFF] p-2 pl-4 pr-4 text-xs font-medium rounded-full "
                >
                  {category}
                </span>
              ))}

              <p className="mt-8 mb-2 font-semibold text-xs">Tools I used:</p>
              <div className="flex gap-4">
                {project.technologies.map((technologies, index) => (
                  <div key={index} className="relative">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                      <img
                        src={technologies.image}
                        alt={technologies.name}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
