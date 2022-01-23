
import Layout from '../components/layout/Layout'
import GeneralProvider from '../providers/GeneralProvider'

import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <GeneralProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeneralProvider>
  )
}

export default MyApp
