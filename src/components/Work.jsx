import { EXPERIENCES } from "../constants"

  const Work = () => {
   return (
     <div className="pb-4">
        <h2 className="my-20 text-center text-4xl"> Experience</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {experience.year}
                        </p>
                    </div>

                    <div className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold ">
                            {experience.role}
                            <span className="text-sm text-stone-400"> at {experience.company}</span>
                        </h3>
                        <p className="mb-4 text-stone-400">{experience.description}</p>

                        {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 bg-stone-900 p-2 text-s font-medium text-stone-300">{tech}</span>
                        ))}
                    </div>


                 </div> 
            ))}
        </div>
     </div>
   )
 }
 
 export default Work