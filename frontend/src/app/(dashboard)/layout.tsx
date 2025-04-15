// frontend/src/app/(dashboard)/layout.tsx

import type { Metadata } from "next";
import EmotionProvider from "../EmotionProvider"; // adjust path if needed
import StoreProvider from "@/store/StoreProvider";
import DashboardLayoutClient from "@/app/(dashboard)/DashboardLayoutClient";

export const metadata: Metadata = {
  title: "Dashboard | Tyro",
  description: "Manage your data and explore insights in the Tyro dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          <StoreProvider>
            <DashboardLayoutClient>{children}</DashboardLayoutClient>
          </StoreProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
