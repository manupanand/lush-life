import { Theme } from '@radix-ui/themes';
// import '@radix-ui/themes/styles.css';
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Theme>
        <Main />
        <NextScript />
        </Theme>
      </body>
    </Html>
  );
}
