import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
const items = [
{
id:1,
title: "Institute Attendance System",
img:"./tpi image.png",
desc:"The Institute Attendance System is a web-based platform that simplifies attendance recording and management for educational institutions. Catering to administrators and teachers dashboards, it offers distinct functionalities for each role. The dedicated dashboard keeps them informed of all system activity.",
demoLink: "https://www.linkedin.com/posts/dhrubojyoti-chakraborty-567857257_institute-attendance-system-activity-7204125699454980100-Ls15?utm_source=share&utm_medium=member_desktop",
},
{
id:2,
title: "EKART",
img:"./ekart.png",
desc:"I developed an E-Commerce website named EKART, a small clone of Flipkart. The site features newly arrived products and allows users to register, log in, and log out. Users can save products to their cart and mark items as favorites. EKART is designed to be user-friendly and mobile responsive. This is a frontend project focused on designing and implementing an e-commerce website. Surely visit it...!",
demoLink: "https://ekartdhrubo.netlify.app/",
},
{
id:3,
title: "Master Coding",
img:"./coder.png",
desc:"I developed a website named Master Coding, an educational platform for coding tutorials where students can learn and enhance their skills. This frontend project features beautiful animations, unique color combinations, and a fully responsive UI design. The website includes multiple sections, each crafted to provide an engaging learning experience. Please visit the site and explore its features!",
demoLink: "https://mastercodingdhrubo2.netlify.app/",
},
{
id:4,
title: "Technical Portfolio",
img:"./dhrubotech.png",
desc:"I developed my first portfolio, named Technical Portfolio. Using HTML, CSS, JavaScript, and various libraries and frameworks, I created this project to showcase my technical journey. Creating this portfolio marks my initial step in sharing my tech life and accomplishments with others, and I hope you will like it!",
demoLink: "https://dhrubotechnical.netlify.app/",
},
{
id:5,
title: "J A R V I S",
img:"./jarvis.jpg",
desc:"I’ve created JARVIS, an AI voice assistant for my college, capable of providing all the essential information about the institution. It includes various features such as sending location, making emergency calls via voice commands, setting alarms, managing dates and time, playing music, performing calculations, and even telling jokes. JARVIS is powered by HTML, CSS, and JavaScript, making it an efficient and interactive assistant for multiple tasks.  ",
demoLink: "https://tpijarvis.netlify.app/",
},
];

const Single =({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref,});

    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);
    
    return (<section>
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""/>
            </div>
            <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.demoLink, "_blank")}>
              See Demo
            </button>
            </motion.div>
        </div>
        </div>
    </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"],});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping:30,
    });
return ( 
    <div className="portfolio">
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX}}className="progressBar"></motion.div>
        </div>
    {items.map((item)=>(
        <Single item={item} key={item.id}/>
    ))}

</div>
);
};
export default Portfolio