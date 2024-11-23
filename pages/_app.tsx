// src/pages/_app.tsx
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="Dynamic SEO App"
        description="A Next.js app with dynamic SEO capabilities."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.example.com/",
          siteName: "Dynamic SEO App",
        }}
        twitter={{
          handle: "@yourhandle",
          site: "@yoursite",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
