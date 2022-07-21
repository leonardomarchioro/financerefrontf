import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import ThemeProvider from "../components/ThemeProvider";
import { store } from "../store/index";

import { GlobalStyle } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
