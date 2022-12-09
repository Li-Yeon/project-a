import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Navbar>
    </>
  )
}

export default MyApp