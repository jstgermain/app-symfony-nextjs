// frontend/src/app/(public)/not-found.tsx

"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      textAlign="center"
      px={3}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! That page doesn’t exist.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        href="/"
        size="large"
        color="primary"
      >
        Go back home
      </Button>
    </Box>
  );
}
