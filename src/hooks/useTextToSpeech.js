import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

const useTextToSpeech = (speechKey, speechRegion) => {
  const speakText = (text, voiceName = 'en-US-JennyNeural') => {
    if (!speechKey || !speechRegion) {
      console.error('Speech Key or Region is missing. Please check your setup.');
      return;
    }

    if (!text) {
      console.error('No text provided for speech synthesis.');
      return;
    }

    try {
      const speechConfig = sdk.SpeechConfig.fromSubscription(speechKey, speechRegion);
      speechConfig.speechSynthesisVoiceName = voiceName;
      const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
      const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

      synthesizer.speakTextAsync(
        text,
        (result) => {
          if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
            console.log('Speech synthesis completed.');
          } else {
            console.error('Speech synthesis canceled:', result.errorDetails);
          }
          synthesizer.close();
        },
        (err) => {
          console.error('Error during speech synthesis:', err);
          synthesizer.close();
        }
      );
    } catch (err) {
      console.error('Error initializing Text-to-Speech:', err);
    }
  };

  return { speakText };
};

export default useTextToSpeech;
