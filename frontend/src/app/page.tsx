// frontend/src/app/page.tsx

"use client";

import Hero from "@/components/organisms/Hero";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";

const characters = [
  { name: "Flicker", img: "/characters/flicker.png" },
  { name: "Gnar", img: "/characters/gnar.png" },
  { name: "Vella", img: "/characters/vella.png" },
  { name: "Snag", img: "/characters/snag.png" },
];

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#0d1b2a", color: "#ffffff" }}>
      <Hero />

      {/* About */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          – ABOUT –
        </Typography>
        <Typography variant="body1" align="center" maxWidth="md" mx="auto">
          Tyro: Legend of Whisperwood is an enchanting adventure game where you’ll explore a mystical forest, solve puzzles, and confront ancient creatures to restore peace to the land.
        </Typography>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Box>
      </Container>

      {/* Characters */}
      <Container sx={{ pb: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          – CHARACTERS –
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {characters.map((char) => (
            <Grid key={char.name} size={{ xs: 6, sm: 3 }}>
              <Paper
                sx={{
                  bgcolor: "#1b263b",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                }}
              >
                <img
                  src={char.img}
                  alt={char.name}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Typography variant="subtitle1" mt={2}>
                  {char.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
