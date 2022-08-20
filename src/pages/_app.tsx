import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store/index";

import { NextUIProvider } from "@nextui-org/react";

import ThemeProvider from "../styles/theme/ThemeProvider";

import { Body, GlobalStyle } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <GlobalStyle />
            <NextUIProvider>
              <Body>
                <Component {...pageProps} />
              </Body>
            </NextUIProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
