import React from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme
      accentColor="crimson"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance="dark"
    >
      <Component {...pageProps} />
      {/* <ThemePanel /> */}
    </Theme>
  );
}
