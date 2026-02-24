import '@/styles/globals.css'
import "@/styles/variables.css"
import Layout from '@/Components/Layout';
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { AppProps } from 'next/app'

const myCache = createEmotionCache({ key: 'mantine' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      emotionCache={myCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'light' }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}