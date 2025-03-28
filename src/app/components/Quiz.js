"use client";

// Quiz component
// Takes an array of questions and answers and creates a quiz

import { useState } from "react";

export default function Quiz({ data }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Null = not selected
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (id) => {
    setSelectedAnswer(id);

    // Check if answer is correct
    if (
      data.questions[questionIndex].answers.find((obj) => {
        return obj.id === id;
      }).correct
    ) {
      // Correct
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      // Incorrect
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    if (questionIndex === data.questions.length - 1) {
      // End of quiz
      return setShowResults(true);
    } else {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(false);
      return;
    }
  };

  const resetQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(false);
    setScore(0);
    setShowResults(false);
  };

  /* Example data
  const data = {
    questions: [
      {
        id: 1,
        title: "title 1",
        correctMessage: "Correct! insert message here",
        incorrectMessage: "Incorrect! insert message here",
        answers: [
          { id: 1, text: "test1", correct: true },
          { id: 2, text: "test2", correct: false },
          { id: 3, text: "test3", correct: true },
          { id: 4, text: "test4", correct: false },
        ],
      },
      {
        id: 2,
        title: "title 2",
        correctMessage: "Correct! insert message here",
        incorrectMessage: "Incorrect! insert message here",
        answers: [
          { id: 1, text: "test1", correct: true },
          { id: 2, text: "test2", correct: false },
          { id: 3, text: "test3", correct: true },
          { id: 4, text: "test4", correct: false },
        ],
      },
    ],
  };
  */

  return (
    <div className="p-4 border border-solid border-gray-200 rounded-lg shadow-lg prose max-w-3xl">
      {!showResults ? (
        <div>
          <p className="text-gray-500 mt-0 mb-4">
            <span className="text-black">{questionIndex + 1}</span>/
            {data.questions.length}
          </p>
          <h2 className="mt-0 mb-4">{data.questions[questionIndex].title}</h2>
          {data.questions[questionIndex].answers.map((item) =>
            selectedAnswer ? (
              item.correct ? (
                // Correct
                <button
                  className="w-full text-left p-4 mb-2 bg-green-100 border-2 border-solid border-green-300 rounded-lg shadow-xs cursor-default transition-colors"
                  key={item.id}
                >
                  {item.text}
                </button>
              ) : (
                // Incorrect
                <button
                  className="w-full text-left p-4 mb-2 bg-red-100 border-2 border-solid border-red-300 rounded-lg shadow-xs cursor-default transition-colors"
                  key={item.id}
                >
                  {item.text}
                </button>
              )
            ) : (
              // Not selected
              <button
                className="w-full text-left p-4 mb-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border-2 border-solid border-slate-300 rounded-lg shadow-xs"
                key={item.id}
                onClick={() => handleAnswerClick(item.id)}
              >
                {item.text}
              </button>
            )
          )}
          {selectedAnswer && (
            <div className="flex flex-row justify-between items-center transition-opacity">
              {isCorrect ? (
                // Correct message
                <p className="mt-4 text-green-500">
                  {data.questions[questionIndex].correctMessage}
                </p>
              ) : (
                // Incorrect message
                <p className="mt-4 text-red-500">
                  {data.questions[questionIndex].incorrectMessage}
                </p>
              )}
              <button
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-4 rounded-full shadow-xs text-sm font-bold"
                onClick={nextQuestion}
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2 className="mt-0 mb-4">Results</h2>
          {score === data.questions.length ? (
            <p className="mt-4 text-gray-500">
              Congratulations! You scored {score}/{data.questions.length} questions correct.
            </p>
          ) : (
            <p className="mt-4 text-gray-500">
              You scored {score}/{data.questions.length}. Better luck next time!
            </p>
          )}

          <button
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-4 rounded-full shadow-xs text-sm font-bold"
            onClick={resetQuiz}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
