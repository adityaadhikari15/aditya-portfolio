import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="shortcut icon"
        href="/teebeds-short-logo.svg"
        type="image/x-icon"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
