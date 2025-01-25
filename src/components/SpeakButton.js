import React from 'react';

const SpeakButton = ({ speakText, translatedText }) => {
  return (
    <button
      className="btn speak-btn"
      onClick={() => speakText(translatedText)}
      disabled={!translatedText}
    >
      Speak Translated Text
    </button>
  );
};

export default SpeakButton;
