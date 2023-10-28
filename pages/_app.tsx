import type { AppProps } from 'next/app'
import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  PaletteMode } from "@mui/material";

import getDesignToken from "@/theme/getDesignToken";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
      () => ({
          // The dark mode switch would invoke this method
          toggleColorMode: () => {
              setMode((prevMode: PaletteMode) =>
                  prevMode === "light" ? "dark" : "light"
              );
          },
      }),
      []
  );

  const theme = useMemo(() => createTheme(getDesignToken(mode)), [mode]);

  return (
          <ThemeProvider theme={theme}>
                <Component {...pageProps} />
          </ThemeProvider>
  )
}