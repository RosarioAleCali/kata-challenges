'use strict';

// Original Code: https://github.com/emilybache/Tennis-Refactoring-Kata/blob/main/javascript-jest/tennis3.js

function getScore(p1, p2) {
  const scores = ["Love", "Fifteen", "Thirty", "Forty"];
  
  let score = "";

  if (p1 === p2) {
    score = p1 > 2 ? "Deuce" : `${scores[p1]}-All`;
  } else if (p1 >= 4 || p2 >= 4) {
    let playerName = p1 > p2 ? "player1" : "player2";
    score = ((p1 - p2) * (p1 - p2) === 1) ? "Advantage " + playerName : "Win for " + playerName;
  } else {
    score = `${scores[p1]}-${scores[p2]}`;
  }

  return score;
}

module.exports = getScore;