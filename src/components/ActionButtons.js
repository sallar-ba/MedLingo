import React from 'react';

const ActionButtons = ({ startTranslation, stopTranslation, targetLanguage }) => {
  return (
    <div className="action-buttons">
      <button className="btn start-btn" onClick={() => startTranslation(targetLanguage)}>
        Start Translation
      </button>
      <button className="btn stop-btn" onClick={stopTranslation}>
        Stop Translation
      </button>
    </div>
  );
};

export default ActionButtons;
