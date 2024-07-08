import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Quiz Completed</h2>
      <p className="text-xl mb-4">Your Score: {score} out of {total}</p>
      <button
        className="w-full p-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </div>
  );
};

export default Result;
