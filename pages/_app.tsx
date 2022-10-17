import '../scss/main.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import GlobalState from '../store/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  )
}

export default MyApp
