import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion' 

  const Work = () => {
   return (
     <div className="pb-4">
        <motion.h2 whileInView={{ opacity: 1, y: 0}}
             initial={{ opacity: 0, y: -100}}
             transition={{ duration: 0.5}}  
             className="my-20 text-center text-4xl"> Work Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                      whileInView={{ opacity: 1, x: 0}}
                      initial={{ opacity: 0, x: -100}}
                      transition={{ duration: 1}}
                      className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                           
                        </p>
                    </motion.div>

                    <motion.div 
                      whileInView={{ opacity: 1, x: 0}}
                      initial={{ opacity: 0, x: -100}}
                      transition={{ duration: 1}}
                      className="w-full max-w-xl lg:w-3/4 mb-6">
                        <h3 className="mb-2 text-xl font-semibold ">
                            {experience.role}
                            <span className="text-sm font-medium text-stone-400"></span>
                        </h3>
                        <p className="mt-4 mb-6  text-sm text-stone-500">{experience.description}</p>

                        {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 bg-[#036BFF] p-2 pl-4 pr-4 text-xs rounded-full font-medium text-stone-300">{tech}</span>
                        ))}
                    </motion.div>


                 </div> 
            ))}
        </div>
     </div>
   )
 }
 
 export default Work