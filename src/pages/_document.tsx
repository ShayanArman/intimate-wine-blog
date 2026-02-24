import { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'
import { mantineEmotionCache } from '@/lib/mantineEmotionCache';

const getInitialProps = createGetInitialProps(mantineEmotionCache)

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = getInitialProps
