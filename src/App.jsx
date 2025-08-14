import Hero from "./components/hero/Hero";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/About";
import Gallery from "./components/Gallery";
const App = () => {
  return ( 
  <div>
    <Cursor/>
   <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About Me"><About/></section>
    <section id="My Skills"><Parallax type="services"/></section>
    <section><Services/></section>
    <Gallery/>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
    
  
  </div>
  );
};

export default App;
