import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import "../styles/fonts.css";
import { Analytics } from '@vercel/analytics/react';


const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Head>
        <title>Programme Twitch</title>
        <meta name="description" content="Le programme et le planning de l'ensemble du streaming twitch Français et des évenements e-Sport" />
      </Head>

        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  );
}

export default App;
