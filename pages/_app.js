import { Global } from "@emotion/react";
import Layout from "./../src/components/commons/layout/index";
import { globalStyles } from "./../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
