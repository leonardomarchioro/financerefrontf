import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import ThemeProvider from "../components/ThemeProvider";
import { store } from "../store/index";

import { GlobalStyle, Body } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <GlobalStyle />
          <Body>
            <Component {...pageProps} />
          </Body>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
