import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />;
  </ThemeProvider>
);

export default MyApp;
