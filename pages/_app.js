import '../styles/globals.css'
import { AuthProvider } from '../lib/auth';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </AuthProvider>
  );
}

export default MyApp
