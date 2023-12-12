import React, { useState } from "react";
import { fetchQuestions } from "./utils/API";
import { createGlobalStyle } from "styled-components";
//Components
import QuestionCard from "./components/QuestionCard";
//Types
import { QuestionStates } from "./utils/API";
//Styles
import { Wrapper } from "./styles/App.styles";

export type AnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionStates[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(true);
  const [difficulty, setDifficulty] = useState("");

  const startQuiz = async () => {
    setLoading(true);
    setOver(false);
    const newQuestions = await fetchQuestions(QUESTIONS, difficulty);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setDifficulty("");
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!over) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === QUESTIONS) {
      setOver(true);
    } else {
      setNumber(nextQuestion);
      console.log(nextQuestion);
    }
  };

  return (
    <Wrapper>
      <GlobalStyle />
      {userAnswers.length === QUESTIONS && (
        <p className="score">
          Congratulations! You answered {score} / {QUESTIONS} questions
          correctly.
        </p>
      )}
      <section>
        <h1>Quiz App</h1>
        {over || userAnswers.length === QUESTIONS ? (
          <div className="b-container">
            <button
              type="button"
              className="b-easy"
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </button>
            <button
              type="button"
              className="b-medium"
              onClick={() => setDifficulty("medium")}
            >
              Medium
            </button>
            <button
              type="button"
              className="b-hard"
              onClick={() => setDifficulty("hard")}
            >
              Hard
            </button>
          </div>
        ) : null}
        {over || userAnswers.length === QUESTIONS ? (
          <button
            type="button"
            className={difficulty === "" ? "b-start-disabled" : "b-start"}
            onClick={startQuiz}
            disabled={difficulty === ""}
          >
            Start Quiz
          </button>
        ) : null}
      </section>
      <div className="card-container">
        {!loading && !over && (
          <QuestionCard
            questionNumber={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!over &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== QUESTIONS - 1 && (
            <button type="button" className="b-next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </div>
    </Wrapper>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
`;
