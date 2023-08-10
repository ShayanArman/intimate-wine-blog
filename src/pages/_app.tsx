import '@/styles/globals.css'
import "@/styles/variables.css"
import type { AppProps } from 'next/app'
import Layout from '@/Components/Layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
