import { useState, useEffect } from "react" 
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { BiHomeAlt, BiUser} from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"
import styles from "styles/Layout.module.css"



const Layout = () => {
  const  [sideBar, setSideBar] = useState(false)
const handleSideBar = () => setSideBar(!sideBar)

  return (
    <main>
    <div className={styles.container}>
     <nav className={styles.navMenu}>
       {/* <ul className={sideBar ? "sideBar active" : "sideBar"} onClick={handleSideBar}> */}
        
         <Link href="/"  smooth={true}
         spy={true}> <BiHomeAlt className={styles.active}/></Link>
        
        
          <Link href="/about"> <BiUser /> </Link>
        
        
          <Link href="/service"> <BsBriefcase /></Link>
        
        
          <Link href="/contact"> <BsChatSquare /></Link>
        
        {/* </ul> */}
      </nav>
        <button className={styles.menu} onClick={handleSideBar} >   <FaBars />
        </button>
      {/* <Outlet /> */}
    </div>    
    </main>
  )
}
export default Layout