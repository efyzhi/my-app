import '@/component/styles/globals.css'
import navMenu from "../src/comps/navMenu"
import Header from "../src/comps/Header"
import Layout from '../src/comps/Layout'



export default function App({ Component, pageProps }) {
  return (
    <>
    <div>
      <Header />
      <Component {...pageProps} />
      <Layout />
    </div>
    </>
  )
}

