import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
  )
}
