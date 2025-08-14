import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./gallery.scss";

const Gallery = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const galleryItems = [
    {
      id: 1,
      image: "./dev1.jpeg",
      title: "DevFest Kolkata 2024",
      description: "Attended DevFest Kolkata 2024 to explore the latest in AI and Cloud Technologies",
      location: "The Westin Kolkata Rajarhat, India"
    },
    {
      id: 2,
      image: "./dev2.jpeg",
      title: "DevFest Kolkata 2024",
      description: "Attended DevFest Kolkata 2024 to explore the latest in AI and Cloud Technologies",
      location: "The Westin Kolkata Rajarhat, India"
    },
    {
      id: 3,
      image: "./dev3.jpeg",
      title: "DevFest Kolkata 2024",
      description: "Attended DevFest Kolkata 2024 to explore the latest in AI and Cloud Technologies",
      location: "The Westin Kolkata Rajarhat, India"
    },
    {
      id: 4,
      image: "./ccd1.jpeg",
      title: "Google Cloud Community Day 2024",
      description: "Attended Google Cloud Community Day 2024 to explore the latest in AI and Cloud Technologies",
      location: "Biswa Bangla Exhibition Center, Kolkata, India"
    },
    {
      id: 5,
      image: "./ccd2.jpeg",
      title: "Google Cloud Community Day 2024",
      description: "Attended Google Cloud Community Day 2024 to explore the latest in AI and Cloud Technologies",
      location: "Biswa Bangla Exhibition Center, Kolkata, India"
    },
    {
      id: 6,
      image: "./frost2.jpeg",
      title: "FrostHacks Season 1 Hackathon",
      description: "Participated in FrostHacks Season 1 Hackathon, out off 100+ projects our project was in top 10",
      location: "Academy of Technology (AOT), India"
    },
    {
      id: 7,
      image: "./frost1.jpeg",
      title: "FrostHacks Season 1 Hackathon",
      description: "Participated in FrostHacks Season 1 Hackathon, out off 100+ projects our project was in top 10",
      location: "Academy of Technology (AOT), India"
    },
    {
      id: 8,
      image: "./ccd4.jpeg",
      title: "Google Cloud Community Day 2024",
      description: "Attended Google Cloud Community Day 2024 to explore the latest in AI and Cloud Technologies",
      location: "Biswa Bangla Exhibition Center, Kolkata, India"
    },
    {
      id: 9,
      image: "./kube1.jpeg",
      title: "Kube Kulture 2025",
      description: "Attended Kube Kulture 2025, a conference on CNCF, Cloud, Grafana and Kubernetes, where I learned about the latest trends in the DevOps industry",
      location: "Mani Casadona, Kolkata, India"
    },
    {
      id: 10,
      image: "./kube2.jpeg",
      title: "Kube Kulture 2025",
      description: "Attended Kube Kulture 2025, a conference on CNCF, Cloud, Grafana and Kubernetes, where I learned about the latest trends in the DevOps industry",
      location: "Mani Casadona, Kolkata, India"
    },
    {
      id: 11,
      image: "./hexa2.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 12,
      image: "./hexa1.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 13,
      image: "./hexa3.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 14,
      image: "./hexa4.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 15,
      image: "./hexa5.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 16,
      image: "./hexa6.jpg",
      title: "HexaFalls Hackathon 2025",
      description: "Participated in HexaFalls Hackathon 2025, & I was among the Top Evangelists as well",
      location: "JIS University, India"
    },
    {
      id: 17,
      image: "./aperter.jpg",
      title: "Rescon 2025",
      description: "Attended Rescon 2025, a conference on Tech, AI, and Cloud, where I learned about the latest trends in the tech industry",
      location: "Rabindra Bhaban Rishra, India"
    },
    {
      id: 18,
      image: "./aperter1.jpg",
      title: "Rescon 2025",
      description: "Attended Rescon 2025, a conference on Tech, AI, and Cloud, where I learned about the latest trends in the tech industry",
      location: "Rabindra Bhaban Rishra, India"
    },
    {
      id: 19,
      image: "./kube3.jpg",
      title: "Kube Kulture 2025",
      description: "Attended Kube Kulture 2025, a conference on CNCF, Cloud, Grafana and Kubernetes, where I learned about the latest trends in the DevOps industry",
      location: "Mani Casadona, Kolkata, India"
    },
    {
      id: 20,
      image: "./kube4.jpg",
      title: "Kube Konfig 2024",
      description: "Attended Kube Konfig 2024, a conference on CNCF, Cloud, Grafana and Kubernetes, where I learned about the latest trends in the DevOps industry",
      location: "Hotel Ra Vista, Kolkata, India"
    },
    {
      id: 21,
      image: "./aot1.jpg",
      title: "Cloud Community Day Extended Event 2024",
      description: "Participated in Cloud Community Day Extended Event 2024, where I secured 2nd position out off 200+ participants in prompt engineering & Web Development",
      location: "Academy of Technology (AOT), India"
    },
    {
      id: 22,
      image: "./aot.jpg",
      title: "Cloud Community Day Extended Event 2024",
      description: "Participated in Cloud Community Day Extended Event 2024, where I secured 2nd position out off 200+ participants in prompt engineering & Web Development",
      location: "Academy of Technology (AOT), India"
    },
    {
      id: 22,
      image: "./binary.jpg",
      title: "Binary Hackathon 2025",
      description: "Participated in Binary Hackathon 2025, where we build an Ai Carrer Coaching Agent Platform which impressed every judges and had a nice experience",
      location: "Kalyani Goverment Engineering College, India"
    },
    {
      id: 22,
      image: "./binary1.jpg",
      title: "Binary Hackathon 2025",
      description: "Participated in Binary Hackathon 2025, where we build an Ai Carrer Coaching Agent Platform which impressed every judges and had a nice experience",
      location: "Kalyani Goverment Engineering College, India"
    },
  ];

  // Duplicate items for seamless looping
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery">
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
              My <span>Journey</span>
            </h1>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="subtitle">
              Capturing moments from conferences, hackathons, and my tech journey
            </p>
          </motion.div>

          {/* Top Scrolling Row (Left to Right) */}
          <div className="scrolling-row-wrapper top-row-wrapper">
            <motion.div 
              className="scrolling-row top-row"
              ref={topRowRef}
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 70,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover={{
                animationPlayState: "paused"
              }}
            >
              {duplicatedItems.map((item, index) => (
                <motion.div
                  key={`top-${item.id}-${index}`}
                  className="scrolling-item"
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                    />
                    <div className="hover-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Scrolling Row (Right to Left) */}
          <div className="scrolling-row-wrapper bottom-row-wrapper">
            <motion.div 
              className="scrolling-row bottom-row"
              ref={bottomRowRef}
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                duration: 70,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover={{
                animationPlayState: "paused"
              }}
            >
              {[...duplicatedItems].reverse().map((item, index) => (
                <motion.div
                  key={`bottom-${item.id}-${index}`}
                  className="scrolling-item"
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                    />
                    <div className="hover-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;