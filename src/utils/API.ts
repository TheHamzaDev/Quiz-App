import { Shuffle } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionStates = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: Shuffle([...question.incorrect_answers, question.correct_answer])
  }));
};
