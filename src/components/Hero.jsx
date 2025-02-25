import profilePic from '../assets/rodprofile.png'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren:0.5 } },
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5} },
}

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img 
                      src={profilePic} 
                      alt='Rod DU-ot'
                      width={650}
                      height={650}
                      initial={{x:100, opacity:0}}
                      animate={{x:0, opacity: 1}}
                      transition={{ duration: 1, delay: 1.5}}/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col lg:items-start  sm:items-center mt-10">
                    <motion.h1 variants={childVariants} className="mt-5 pb-2 text-4xl font-bold text-stone-100 tracking-wider uppercase lg:text-8xl sm:text-7xl">
                        Rod Du-ot
                    </motion.h1>
                    <motion.span variants={childVariants} className="mt-2 text-xl text-stone-200">Web Developer | Graphic Designer | UI/UX Designer | Virtual Assistant</motion.span>
                    <motion.p variants={childVariants} className="my-2 mx-w-lg py-6 text-md leading-[1.8] tracking-tighter text-sm text-justify">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a variants={childVariants} href="/myresume.pdf"
                        target='_blank'
                        rel='noopener noreferrer'
                        download
                        className='bg-blue-600 rounded-full p-4 text-md font-medium mb-10 hover:bg-blue-800 hover:text-stone-100'>
                            Downdload Resume
                    </motion.a>
                    
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero