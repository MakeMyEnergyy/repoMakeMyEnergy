import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  TagManager.initialize({ gtmId: 'GTM-TGF6GBH6' });

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp