import '@/styles/globals.css'
import "@/styles/variables.css"
import { mantineEmotionCache } from '@lib/mantineEmotionCache';
import { MantineProvider } from '@mantine/core'
import Layout from '@/components/Layout';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      emotionCache={mantineEmotionCache}
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
