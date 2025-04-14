// frontend/src/app/(auth)/forgot-password/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Link,
} from "@mui/material";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("If an account exists for this email, a reset link has been sent.");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  // ⏳ Auto-redirect to login after success
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [message, router]);

  return (
    <Box maxWidth={400} mx="auto" mt={8}>
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>

      {message ? (
        <>
          <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => router.push("/login")}
          >
            Back to Login
          </Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!email}
          >
            Send Reset Link
          </Button>
          <Box mt={2} textAlign="center">
            <Link href="/login" underline="hover">
                Cancel and return to login
            </Link>
        </Box>
        </form>
      )}
    </Box>
  );
}
