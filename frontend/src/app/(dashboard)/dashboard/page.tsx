// frontend/src/app/(dashboard)/dashboard/page.tsx

"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Widget 1</Typography>
            <Typography>Some dummy content goes here.</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Widget 2</Typography>
            <Typography>Another dummy widget for layout testing.</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Widget 3</Typography>
            <Typography>Just a placeholder block.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
