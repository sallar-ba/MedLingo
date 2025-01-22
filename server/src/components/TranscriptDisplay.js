import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function TranscriptDisplay({ transcript, translation }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Paper sx={{ p: 2, mb: 2, bgcolor: "#f1f1f1" }}>
        <Typography variant="subtitle1">Original Transcript:</Typography>
        <Typography>{transcript || "Speak to see the transcript..."}</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: "#e8f5e9" }}>
        <Typography variant="subtitle1">Translated Text:</Typography>
        <Typography>{translation || "Translation will appear here..."}</Typography>
      </Paper>
    </Box>
  );
}

export default TranscriptDisplay;
