// frontend/src/emotion-ssr-plugin.ts

import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@/lib/createEmotionCache';

export function extractCriticalToChunks(html: string) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  return extractCriticalToChunks(html);
}
