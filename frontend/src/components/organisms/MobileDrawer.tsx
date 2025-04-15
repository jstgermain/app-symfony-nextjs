// frontend/src/components/organisms/MobileDrawer.tsx

"use client";

import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: {
          pt: 8, // space for appbar
          width: 250,
        },
      }}
    >
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding onClick={onClose}>
            <Button
              component={Link}
              href={item.href}
              sx={{ width: "100%", justifyContent: "flex-start", textTransform: "none" }}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
