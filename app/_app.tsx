import { AppProps } from "next/app";
import Head from "next/head";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>전체 애플리케이션 타이틀</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
