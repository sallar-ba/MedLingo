import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#007BFF" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          MedLingo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
