/**
 * Usage:
 *
 * 1. Import `getDesignToken` from this module.
 *
 * Example:
 *
 * ```javascript
 * import getDesignToken from './path-to-this-module';
 * ```
 *
 * 2. Call `getDesignToken` function with a `mode` argument to get the design tokens for either light or dark mode.
 *
 * Example:
 *
 * ```javascript
 * const lightModeTokens = getDesignToken('light');
 * const darkModeTokens = getDesignToken('dark');
 * ```
 *
 * 3. Use the design tokens in your Material-UI theme configuration.
 *
 * Example:
 *
 * ```javascript
 * import { createTheme } from '@mui/material/styles';
 *
 * const lightTheme = createTheme(lightModeTokens);
 * const darkTheme = createTheme(darkModeTokens);
 *
 * // Use the themes in your Material-UI application
 * ```
 *
 * Note: This module provides design tokens for both light and dark modes, making it easy to customize the Material-UI theme for your application.
 *
 * @module DesignToken
 */

import { PaletteMode, Shadows } from "@mui/material";
import { Cinzel_Decorative, Fauna_One } from "next/font/google";
import { Typography } from "@mui/material/styles/createTypography";

export const cinzel = Cinzel_Decorative({
    weight: [ "400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const fauna = Fauna_One({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const getDesignToken = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  primary: {
                      main: "#009FFD",
                      light: "#EFF1ED",
                      dark: "#373D20",
                  },
                  secondary: {
                      main: "#717744",
                      light: "#BCBD8B",
                      dark: "#766153",
                  },
                  text: {
                      primary: "#252627",
                      secondary: "#424242",
                  },
                  background: {
                      default: "#EFF1ED",
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "#373D20",
                  },
                  text: {
                      primary: "#F8F8F8",
                      secondary: "#E7E4E4",
                  },
                  background: {
                      default: "#272727",
                      paper: "#272727",
                  },
              }),
    },
    typography: {
        fontFamily: [fauna.style.fontFamily, cinzel.style.fontFamily].join(","),
        h1: {
            fontFamily: fauna.style.fontFamily,
            fontSize: "1.625rem",
        },
        h2: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 700,
            fontSize: "1.375rem",
        },
        h3: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 700,
            fontSize: "1.2rem",
        },
        h4: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 300,
        },
        h5: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 300,
        },
        h6: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 300,
        },
        subtitle1: {
            fontFamily: cinzel.style.fontFamily,
            fontWeight: 400,
        },
        subtitle2: {
            fontFamily: cinzel.style.fontFamily,
            fontWeight: 400,
        },
        body1: {
            fontFamily: fauna.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 400,
        },
        body2: {
            fontFamily: fauna.style.fontFamily,
            fontSize: "0.8rem",
            fontWeight: 700,
        },
        button: {
            fontFamily: fauna.style.fontFamily,
            fontWeight: 700,
        },
        cacinzelion: {
            fontFamily: cinzel.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 800,
        },
        overline: {
            fontFamily: cinzel.style.fontFamily,
            fontWeight: 400,
        },
    } as unknown as Typography,
    shadows: [
        "none",
        "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
        "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "0px 2px 5px 0px rgba(50, 50, 105, 0.15), 0px 1px 1px 0px rgba(0, 0, 0, 0.05)",
        "0px 0.0625em 0.0625em rgba(0, 0, 0, 0.25), 0px 0.125em 0.5em rgba(0, 0, 0, 0.25), 0px 0px 0px 1px inset rgba(255, 255, 255, 0.1)",
        ...Array(19).fill("none"),
    ] as Shadows,
});

export default getDesignToken;