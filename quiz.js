import chalk from "chalk";
import { getQuestions } from "./getQuestions.js";
import { addScores } from "./manageScores.js";
import rs from "readline-sync";

function playGame() {
  console.log(chalk.blue.bold("Welcome to the quiz!"));
  const questions = getQuestions();
  const userName = rs.question("What's your name? ");
  const qAmount = rs.question(
    `Welcome ${userName}! How many questions do you want? `
  );
  let qCounter = 1;
  let correctCounter = 0;
  while (qCounter <= qAmount) {
    let qNumber = Math.floor(Math.random() * 547);
    let question = questions[qNumber];
    console.log(
      chalk.blue.bold(question.question),
      "\n",
      chalk.bgMagentaBright.black.bold(" A "),
      question.A,
      "\n",
      chalk.bgGreen.black.bold(" B "),
      question.B,
      "\n",
      chalk.bgYellow.black.bold(" C "),
      question.C,
      "\n",
      chalk.bgRedBright.black.bold(" D "),
      question.D
    );
    const answer = rs.question(chalk.cyanBright.bold("What's your choice? "));
    if (answer.toUpperCase().trim() === question.answer) {
      console.log(chalk.green.bold("Well done! =)"));
      correctCounter++;
    } else {
      console.log(
        chalk.red.bold(`YOU'RE WRONG!!! The answer was ${question.answer}!`)
      );
    }
    qCounter++;
    if (qCounter > qAmount) {
      console.log(
        chalk.yellowBright.bold(
          `The quiz is over! You got ${correctCounter} out of ${qAmount} questions right!`
        )
      );
      console.log(addScores(userName, (correctCounter / qAmount) * 100));
    }
  }
}

playGame();
