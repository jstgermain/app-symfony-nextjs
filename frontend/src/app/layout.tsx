// src/app/layout.tsx

import '@/app/globals.css';
import { ReactNode } from 'react';
import StoreProvider from '@/store/StoreProvider';
import EmotionProvider from './EmotionProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          <StoreProvider>{children}</StoreProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}