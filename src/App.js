import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import ActionButtons from './components/ActionButtons';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import SpeakButton from './components/SpeakButton';
import useSpeechTranslation from './hooks/useSpeechTranslation';
import useTextToSpeech from './hooks/useTextToSpeech';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const speechKey = process.env.REACT_APP_SPEECH_KEY;
  const speechRegion = process.env.REACT_APP_SPEECH_REGION;

  const { transcribedText, translatedText, startTranslation, stopTranslation, error } =
    useSpeechTranslation(speechKey, speechRegion);
  const { speakText } = useTextToSpeech(speechKey, speechRegion);

  const [targetLanguage, setTargetLanguage] = useState('it');

  const supportedLanguages = [
    { code: "af", name: "Afrikaans" },
    { code: "sq", name: "Albanian" },
    { code: "am", name: "Amharic" },
    { code: "ar", name: "Arabic" },
    { code: "hy", name: "Armenian" },
    { code: "as", name: "Assamese" },
    { code: "az", name: "Azerbaijani" },
    { code: "bn", name: "Bangla" },
    { code: "bs", name: "Bosnian (Latin)" },
    { code: "bg", name: "Bulgarian" },
    { code: "yue", name: "Cantonese (Traditional)" },
    { code: "ca", name: "Catalan" },
    { code: "lzh", name: "Chinese (Literary)" },
    { code: "zh-Hans", name: "Chinese Simplified" },
    { code: "zh-Hant", name: "Chinese Traditional" },
    { code: "hr", name: "Croatian" },
    { code: "cs", name: "Czech" },
    { code: "da", name: "Danish" },
    { code: "prs", name: "Dari" },
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" },
    { code: "et", name: "Estonian" },
    { code: "fj", name: "Fijian" },
    { code: "fil", name: "Filipino" },
    { code: "fi", name: "Finnish" },
    { code: "fr", name: "French" },
    { code: "fr-ca", name: "French (Canada)" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "gu", name: "Gujarati" },
    { code: "ht", name: "Haitian Creole" },
    { code: "he", name: "Hebrew" },
    { code: "hi", name: "Hindi" },
    { code: "hu", name: "Hungarian" },
    { code: "is", name: "Icelandic" },
    { code: "id", name: "Indonesian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "kn", name: "Kannada" },
    { code: "kk", name: "Kazakh" },
    { code: "km", name: "Khmer" },
    { code: "ko", name: "Korean" },
    { code: "lo", name: "Lao" },
    { code: "lv", name: "Latvian" },
    { code: "lt", name: "Lithuanian" },
    { code: "ml", name: "Malayalam" },
    { code: "ms", name: "Malay" },
    { code: "mt", name: "Maltese" },
    { code: "mi", name: "Maori" },
    { code: "mr", name: "Marathi" },
    { code: "my", name: "Myanmar" },
    { code: "ne", name: "Nepali" },
    { code: "nb", name: "Norwegian" },
    { code: "fa", name: "Persian" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese (Brazil)" },
    { code: "pt-pt", name: "Portuguese (Portugal)" },
    { code: "pa", name: "Punjabi" },
    { code: "ro", name: "Romanian" },
    { code: "ru", name: "Russian" },
    { code: "es", name: "Spanish" },
    { code: "sw", name: "Swahili" },
    { code: "sv", name: "Swedish" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "th", name: "Thai" },
    { code: "tr", name: "Turkish" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "vi", name: "Vietnamese" },
    { code: "cy", name: "Welsh" },
    { code: "zu", name: "Zulu" },
  ];

  return (
    <div className="app-wrapper">
      <Header />
      <div className="action-box">
        {error && <p className="error">{error}</p>}

        <LanguageSelector
          supportedLanguages={supportedLanguages}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
        />

        <ActionButtons
          startTranslation={startTranslation}
          stopTranslation={stopTranslation}
          targetLanguage={targetLanguage}
        />
      </div>

      <div className="text-box">
        <TranscriptionDisplay
          transcribedText={transcribedText}
          translatedText={translatedText}
        />

        <SpeakButton speakText={speakText} translatedText={translatedText} />
      </div>
    </div>
  );
};

export default App;
