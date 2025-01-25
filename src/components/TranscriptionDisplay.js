import React, { useEffect, useState } from 'react';

const TranscriptionDisplay = ({ transcribedText, translatedText }) => {
  const [highlightTranscription, setHighlightTranscription] = useState(false);
  const [highlightTranslation, setHighlightTranslation] = useState(false);
  const [currentWord, setCurrentWord] = useState(''); // For the current spoken word

  // Effect for highlighting the transcribed text
  useEffect(() => {
    if (transcribedText) {
      setHighlightTranscription(true);

      // Find the current word being spoken
      const words = transcribedText.split(' ');
      setCurrentWord(words[words.length - 1]); // Last word is the current word

      const timeout = setTimeout(() => {
        setHighlightTranscription(false);
        setCurrentWord(''); // Reset current word
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [transcribedText]);

  // Effect for highlighting the translated text
  useEffect(() => {
    if (translatedText) {
      setHighlightTranslation(true);
      const timeout = setTimeout(() => setHighlightTranslation(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [translatedText]);

  return (
    <div className="transcription-box">
      <div className="transcription">
        <h2>Transcribed Text:</h2>
        <p className={highlightTranscription ? 'highlight' : ''}>
          {transcribedText
            ? transcribedText.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={word === currentWord ? 'current-word' : ''}
                >
                  {word}{' '}
                </span>
              ))
            : 'Speak something to see the transcription...'}
        </p>
      </div>
      <div className="translation">
        <h2>Translated Text:</h2>
        <p className={highlightTranslation ? 'translated-highlight' : ''}>
          {translatedText || 'Translation will appear here...'}
        </p>
      </div>
    </div>
  );
};

export default TranscriptionDisplay;
