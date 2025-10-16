import { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState(null);

  const handleStart = () => {
    setQuizStarted(true);
    setQuizComplete(false);
  };

  const handleComplete = (userAnswers) => {
    setAnswers(userAnswers);
    setQuizComplete(true);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuizComplete(false);
    setAnswers(null);
  };

  return (
    <div className="app">
      {!quizStarted && !quizComplete && (
        <div className="welcome-screen">
          <h1>Який бібік ти сьогодні?</h1>
          <p>
            Обери свій шалений транспортний засіб заре
          </p>
          <button className="start-button" onClick={handleStart}>
            Гоу
          </button>
        </div>
      )}

      {quizStarted && !quizComplete && (
        <Quiz onComplete={handleComplete} />
      )}

      {quizComplete && answers && (
        <Results answers={answers} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
