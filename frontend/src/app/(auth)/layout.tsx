// frontend/src/app/(public)/layout.tsx

import MainAppBar from "@/components/organisms/MainAppBar";
import EmotionProvider from "@/app/EmotionProvider";
import StoreProvider from "@/store/StoreProvider";
import StrippedAppBar from "@/components/organisms/StrippedAppBar";

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
      <StrippedAppBar />
      <main style={{ paddingTop: 64 }}>{children}</main>
    </>
  );
}
