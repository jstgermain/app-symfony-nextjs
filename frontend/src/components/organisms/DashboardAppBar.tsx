// frontend/src/components/organisms/DashboardAppBar.tsx

"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileMenu from "./ProfileMenu";

type DashboardAppBarProps = {
  onMenuClick: () => void;
};

export default function DashboardAppBar({ onMenuClick }: DashboardAppBarProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {isSmallScreen && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
}
