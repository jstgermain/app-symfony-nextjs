// frontend/src/app/(public)/layout.tsx

import MainAppBar from "@/components/organisms/MainAppBar";
import EmotionProvider from "@/app/EmotionProvider";
import StoreProvider from "@/store/StoreProvider";

export const metadata = {
  title: "Your App",
  description: "A modern app using Next.js, MUI, and Emotion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainAppBar />
      <main style={{ paddingTop: 64 }}>
        {/* account for AppBar height */}
        {children}
      </main>
    </>
  );
}
