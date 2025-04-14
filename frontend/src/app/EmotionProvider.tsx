// frontend/src/app/EmotionProvider.tsx

"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import theme from "@/theme";

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
