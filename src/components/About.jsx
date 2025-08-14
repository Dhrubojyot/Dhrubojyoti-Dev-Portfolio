import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./about.scss";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const techIcons = [
    { name: "react", color: "#61DAFB", img: "./react.png" },
    { name: "nextjs", color: "#FFFFFF", img: "./next.jpeg" },
    { name: "googlecloud", img: "./googlecloud.png" },
    { name: "figma", color: "#FF9900", img: "./figma.png" },
    { name: "php", color: "#777BB4", img: "./php.png" },
    { name: "mongodb", color: "#47A248", img: "./mongo.png" },
    { name: "nodejs", color: "#339933", img: "./node.png" },
    { name: "mysql", color: "#3178C6", img: "./sql.png" },
    { name: "postman", color: "#3178C6", img: "./postman.png" },
    { name: "android", color: "#3178C6", img: "./android.jpeg" },
    { name: "docker", color: "#3178C6", img: "./docker.png" },
    { name: "kubernetes", color: "#3178C6", img: "./kubernetes.png" },
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about">
        <motion.div className="parallax-bg" style={{ y, opacity }} />

        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="header-section"
          >
            <h1>
              About <span>Me</span>
            </h1>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="content-wrapper">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-wrapper">
                <img src="/dhrubo.jpg" alt="Profile" />
                <motion.div
                  className="floating-shape shape1"
                  animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="floating-shape shape2"
                  animate={{ x: [-20, 20, -20], rotate: [360, 180, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            <div className="text-content">
              <div className="tabs-container">
                <motion.div
                  className="tab-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="story-content">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    I’m a Full Stack Developer and Cloud Engineer passionate about building scalable applications and solving complex challenges with innovative solutions.
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    With expertise in front-end, back-end, and cloud technologies, Ai Workflows and Automations, I create interactive web apps, efficient cloud architectures, and seamless user experiences. I've worked as a Full Stack Developer and contributed to open-source, and organized hackathons and coding competitions.
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    Technology, for me, is about creating impact, innovating, and continuously learning. 🚀
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="technologies-section" 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8 }}
                  >
                    <h3>Technologies I Know</h3>
                    <div className="tech-icons">
                      {techIcons.map((tech, index) => (
                        <motion.div 
                          key={tech.name} 
                          className="tech-icon" 
                          initial={{ opacity: 0, scale: 0 }} 
                          whileInView={{ opacity: 1, scale: 1 }} 
                          viewport={{ once: true }} 
                          whileHover={{ scale: 1.2 }}
                        >
                          <img src={tech.img} alt={tech.name} style={{ backgroundColor: tech.color }} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;