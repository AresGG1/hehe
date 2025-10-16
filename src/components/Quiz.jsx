import { useState, useMemo } from 'react';
import { questions } from '../data/questions';

function Quiz({ onComplete }) {
  // Randomize questions order on component mount
  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answerIndex) => {
    const selectedAnswer = shuffledQuestions[currentQuestion].answers[answerIndex];

    const newAnswers = {
      ...answers,
      [shuffledQuestions[currentQuestion].id]: {
        answerIndex,
        answer: selectedAnswer,
        traits: selectedAnswer.traits
      }
    };
    setAnswers(newAnswers);

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-counter">
        Question {currentQuestion + 1} of {shuffledQuestions.length}
      </div>

      <div className="question-card">
        {currentQ.image && (
          <div className="question-image-container">
            <img
              src={currentQ.image}
              alt="Question illustration"
              className="question-image"
            />
          </div>
        )}

        <h2 className="question-text">{currentQ.text}</h2>

        <div className="answer-options">
          {currentQ.answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button ${
                answers[currentQ.id]?.answerIndex === index
                  ? 'selected'
                  : ''
              }`}
              onClick={() => handleAnswer(index)}
            >
              {answer.text}
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
