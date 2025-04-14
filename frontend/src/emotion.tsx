// frontend/src/emotion.tsx

import createEmotionCache from '@/lib/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';
import { ReactNode } from 'react';

export const emotionCache = createEmotionCache();
const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(emotionCache);

export function EmotionRoot({ children }: { children: ReactNode }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}

export function getEmotionStyleTags(html: string) {
  const chunks = extractCriticalToChunks(html);
  return constructStyleTagsFromChunks(chunks);
}
