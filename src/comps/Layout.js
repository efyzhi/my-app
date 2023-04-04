import { react, useState, useEffect } from "react" 
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { BiHomeAlt, BiUser} from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"
import styles from "styles/Layout.module.css"


const Layout = ({ children }) => {
  const  [sideBar, setSideBar] = useState(false)
  const [activNav, setActivNav] = useState(false)
const handleSideBar = () => {
  setSideBar(!sideBar)
}

  return (
    <main>
    <div className={styles.container}>
      
      <div> {children} </div>
      
      <div className={sideBar ? styles.sideBar .active : styles.sideBar} onClick={handleSideBar}>
       boy </div>
     <nav className={styles.navMenu}>

         <Link href="/" passHref  smooth={true}
         spy={true} > <BiHomeAlt onClick={() => setActivNav(!activNav)} className={activNav === "/" ? styles.active : styles }  /></Link>
        
        
        <Link href="/about" passHref > <BiUser />  </Link>
        
        
        <Link href="/project" onClick={() => setActivNav("/project")} className={activNav === "/project" ? styles.active : styles } > <BsBriefcase className={styles.icons} /></Link>
        
        
        <Link href="/contact" onClick={() => setActivNav("/contact")} className={activNav === "/contact" ? "active" : "" } > <BsChatSquare className={styles.icons} /></Link>
        
        {/* </div> */}
      </nav>
        <button className={styles.menu} onClick={handleSideBar} >   <FaBars /> 
        </button>
    </div>    
    </main>
  )
}
export default Layout