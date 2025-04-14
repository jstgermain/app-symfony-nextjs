// frontend/src/app/(auth)/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Link,
} from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const contentType = res.headers.get("content-type") || "";
        const data = contentType.includes("application/json")
          ? await res.json()
          : {};
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error", err);
      setError("Unexpected error occurred");
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Box mt={2} textAlign="center">
        <Link href="/forgot-password" underline="hover">
          Forgot your password?
        </Link>
      </Box>
    </Box>
  );
}
