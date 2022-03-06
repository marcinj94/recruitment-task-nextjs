import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />;
    </ThemeProvider>
  </Provider>
);

export default MyApp;
