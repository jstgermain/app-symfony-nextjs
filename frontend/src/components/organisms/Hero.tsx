// frontend/src/components/organisms/Hero.tsx

"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image Layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/final_clean.png"
          alt="Tyro Hero Background"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content Layer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          px: 4,
          py: 6,
          color: "#fff",
          textShadow: "0 1px 6px rgba(0,0,0,0.5)",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Tyro: Legend of Whisperwood
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          A consequence-based metroidvania where madness lurks beneath every choice.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="#alpha"
          >
            Play the Alpha
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            href="#community"
          >
            Join the Community
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
