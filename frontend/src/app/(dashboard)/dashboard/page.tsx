// frontend/src/app/(dashboard)/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Cache-Control": "no-store",
          },
        });

        if (!res.ok) {
          window.location.href = "/login";
        } else {
          setLoading(false);
        }
      } catch (err) {
        window.location.href = "/login";
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8000/logout", {
      method: "GET",
      credentials: "include",
    });
    window.location.href = "/login";
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Box p={4}>
      <Typography variant="h4">Welcome to your Dashboard</Typography>
      <Button variant="outlined" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}
