import React from 'react';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option.text}
            className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
