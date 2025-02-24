import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import {
  FaAngular,
  FaBootstrap,
  FaElementor,
  FaGitAlt,
  FaSkype,
  FaWordpress,
} from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";
import { ImGoogleDrive } from "react-icons/im";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiFirebaseFill, RiNotionFill } from "react-icons/ri";
import {
  SiFramer,
  SiGooglecalendar,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
  TbBrandNextjs,
} from "react-icons/tb";
import { animate, motion } from "framer-motion";
import { TECHNOLOGIES, TECHNOLOGIES2, TECHNOLOGIES3 } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const imageVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Technologies / Tools
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14"
      >
        {TECHNOLOGIES.map(({ image, delay }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={imageVariants(delay)}
          >
            <img src={image} alt={`Technology ${index}`} className="w-20 h-20" />
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-15 flex flex-wrap items-center justify-center lg:gap-10 sm:gap-14"
      >
        {TECHNOLOGIES2.map(({ image, delay }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={imageVariants(delay)}
          >
            <img src={image} alt={`Technology ${index}`} className="w-20 h-20" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-15 flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14 "
      >
        {TECHNOLOGIES3.map(({ image, delay }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={imageVariants(delay)}
          >
            <img src={image} alt={`Technology ${index}`} className="w-20 h-20 fill-blue-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
