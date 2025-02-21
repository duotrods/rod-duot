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
import { TbBrandAdobeIllustrator, TbBrandAdobeIndesign, TbBrandAdobePhotoshop, TbBrandAdobeXd, TbBrandCss3, TbBrandFigma, TbBrandFramer, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl"> Technologies / Tools</h2>
        
        <div className="flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14 ">
            <div>
                <CgFigma className="text-7xl text-blue-500"/>
            </div>
            <div>
                <TbBrandAdobeIndesign className="text-7xl text-blue-500"/>
            </div>
            <div>
                <TbBrandAdobePhotoshop className="text-7xl text-blue-500"/>
            </div>
            <div>
                <TbBrandAdobeIllustrator className="text-7xl text-blue-500"/>
            </div>
            <div>
                <SiFramer className="text-7xl text-blue-500"/>
            </div>
            <div>
                <IoLogoHtml5 className="text-7xl text-blue-500"/>
            </div>
            <div>
                <IoLogoCss3 className="text-7xl text-blue-500"/>
            </div>
            <div>
                <BiLogoJavascript className="text-7xl text-blue-500"/>
            </div>
            <div>
                <BiLogoTypescript className="text-7xl text-blue-500"/>
            </div>
            

        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center lg:gap-10 sm:gap-14">
            <div>
                <SiVite className="text-7xl text-blue-500"/>
            </div>
            <div>
                <TbBrandNextjs className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaAngular className="text-7xl text-red-500"/>
            </div>
            <div>
                <SiTailwindcss className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaBootstrap className="text-7xl text-blue-500"/>
            </div>
            <div>
                <SiPhp className="text-7xl text-blue-500"/>
            </div>
            <div>
                <SiPhpmyadmin className="text-7xl text-blue-500"/>
            </div>
            <div>
                <SiMysql className="text-7xl text-blue-500"/>
            </div>
            <div>
                <RiFirebaseFill className="text-7xl text-blue-500"/>
            </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center lg:gap-14 sm:gap-14">
            <div>
                <FaWordpress className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaElementor className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaGitAlt className="text-7xl text-blue-500"/>
            </div>
            <div>
                <SiGooglecalendar className="text-7xl text-blue-500"/>
            </div>
            <div>
                <ImGoogleDrive className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaSkype className="text-7xl text-blue-500"/>
            </div>
            <div>
                <FaSlack className="text-7xl text-blue-500"/>
            </div>
            <div>
                <BsMicrosoftTeams className="text-7xl text-red-500"/>
            </div>
            <div>
                 <RiNotionFill className="text-7xl text-red-500"/>
            </div>
        </div>

    </div>
  )
}

export default Technologies