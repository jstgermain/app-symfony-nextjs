// frontend/src/components/organisms/TopAppBar.tsx

"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";
import { useMobileDrawer } from "@/hooks/useMobileDrawer";
import MobileDrawer from "@/components/organisms/MobileDrawer";

export default function TopAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { open, toggle, close } = useMobileDrawer();

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isMobile && (
              <IconButton edge="start" color="inherit" onClick={toggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div">
              Tyro
            </Typography>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2, ml: 4 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    component={Link}
                    href={item.href}
                    sx={{ textTransform: "none" }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          <Button
            color="inherit"
            component={Link}
            href="/login"
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#ffffff88",
              color: "#fff",
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      <MobileDrawer open={open} onClose={close} />
    </>
  );
}
