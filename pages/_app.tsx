import "../styles/global.css";

import { AppProps } from "next/app";
import Link from "next/link";
// import Router from "next/router";
// import { useEffect } from "react";
import A from "../components/A";
import Nav from "../components/Nav";
import NavStyles from "../components/Nav.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   ReactGA.initialize("UA-97872345-2");

  //   function onView() {
  //     ReactGA.set({ page: window.location.pathname + window.location.search });
  //     ReactGA.pageview(window.location.pathname + window.location.search);
  //   }

  //   onView();
  //   Router.events.on("routeChangeComplete", onView);
  // }, []);

  return (
    <>
      <Nav>

      </Nav>
      <main className={NavStyles.navMargin}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
