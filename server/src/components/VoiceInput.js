import React from "react";
import { Box, Button } from "@mui/material";
import { useSpeechRecognition } from "react-speech-kit";

function VoiceInput({ setTranscript, setTranslation, inputLanguage, outputLanguage }) {
  const { listen, stop, isListening } = useSpeechRecognition({
    onResult: (result) => setTranscript(result),
  });

  const handleTranslation = async () => {
    setTranslation("Translated text will appear here...");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="contained"
        color={isListening ? "error" : "primary"}
        onClick={isListening ? stop : () => listen({ lang: inputLanguage })}
      >
        {isListening ? "Stop" : "Speak"}
      </Button>
      <Button variant="contained" color="secondary" onClick={handleTranslation}>
        Translate
      </Button>
    </Box>
  );
}

export default VoiceInput;
