import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Load CSS */}
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/bootstrap-icons.css" />
      <link rel="stylesheet" href="/css/scholarshiplanding.css" />

      {/* Load JavaScript */}
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.sticky.js" strategy="lazyOnload" />
      <Script src="/js/click-scroll.js" strategy="lazyOnload" />
      <Script src="/js/custom.js" strategy="lazyOnload" />
      <Script
        src="/js/search.js"
        strategy="lazyOnload" // Load this script lazily after the main content is loaded
        onLoad={() => console.log("search.js loaded")}
      />
      {/* Render the page */}
      <Component {...pageProps} />
    </>
  );
}
