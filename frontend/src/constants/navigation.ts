// frontend/src/constants/navigation.ts

export interface NavItem {
    label: string;
    href: string;
  }
  
  export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Game", href: "/game" },
    { label: "Media", href: "/media" },
    { label: "Alpha", href: "/alpha" },
    { label: "Support", href: "/support" },
  ];
  