import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import Header from "./components/Header";
import Translator from "./components/Translator";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Header />
          <Translator />
        </Container>
      </Box>
    </>
  );
}

export default App;
