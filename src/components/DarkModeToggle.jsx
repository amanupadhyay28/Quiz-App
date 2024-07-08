import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <label htmlFor="dark-mode-toggle" className="flex items-center cursor-pointer">
        <div className="mr-2 text-lg">{isDarkMode ? '🌙' : '☀️'}</div>
        <div className="relative">
          <input
            id="dark-mode-toggle"
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
              isDarkMode ? 'transform translate-x-full bg-gray-800' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
