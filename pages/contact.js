import {useState} from "react"
import styles from "../styles/Contact.module.css"
import {MdOutlineEmail} from "react-icons/md";
import {FiTwitter} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";



const Contact = () => {
  return (
    <>
      
    <main className={styles.formContainer}>
      <div className={styles.firstContainer}> 
      <article className={styles.box}>
          <MdOutlineEmail/>
          <h4> Email </h4>
          <h5> pelurobert10@gmail.com </h5>
           <a href="mailto:pelurobert10@gmail.com" target={"_blank"} >Send a message </a>
        </article>
        
        {/* <article className={styles.box}>
          <BsWhatsapp/>
          <h4> Whatsapp </h4>
          <h5> +2347054212232 </h5>
           <a href="https://api.whatsapp.com/send?=+2347054212232" target={"_blank"} >Send a message </a>
        </article> 
         */}
         
        <article className={styles.box}>
          <FiTwitter/>
          <h4> Twitter </h4>
          <h5> @sunNEfyzhi </h5>
           <a href="https://twitter.com/sunNEfyzhi" target={"_blank"} >Send a message </a>
        </article>
        
        <article className={styles.box}>
          <BsGithub/>
          <h4> Github </h4>
          <h5> efyzhi </h5>
           <a href="https://github.com/efyzhi?tab=repositories" target={"_blank"} >Send a message </a>
        </article>
      </div>
            
      <div className={styles.secondContainer}> 
      <form className={styles.form}>
        <ul className={styles.flex}> 
     <li> <label htmlFor="name">Name</label>
        <input
          type="text"
          required 
          name="name" className={styles.input} /> </li>
  
      <li>  <label> Email </label>
        <input
          type="text"
          required
          name="email" className={styles.input} />  </li>
      
     <li>  <label> Phone </label>
        <input
          type="number"
          name="number"  className={styles.input} />  </li>
        
       <li> <label>  Message </label>
        <textarea className={styles.textarea}
          type="text"
          required
          name="message"/>  </li>
      
      <li> <button type="submit" className={styles.submitButton} > Send Message</button> </li>
          </ul>
      </form>
        </div>
 
    </main>  
    
    </>
  )
}
export default Contact 