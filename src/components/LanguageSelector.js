import React from 'react';

const LanguageSelector = ({ supportedLanguages, targetLanguage, setTargetLanguage }) => {
  return (
    <div className="language-selector">
      <label htmlFor="language" className="label">Select Target Language:</label>
      <select
        id="language"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        className="dropdown"
      >
        {supportedLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
