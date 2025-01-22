import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import TranscriptDisplay from "./TranscriptDisplay";
import VoiceInput from "./VoiceInput";

function Translator() {
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("es");
  const [transcript, setTranscript] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: "16px" }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Real-Time Healthcare Translator
      </Typography>
      <LanguageSelector
        inputLanguage={inputLanguage}
        setInputLanguage={setInputLanguage}
        outputLanguage={outputLanguage}
        setOutputLanguage={setOutputLanguage}
      />
      <TranscriptDisplay transcript={transcript} translation={translation} />
      <VoiceInput
        setTranscript={setTranscript}
        setTranslation={setTranslation}
        inputLanguage={inputLanguage}
        outputLanguage={outputLanguage}
      />
    </Paper>
  );
}

export default Translator;
