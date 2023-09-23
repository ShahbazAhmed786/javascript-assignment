import * as inquirer from "inquirer";
import { conductQuiz } from "./quizEngine";
import { quizQuestions } from "./quizQuestions";

async function main() {
  console.log("Welcome to the Quiz!");
  console.log("Answer the following questions:\n");

  const { score, userAnswers } = conductQuiz();

  console.log("\nQuiz Complete! Here are your results:");

  console.log(`Total Score: ${score} out of ${quizQuestions.length}`);

  console.log("\nUser Answers:");
  for (const [question, userAnswer] of Object.entries(userAnswers)) {
    console.log(`- Question: ${question}`);
    console.log(`  Your Answer: ${userAnswer}\n`);
  }
}

main();