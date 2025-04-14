// src/app/EmotionProvider.tsx
'use client';

import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/lib/createEmotionCache';

const cache = createEmotionCache();

export default function EmotionProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}