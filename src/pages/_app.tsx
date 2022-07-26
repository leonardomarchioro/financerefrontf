import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";

import ThemeProvider from "../components/ThemeProvider";

import { GlobalStyle, Body } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <GlobalStyle />
            <Body>
              <Component {...pageProps} />
            </Body>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
