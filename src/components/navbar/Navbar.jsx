import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion"
const Navbar = () => {
return (
<div className="navbar">

<Sidebar/>
<div className="wrapper">
<motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}> Dhrubojyoti Dev</motion.span>
<div className="social">
<a href="https://www.linkedin.com/in/dhrubojyoti-chakraborty-567857257/"><img src="./linkedin.png" alt="" /></a>
<a href="https://github.com/Dhrubojyot"><img src="./download.png" alt="" /></a>
<a href="https://www.instagram.com/i_am_dhrubojyoti_chakraborty/"><img src="./instagram.png" alt="" /></a>
<a href="https://www.facebook.com/dhrubojyoti.chakraborty.14"><img src="./facebook.png" alt="" /></a>
</div>
</div>
</div>
)
}
export default Navbar;