import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: "center" }}>
      <Typography variant="caption" color="text.secondary">
        © 2025 Lab 5 - Alejandro Ramos Chávez
      </Typography>
    </Box>
  );
}