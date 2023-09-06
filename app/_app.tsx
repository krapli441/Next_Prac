import { AppProps } from "next/app";
import Header from "./header";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
