import { SpeechConfig } from 'microsoft-cognitiveservices-speech-sdk';

export const createSpeechConfig = () => {
    const speechConfig = SpeechConfig.fromSubscription(
        process.env.REACT_APP_SPEECH_KEY,
        process.env.REACT_APP_SPEECH_REGION
    );
    return speechConfig;
};
