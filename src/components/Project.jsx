import { PROJECTS } from "../constants"

const Project = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl"> Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-10">
                    <div>
                        <img src={project.image} 
                            width={250}
                            height={250}
                            alt={project.title} 
                            className="mb-6 rounded"/>
                    </div>  

                    <div className="lg:mt-10 sm:mb-10 w-full max-w-xl lg:w-3/4 bg-white/5 border-2 border-white/20 backdrop-blur-[5.4px] rounded-lg"> 
                        <h3 className="mb-2 font-semibold text-2xl"> {project.title}</h3>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 bg-stone-900 p-2 text-s font-medium text-stone-300">{tech}</span>
                        ))}
                    </div>
                 </div> 
                 
            ))}
        </div>
    </div>
  )
}

export default Project