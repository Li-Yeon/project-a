import '../styles/globals.css'

// Components
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

// Provider
import { NoteContextProvider } from '../context/NoteContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Layout>
          <NoteContextProvider>
            <Component {...pageProps} />
          </NoteContextProvider>
        </Layout>
      </Navbar>
    </>
  )
}

export default MyApp