import { useRef } from "react";
import "./services.scss";
import {animate, motion, useInView} from "framer-motion";

const variants = {
    initial: {
    x: -500,
    y: 100,
    opacity: 0,
    },
    animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
    duration: 1,
    staggerChildren: 0.1,
    },
    },
    };

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"});
return (
<motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
<motion.div className="textContainer" variants={variants}>
<p>
"Level up your code" I focus on scaling your application
<br/> and driving innovation forward
</p>
<hr />
</motion.div>
<motion.div className="titleContainer" variants={variants}>
    <div className="title">
        <img src="/c2.jpg" alt=""/>
        <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Skills
        </h1>
    </div>
    <div className="title">
        <h1>
            <motion.b whileHover={{color:"orange"}}>For Unique</motion.b> Project
        </h1>
        <button>My Tech Stack !</button>
    </div>
</motion.div>
<motion.div className="listContainer" variants={variants}>
<motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
<h2>Front-End Development</h2>
<br/>
<p>
I have over three years of experience in web development, specializing in Front End Development with proficiency in HTML, CSS, JavaScript, React, Sass, WordPress, and Figma. My dedication to my work ensures that I don't stop until I've successfully debugged any issues that arise.
</p>
</motion.div>

<motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
<h2>Back-End / Frameworks</h2>
<br/>
<p>
In Back-End Development. I am proficient in MongoDB, MySQL, Oracle Database, and PhpMyAdmin, and I utilize Frameworks such as Bootstrap, Next.js, Express.js, and Django. My passion for continuous learning and improvement drives me to stay updated with the latest technologies.
</p>
</motion.div>
<motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
<h2>Programming Knowledge</h2>
<br/>
<p>
As a Computer Science Engineering student, I have a solid foundation in programming, with proficiency in C programming, Python programming, and JAVA programming. I have extensive experience in Data Structures and Algorithms (DSA) with both Java and C. My projects reflects my skills.
</p>
</motion.div>
<motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
<h2>Cloud Computing With GCP</h2>
<br/>
<p>
I have two years of experience with the Google Cloud Platform and have been honored twice in the Hall of Fame for the Google Cloud Arcade. My expertise includes Kubernetes, DevOps, Google Kubernetes Engine (GKE), Identity and Access Management (IAM), Cloud Storage, Looker, Google BigQuery, Cloud Monitoring.
</p>
</motion.div>
</motion.div>
</motion.div>
);
};
export default Services;