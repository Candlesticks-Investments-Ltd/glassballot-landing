import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps;

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a></noscript>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Script
          id="important-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d){
              var s = d.createElement("script");
              s.setAttribute("data-position", 3);
              s.setAttribute("data-size", "large");
              s.setAttribute("data-color", "#22223b"); // Removed extra parenthesis here
              s.setAttribute("data-account", "IqqlnFN5Ia");
              s.setAttribute("src", "https://cdn.userway.org/widget.js");
              (d.body || d.head).appendChild(s);
          })(document)
    
        `,
          }}
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
