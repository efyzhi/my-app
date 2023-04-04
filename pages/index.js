import React from "react";
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
      <div className="hero-bg">  </div>
    <div className={styles.homeContainer}>
       <div className={styles.homeText}>
         <h1> HI! </h1>
         <p> I am Sunday Robert </p>
         <h2> A Frontend Engineer </h2>
         {/* <div> <img src={ hom } alt="hom" className="hom-img"/> </div> */}
       </div>
      <div className="home-image" >
       <img src="" alt="home image"/>
      </div>
    </div>
    </>
  )
}
export default Home