import '@/component/styles/globals.css'
// import navMenu from "../src/comps/navMenu"
import Header from "../src/comps/Header"
import Layout from '../src/comps/Layout'
import MobileNav from '../src/comps/MobileNav'


export default function App({ Component, pageProps }) {
  return (
    <>
    <div>
      <Layout>
      <Header />
      <MobileNav />
      <Component {...pageProps} />
      </Layout>
    </div>
    </>
  )
}

