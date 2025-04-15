// frontend/src/app/layout.tsx

import TopAppBar from '@/components/organisms/TopAppBar';
import EmotionProvider from './EmotionProvider';
import StoreProvider from '@/store/StoreProvider';

export const metadata = {
  title: 'Your App',
  description: 'A modern app using Next.js, MUI, and Emotion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          <StoreProvider>
            <TopAppBar />
            <main style={{ paddingTop: 64 }}>{/* account for AppBar height */}
              {children}
            </main></StoreProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
