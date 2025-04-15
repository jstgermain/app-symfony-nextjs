// frontend/src/components/organisms/StrippedAppBar.tsx

"use client";

import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function StrippedAppBar() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" component="div">
              Tyro
            </Typography>
          </Box>

          <Button
            color="inherit"
            component={Link}
            href="/"
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#ffffff88",
              color: "#fff",
            }}
          >
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
