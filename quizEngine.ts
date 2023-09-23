import { quizQuestions } from "./quizQuestions";

export function conductQuiz(): { score: number; userAnswers: Record<string, string> } {
  let score = 0;
  const userAnswers: Record<string, string> = {};

  for (const questionObj of quizQuestions) {
    const userAnswer = promptQuestion(questionObj.question);
    userAnswers[questionObj.question] = userAnswer;

    if (userAnswer.toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
      score++;
    }
  }

  return { score, userAnswers };
}

function promptQuestion(question: string): string {
  // Use Inquirer to prompt the question and collect the user's answer
  // You can customize the prompt here
}