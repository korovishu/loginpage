import '../styles/globals.css'
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';


function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp
