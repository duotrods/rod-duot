import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/Logo.png'
import { FaSquareBehance } from 'react-icons/fa6'

const Navbar = () => {
  return ( 
    <nav className="flex items-center justify-between py-6">  

        {/*Logo*/}
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={200} height={100} alt="logo"/>
            </a>
        </div>

         {/*Navigation 
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="/" className=''>Home</a>
            <a href="/" className=''>About</a>
            <a href="/" className=''>Portfolio</a>
            <a href="/" className=''>Contact Me</a>
        </div>
         
         Links*/}
         

         {/*Social Medi Links*/}
        <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
            <a href="https://www.linkedin.com/in/rod-olinor-du-ot-87a912278/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin />
            </a>
            <a href="https://www.behance.net/rodolinorduot"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Behance'>
                    <FaSquareBehance />
            </a>
            <a href="https://github.com/duotrods"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'>
                    <FaGithub />
            </a>
            <a href="https://www.instagram.com/duotrods_"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram/>
            </a> 
        </div>


    </nav>
  )
}

export default Navbar