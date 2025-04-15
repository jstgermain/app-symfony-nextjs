// frontend/src/app/(dashboard)/DashboardLayoutClient.tsx

"use client";

import { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardAppBar from "@/components/organisms/DashboardAppBar";
import Sidebar from "@/components/organisms/Sidebar";

const drawerWidth = 240;

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <DashboardAppBar onMenuClick={handleDrawerToggle} />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar navigation"
      >
        <Drawer
          variant={isSmallScreen ? "temporary" : "permanent"}
          open={isSmallScreen ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              overflowY: "auto",
              pt: 8,
              zIndex: theme.zIndex.appBar - 1,
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Sidebar />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
