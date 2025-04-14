// frontend/src/components/organisms/Sidebar.tsx

"use client";

import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { text: "Users", icon: <PeopleIcon />, href: "/dashboard/users" },
  { text: "Settings", icon: <SettingsIcon />, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav>
      <List>
        {navItems.map(({ text, icon, href }) => (
          <Link href={href} key={text} passHref>
            <ListItemButton selected={pathname === href}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </nav>
  );
}
