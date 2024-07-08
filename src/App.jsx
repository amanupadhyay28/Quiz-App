import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './components/Question';
import Result from './components/Results';
import DarkModeToggle from './components/DarkModeToggle';
import { ClipLoader } from 'react-spinners';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
        const fetchedQuestions = response.data.results.map((question) => ({
          text: question.question,
          options: [
            ...question.incorrect_answers.map(answer => ({ text: answer, isCorrect: false })),
            { text: question.correct_answer, isCorrect: true }
          ].sort(() => Math.random() - 0.5) // Shuffle options
        }));
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <div className="absolute top-4 right-4">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      {questions.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color={isDarkMode ? '#ffffff' : '#000000'} size={150} />
        </div>
      ) : showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question question={questions[currentQuestion]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
