import React from "react";
import { Grid, MenuItem, TextField } from "@mui/material";

function LanguageSelector({ inputLanguage, setInputLanguage, outputLanguage, setOutputLanguage }) {
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          fullWidth
          label="Input Language"
          value={inputLanguage}
          onChange={(e) => setInputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          fullWidth
          label="Output Language"
          value={outputLanguage}
          onChange={(e) => setOutputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}

export default LanguageSelector;
