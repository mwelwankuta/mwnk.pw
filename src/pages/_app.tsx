import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#6ee7b7"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
