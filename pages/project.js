// import proj from "../images/proj.jpg"
import styles from "styles/Layout.module.css"

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/efyzhi/repos') 
  const data = await response.json()

  return {
    props: { repos: data }
  }
}

const Service = ({ repos }) => {
  return (
    <>
    <div className={styles.projBox}>
      <h1> Projects Page </h1>
      <div >
        {repos.map(repos => (
          <div key={repos.id}> 
            <h3>{ repos.name }</h3>
            {/* < img src={repos.owner.avatar_url} className={styles.projImage}/> */}
          </div> 
        ))}
      </div>
      </div>
    </>
  )
}
export default Service