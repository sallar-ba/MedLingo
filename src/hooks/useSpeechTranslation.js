import { useState, useRef } from 'react';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

const useSpeechTranslation = (speechKey, speechRegion) => {
  const [transcribedText, setTranscribedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState(null);
  const recognizerRef = useRef(null); // Use a ref to keep track of the recognizer instance

  const startTranslation = (targetLanguage = 'it') => {
    if (!speechKey || !speechRegion) {
      setError('Speech Key or Region is missing. Please check your setup.');
      return;
    }

    try {
      const translationConfig = sdk.SpeechTranslationConfig.fromSubscription(speechKey, speechRegion);
      translationConfig.speechRecognitionLanguage = 'en-US';
      translationConfig.addTargetLanguage(targetLanguage);

      const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
      const recognizer = new sdk.TranslationRecognizer(translationConfig, audioConfig);
      recognizerRef.current = recognizer; // Store the recognizer in the ref

      recognizer.recognizing = (_, event) => {
        setTranscribedText(event.result.text);
      };

      recognizer.recognized = (_, event) => {
        if (event.result.reason === sdk.ResultReason.TranslatedSpeech) {
          setTranscribedText(event.result.text);
          setTranslatedText(event.result.translations.get(targetLanguage));
        } else if (event.result.reason === sdk.ResultReason.NoMatch) {
          setError('No speech recognized.');
        }
      };

      recognizer.canceled = (_, event) => {
        setError('Recognition canceled. Check your microphone or Speech Service.');
        recognizer.stopContinuousRecognitionAsync(); // Ensure recognizer stops on cancellation
      };

      recognizer.sessionStopped = () => {
        console.log('Session stopped.');
        recognizer.stopContinuousRecognitionAsync();
      };

      recognizer.startContinuousRecognitionAsync(
        () => console.log('Translation started.'),
        (err) => setError('Failed to start translation: ' + err)
      );
    } catch (err) {
      setError('Initialization failed: ' + err);
    }
  };

  const stopTranslation = () => {
    if (recognizerRef.current) {
      recognizerRef.current.stopContinuousRecognitionAsync(
        () => {
          console.log('Translation stopped.');
          recognizerRef.current = null; // Clear the recognizer
        },
        (err) => {
          console.error('Failed to stop translation:', err);
        }
      );
    }
  };

  return { transcribedText, translatedText, startTranslation, stopTranslation, error };
};

export default useSpeechTranslation;
