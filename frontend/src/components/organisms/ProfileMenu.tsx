// frontend/src/components/organisms/ProfileMenu.tsx

"use client";

import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useState } from "react";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    fetch("http://localhost:8000/logout", {
      method: "GET",
      credentials: "include",
    }).then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <>
      <Tooltip title="Profile settings">
        <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1.5,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => alert("Go to settings")}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
