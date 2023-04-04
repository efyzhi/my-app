import styles from "styles/Header.module.css"



const Header = () => {
    return (
    <header id={styles.logo}> 
        <div className={styles.containerHeader} >
            <div className={styles.flex}>
                <div>
                    <h1> S_R </h1> 
                </div>
                <div className={styles.btns}>
                    <button className={styles.hire}> Hire Me </button>
                    <button className={styles.download}> Download CV </button>
                </div>
            </div>
        </div>
        <div className={styles.down}>
            <h2> Sunday Robert </h2>
            <h3 className={styles.textBox}> <span>A Frontend Developer...</span></h3>
        </div>
    </header>
    )
}

export default Header