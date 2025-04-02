//Projects
import hrportal from "../assets/projects/HR Portal.png";
import taskade from "../assets/projects/Taskadee.png";
import mistify from "../assets/projects/Mistify.png";
import mistify2 from "../assets/projects/Mistify Admin.png";
import instagram from "../assets/projects/instagram.png";
import vaxcare from "../assets/projects/VaxCare.png";
import alfa from "../assets/projects/Alfa.png";
import csfs from "../assets/projects/CSFS.png";
import merryls from "../assets/projects/Merryls.png";
import beta from "../assets/projects/Betapeak.png";
import scatter from "../assets/projects/Scatter.png";
import jersey1 from "../assets/projects/jersey1.png";
import jersey2 from "../assets/projects/jersey2.png";
import jersey3 from "../assets/projects/jersey3.png";
import DOSTcerts from "../assets/projects/DOSTCerts.png";
import DOSTposter from "../assets/projects/DOSTPosters.png";

//Brand Logo
import xd from "../assets/tools/adobe-xd.svg";
import angular from "../assets/tools/angular.svg";
import bootstrap from "../assets/tools/bootstrap.svg";
import css from "../assets/tools/css.svg";
import elementor from "../assets/tools/elementor.png";
import figma from "../assets/tools/figma.svg";
import firebase from "../assets/tools/firebase.svg";
import fishbowl from "../assets/tools/fishbowl.svg";
import flutter from "../assets/tools/flutter.svg";
import framer from "../assets/tools/framer.avif";
import git from "../assets/tools/git.svg";
import html from "../assets/tools/html.svg";
import illustrator from "../assets/tools/illustrator.svg";
import ionic from "../assets/tools/ionic.svg";
import js from "../assets/tools/js.svg";
import myadmin from "../assets/tools/myadmin.png";
import mysql from "../assets/tools/mysql.svg";
import next from "../assets/tools/next.svg";
import notion from "../assets/tools/notion.png";
import photoshop from "../assets/tools/photoshop.svg";
import php from "../assets/tools/php.svg";
import react from "../assets/tools/react.svg";
import skype from "../assets/tools/skype.svg";
import slack from "../assets/tools/slack.svg";
import tailwind from "../assets/tools/tailwind.svg";
import teams from "../assets/tools/teams.svg";
import typescript from "../assets/tools/typescript.svg";
import vite from "../assets/tools/vite.svg";
import wordpress from "../assets/tools/wordpress.svg";
import xampp from "../assets/tools/xampp.svg";

//Icons
import { FaPencilRuler, FaLaptopCode, FaMobileAlt, FaDraftingCompass, FaCode, FaLayerGroup } from "react-icons/fa";
import { MdChatBubble, MdWorkOutline, MdSupportAgent } from "react-icons/md";



export const HERO_CONTENT = `I’m an experience UI/UX Designer, Graphic Designer, Virtual Assistant, and Mobile App & Web Developer with 4+ years in the field, creating Digital Experiences You Deserve. I am a graduate of Bachelor of Science in Information Technology ind Davao del Norte State College. I have worked with both small and large firms, including Merryl’s Consumer Goods Trading, Scentific, Aces Polytecnic College, and the Department of Science and Technology - Davao del Norte. I am currently working as a Web Designer and Full Stack Developer  at SixEleven Global Services and Solutions. I am also open to part-time opportunities or project-based work.`;

export const ABOUT_TEXT = `I am a highly motivated and detail-oriented professional with a passion for creating innovative and user-friendly digital experiences. I have a strong background in UI/UX design, web development, and graphic design, with a proven track record of delivering high-quality projects that exceed client expectations. I am proficient in a wide range of design and development tools, including Figma, Adobe Creative Suite, and Vite.js, and I am always eager to learn new technologies and expand my skill set. I am committed to delivering exceptional results and providing the best possible experience for my clients and end users.`;

export const EXPERIENCES = [
  {
    loc: "Davao City, Philippines",
    role: "UI/UX Designer | Fullstack Developer",
    company: "SixEleven Global Services and Solutions",
    description: `The Developer of the 611 HR Portal, a comprehensive platform for human resources, combining Figma for UI/UX design, WordPress for content management, and Elementor for responsive, visually engaging layouts. Developed locally with XAMPP, the project was smoothly transitioned to the company’s hosting server. This portal optimizes HR processes while delivering a modern and user-friendly experience tailored to the organization’s requirements.`,
    technologies: ["Figma", "Wordpress", "Elementor", "XAMPP"],
  },
  {
    loc: "Australia (Remote)",
    role: "Wordpress Developer",
    company: "DCB Digitals",
    description: `Developed and maintained WordPress websites for various clients, ensuring optimal performance and user experience. Collaborated with designers to implement custom themes and plugins, enhancing website functionality and aesthetics.`,
    technologies: ["Wordpress", "Elementor Pro", "Bricks", "Breakdance", "Yoast SEO"],
  },
  {
    loc: "Panabo City, Philippines",
    role: "IT Support Specialist",
    company: "Aces Polytechnic College",
    description: `Provided technical support to students and faculty, troubleshooting hardware and software issues. Managed the school's network infrastructure and ensured data security.`,
    technologies: ["Windows", "Cisco", "MS Offices"],
  },
  {
    loc: "Panabo City, Philippines",
    role: "Graphic Designer| Web Developer | IT Support Specialist",
    company: "Merryl's Consumer Goods Trading",
    description: `Developed a modern and highly efficient website using Vite.js. The project focused on providing a seamless user experience with fast load times and a clean, intuitive design that showcases their products and services effectively.`,
    technologies: ["Vite js", "React", "Windows", "MS Offices", "Photoshop"],
  },
  {
    loc: "Remote (USA)",
    role: "Chat Suppot Agent",
    company: "Whopp Connect",
    description: `Resolved an average of 50+ customer inquiries daily, achieving a 95% first-contact resolution rate. Assisted customers with real-time delivery tracking, reducing escalations by 30%.`,
    technologies: ["ManyChats", "SalesHub", "Genysys", "TimeDoctor", "Excel"],
  },
];

export const PROJECTS = [
  {
    categories: ["UI/UX Design", "Web Design", "Web Development"],
    title: "SixEleven HR Portal",
    image: hrportal,
    description:
      "I created the 611 HR Portal, a comprehensive platform for human resources, -combining Figma for UI/UX design, WordPress for content management, and Elementor for responsive, visually engaging layouts. Developed locally with XAMPP, the project was smoothly transitioned to the company’s hosting server. This portal optimizes HR processes while delivering a modern and user-friendly experience tailored to the organization’s requirements.",
    technologies: [
      { name: "Figma", image: figma },
      { name: "WordPress", image: wordpress },
      { name: "Elementor", image: elementor },
      { name: "XAMPP", image: xampp },
    ],
  },
  {
    categories: ["UI/UX Design", "Web Design", "Web Development"],
    title: "DOST CSFS",
    image: csfs,
    description:
      "During my time at the Department of Science and Technology - Davao del Norte (DOST-DavNor), I developed the Customer Satisfaction Feedback System (CSFS). This innovative system was designed to streamline and enhance the process of collecting, analyzing, and utilizing customer feedback to improve the services of the Technical Service Division. the CSFS significantly improved the efficiency of feedback",
    technologies: [{ image: figma}, {image: photoshop}, {image: html}, {image: tailwind}, {image:php}, {image: js}, {image: xampp }],
  },
  {
    categories: ["Web Development"],
    title: "Merryl's Consumer Goods Trading",
    image: merryls,
    description:
      "I developed a modern and highly efficient website using Vite.js. The project focused on providing a seamless user experience with fast load times and a clean, intuitive design that showcases their products and services effectivelyBy leveraging Vite.js, I ensured a responsive, high-performance site that works seamlessly across all devices.",
    technologies: [{ image: vite },{ image: react }, { image: js }],
  },
  {
    categories: ["Mobile App Development"],
    title: "Beta Peak",
    image: beta,
    description:
      "For our capstone project, I developed the Beta Peak Mobile App using Ionic Angular, ensuring a smooth, cross-platform experience for users. The app is fully integrated with our website, allowing seamless data exchange and a consistent user experience across both platforms.",
    technologies: [{ image:ionic}, { image: angular }, { image: typescript }, { image: firebase }],
  },
  {
    categories: ["UI/UX Design", "BI Report"],
    title: "SCATTER PLOT BI REPORT",
    image: scatter,
    description:
      "I developed an interactive scatter plot using Fishbowl Inventory, allowing for in-depth analysis of data relationships. Integrated filtering options for dynamic visualization, enabling users to view specific data ranges and insights. The scatter plot provides a comprehensive overview of inventory trends and performance metrics, empowering users to make informed decisions.",
    technologies: [{ image: figma }, { image: fishbowl }, { image: html }, { image: css }, { image: js }, { image: mysql }],
  },
  {
    categories: ["UI/UX Design", "Web Design"],
    title: "Alfa Manufacturing Group Website",
    image: alfa,
    description:
      "Alfa Manufacturing Group’s official website, designed to showcase their products and services. The website features a clean, modern design that highlights the company’s commitment to quality and innovation. With a user-friendly interface and responsive layout, the site provides an engaging experience for visitors.",
    technologies: [{ image: figma }],
  },
  {
    categories: ["UI/UX Design", "App Design"],
    title: "Mistify: Smart Humidity Management Solution for Plants Cultivators",
    image: mistify,
    description:
      "Smart assistant for managing humidity in plant cultivation. With cutting-edge features designed for efficiency, Mistify helps you monitor, control, and optimize your mushroom growth environment effortlessly. Mistify ensures your plants thrive under ideal conditions, boosting yields and reducing waste.",
    technologies: [{ image: figma }, { image: photoshop }],
  },
  {
    categories: ["UI/UX Design", "Web Design"],
    title: "Mistify Admin UI",
    image: mistify2,
    description:
      "Centralized hub for managing and monitoring your mushroom cultivation operations. Designed for precision and clarity, the portal provides comprehensive insights into humidity, temperature, and system performance.  Take your plant cultivation management to the next level with the Mistify Admin Portal!",
    technologies: [{ image: figma }],
  },
  {
    categories: ["UI/UX Design", "App Design"],
    title: "Taskade",
    image: taskade,
    description:
      "A productivity app designed to simplify your life! Whether you’re managing tasks, organizing projects, or brainstorming ideas, Taskade provides a seamless and intuitive experience for everyone, including those with visual impairments.",
    technologies: [{ name: "Figma", image: figma }],
  },
  {
    categories: ["UI/UX Design", "App Design"],
    title: "Instagram UI Redesign",
    image: instagram,
    description:
      "This is my personal Instagram’s re imagined user interface design, blending modern aesthetics with intuitive functionality to enhance your social experience. Whether you're scrolling through your feed or managing your brand, this interface ensures everything is just a tap away. Experience the future of social interaction with Instagram’s refined UI design!",
    technologies: [{ image: figma }],
  },
  {
    categories: ["UI/UX Design", "App Design"],
    title: "VaxCare",
    image: vaxcare,
    description:
      "Your comprehensive solution for vaccine scheduling and management. Designed to prioritize user convenience, VaxCare ensures that individuals and families stay up-to-date with their immunizations effortlessly. Stay protected, stay informed, and stay healthy with VaxCare!",
    technologies: [{ image: figma }],
  },
  {
    categories: ["Graphic Design", "Jersey Design"],
    title: "Merryl's Yellow Jersey Design",
    image: jersey1,
    description:
      "I designed this basketball jersey for Merryl’s Consumer Goods Trading , ensuring a striking combination of bold black and yellow patterns to highlight the team's identity. The design features with custom patterns that blend tradition and modernity, delivering a professional and cohesive look for the players.",
    technologies: [{ image: photoshop }],
  },
  {
    categories: ["Graphic Design", "Jersey Design"],
    title: "Merryl's Purple Jersey Design",
    image: jersey3,
    description:
      "I designed this basketball jersey for Merryl’s, this vibrant jersey was crafted for Merryl’s, featuring a unique blend of pink and purple stripes for a standout look. The number at the front and back is showcased in a bold and playful style, reflecting energy and enthusiasm while maintaining a professional aesthetic.",
    technologies: [{ image: photoshop }],
  },
  {
    categories: ["Graphic Design", "Jersey Design"],
    title: "Lacno S&G Jersey Design",
    image: jersey2,
    description:
      "I designed this basketball jersey for Lacno Sand & Gravel, I developed a minimalist yet impactful black jersey with white accents. The clean design ensures a polished and timeless appearance suitable for competitive and recreational games.",
    technologies: [{ image: photoshop }],
  },
  {
    categories: ["Graphic Design", "Print Design"],
    title: "DOST Certificates",
    image: DOSTcerts,
    description:
      "I designed certificates for DOST XI, focusing on creating visually appealing layouts that adhered to the organization's branding guidelines. Each certificate was thoughtfully crafted to reflect professionalism and a sense of prestige, using appropriate typography, color schemes, and layouts that aligned with DOST XI's visual identity.",
    technologies: [{ image: photoshop }],
  },
  {
    categories: ["Graphic Design", "Social Media Design"],
    title: "DOST FB Posters",
    image: DOSTposter,
    description:
      "I created a series of congratulatory posters for DOST XI, celebrating the accomplishments of their newly appointed Science Research Specialists. The layouts featured a balanced combination of vibrant visuals, clear typography, and cohesive elements that drew attention to the honorees' achievements.",
    technologies: [{ image: photoshop }],
  },
];

export const CONTACT = {
  address: "Davao City, Philippines", 
  phoneNo: "+63 9518 4413 42 ",
  email: "duotrodolinor@gmail.com",
};


export const TECHNOLOGIES = [
  {
    image: figma,
    delay: 2,
  },
  {
    image: xd,
    delay: 3,
  },
  {
    image: photoshop,
    delay: 2.5,
  },
  {
    image: illustrator,
    delay: 6,
  },
  {
    image: framer,
    delay: 3.5,
  },
  {
    image: html,
    delay: 7,
  },
  {
    image: css,
    delay: 4,
  },
  {
    image: js,
    delay: 8.5,
  },
  {
    image: typescript,
    delay: 5.5,
  },
  
];

export const TECHNOLOGIES2 = [
  {
    image: vite,
    delay: 4,
  },
  {
    image: next,
    delay: 2,
  },
  {
    image: angular,
    delay: 3.5,
  },
  {
    image: tailwind,
    delay: 6,
  },
  {
    image: bootstrap,
    delay: 5.5,
  },
  {
    image: php,
    delay: 3,
  },
  {
    image: myadmin,
    delay: 8,
  },
  {
    image: mysql,
    delay: 7.5,
  },
  {
    image: firebase,
    delay: 2,
  },
  
];

export const TECHNOLOGIES3 = [
  {
    image: react,
    delay: 1.5,
  },
  {
    image: ionic,
    delay: 5,
  },
  {
    image:flutter,
    delay: 4,
  },
  {
    image: wordpress,
    delay: 2,
  },
  {
    image: elementor,
    delay: 3.5,
  },
  {
    image: git,
    delay: 7,
  },
  {
    image: fishbowl,
    delay: 5.5,
  },
  {
    image: slack,
    delay: 6.5,
  },
  {
    image: skype,
    delay: 2.5,
  },

];




export const SERVICES = [
  { 
    icon: FaPencilRuler,   
    title: "Graphic Design", 
    description: "I specialize in logo design, jersey layouts, signage, social media posts, and certificates." 
  },
  { 
    icon: FaDraftingCompass, 
    title: "UI/UX Design", 
    description: "Creating seamless and intuitive user experiences from wireframes to interactive designs." 
  },
  { 
    icon: FaLaptopCode, 
    title: "Prototyping", 
    description: "Building responsive websites using PHP, HTML, CSS, Vite.js, and React." 
  },
  { 
    icon: FaLayerGroup, 
    title: "Wireframing", 
    description: "Designing wireframes to outline clear user flows and layouts for websites and apps." 
  },
  { 
    icon: FaCode, 
    title: "Web Dev", 
    description: "Building dynamic websites using PHP, HTML, CSS, Vite.js, and React." 
  },
  { 
    icon: FaMobileAlt, 
    title: "Mobile Dev", 
    description: "Developing apps using Flutter and Ionic Angular for iOS and Android." 
  },
  { 
    icon: MdSupportAgent, 
    title: "IT Support",
    description: "Providing technical support to students and faculty, troubleshooting hardware and software issues." 
  },
  { 
    icon: MdChatBubble, 
    title: "Chat Support",
    description: "Resolving customer inquiries and providing real-time delivery tracking and support." 
  },
  { 
    icon: MdWorkOutline, 
    title: "Virtual Assistant",
    description: "Assisting clients with administrative tasks, email management, and customer support." 
  },
];