import { readFileSync, writeFileSync } from "node:fs";
import { get } from "node:http";

export function getScores() {
  try {
    return JSON.parse(readFileSync("scores.json"));
  } catch (err) {
    return [];
  }
}

export function addScores(userName, score) {
  const scores = getScores();
  let newScores = [];
  let userFound = false;
  for (const existingScore of scores) {
    if (userName === existingScore.username) {
      userFound = true;
      if (score > existingScore.points) {
        newScores.push({ username: userName, points: score });
      } else {
        newScores.push({
          username: existingScore.username,
          points: existingScore.points,
        });
      }
    } else {
      newScores.push({
        username: existingScore.username,
        points: existingScore.points,
      });
    }
  }
  if (!userFound) {
    newScores.push({
      username: userName,
      points: score,
    });
  }
  writeFileSync("scores.json", JSON.stringify(newScores));
  return newScores;
}
