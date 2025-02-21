import { PROJECTS } from "../constants"
import { motion } from 'framer-motion'


const Project = () => {
  return (
    <div className="pb-4">
        <motion.h2 whileInView={{ opacity: 1, y: 0}}
             initial={{ opacity: 0, y: -100}}
             transition={{ duration: 0.5}}  
             className="my-20 text-center text-4xl"> Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-10">
                    <motion.div 
                      whileInView={{ opacity: 1, x: 0}}
                      initial={{ opacity: 0, x: -100}}
                      transition={{ duration: 1}}
                      className="w-full lg:w-1/4">
                        <img src={project.image} 
                            width={250}
                            height={250}
                            alt={project.title} 
                            className="mb-6 rounded"/>
                    </motion.div>  

                    <motion.div 
                      whileInView={{ opacity: 1, x: 0}}
                      initial={{ opacity: 0, x: -100}}
                      transition={{ duration: 1}}
                      className="p-10 sm:mb-10 w-full max-w-xl lg:w-3/4 bg-white/5 border-2 border-white/20 backdrop-blur-[5.4px] rounded-lg"> 
                        <h3 className="mb-2 font-semibold text-2xl"> {project.title}</h3>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 bg-stone-900 p-2 text-s font-medium text-stone-300">{tech}</span>
                        ))}
                    </motion.div>
                 </div> 
                 
            ))}
        </div>
    </div>
  )
}

export default Project