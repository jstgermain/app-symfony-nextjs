// frontend/src/app/(dashboard)/layout.tsx

import type { Metadata } from "next";
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
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
