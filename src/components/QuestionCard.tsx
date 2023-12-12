import { createGlobalStyle } from "styled-components";
import { AnswerObj } from "../App";
//Styles
import { Wrapper } from "../styles/QuestionCard.styles";
import { ButtonWrapper } from "../styles/QuestionCard.styles";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObj | undefined;
  questionNumber: number;
};

export default function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
}: QuestionProps) {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="card">
        <p
          dangerouslySetInnerHTML={{
            __html: "Q." + questionNumber + " " + question,
          }}
        />
        <div className="button-container">
          {answers.length > 0 &&
            answers.map((answer) => (
              <ButtonWrapper
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
              >
                <button
                  disabled={userAnswer ? true : false}
                  value={answer}
                  onClick={callback}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Poppins', sans-serif;
  }
`;
