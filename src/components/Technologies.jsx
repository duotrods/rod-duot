import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"
import { BsMicrosoftTeams } from "react-icons/bs"
import { CgFigma } from "react-icons/cg"
import { FaAngular, FaBootstrap, FaElementor, FaGitAlt, FaSkype, FaWordpress } from "react-icons/fa"
import { FaSlack } from "react-icons/fa6"
import { ImGoogleDrive } from "react-icons/im"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { RiFirebaseFill, RiNotionFill } from "react-icons/ri"
import { SiFramer, SiGooglecalendar, SiMysql, SiPhp, SiPhpmyadmin, SiTailwindcss, SiVite } from "react-icons/si"
import { TbBrandAdobeIllustrator, TbBrandAdobeIndesign, TbBrandAdobePhotoshop, TbBrandAdobeXd, TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y:-10 },
    animate: { y: [10, -10], 
    transition: { duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse" } }
})


const Technologies = () => {
  return (
    <div className="pb-24">

        <motion.h2 whileInView={{ opacity: 1, y: 0}}
             initial={{ opacity: 0, y: -100}}
             transition={{ duration: 1.5}}  
             className="my-20 text-center text-4xl"> Technologies / Tools
        </motion.h2>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1.5}}
          className="flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14 ">
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2)}>
                <CgFigma className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3)}>
                <TbBrandAdobeXd className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2.5)}>
                <TbBrandAdobePhotoshop className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}>
                <TbBrandAdobeIllustrator className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3.5)}>
                <SiFramer className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(7)}>
                <IoLogoHtml5 className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(4)}>
                <IoLogoCss3 className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(8.5)}>
                <BiLogoJavascript className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(5.5)}>
                <BiLogoTypescript className="text-7xl text-blue-500"/>
            </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1.5}}
          className="mt-15 flex flex-wrap items-center justify-center lg:gap-10 sm:gap-14">
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(4)}>
                <SiVite className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2)}>
                <TbBrandNextjs className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3.5)}>
                <FaAngular className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}>
                <SiTailwindcss className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(5.5)}>
                <FaBootstrap className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3)}>
                <SiPhp className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(8)}>
                <SiPhpmyadmin className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(7.5)}>
                <SiMysql className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2)}>
                <RiFirebaseFill className="text-7xl text-blue-500"/>
            </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1.5}}
          className="mt-15 flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14 ">
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(5)}>
                <FaWordpress className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2)}>
                <FaElementor className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(4.5)}>
                <FaGitAlt className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}>
                <SiGooglecalendar className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3.5)}>
                <ImGoogleDrive className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}>
                <FaSkype className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(8.5)}>
                <FaSlack className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(1.5)}>
                <BsMicrosoftTeams className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)}>
                <RiNotionFill className="text-7xl text-blue-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies