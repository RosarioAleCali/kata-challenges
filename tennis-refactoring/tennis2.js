'use strict';

// Original Code: https://github.com/emilybache/Tennis-Refactoring-Kata/blob/main/javascript-jest/tennis2.js

function convertPointsToScore(points) {
  let score = "";

  switch (points) {
    case 0:
      score = "Love";
      break;
    case 1:
      score = "Fifteen";
      break;
    case 2:
      score = "Thirty";
      break;
    case 3:
      score = "Forty";
      break;
    default:
      break;
  }

  return score;
}

function determineAdvantageOrWinner(m_score1, m_score2) {
  const minusResult = m_score1 - m_score2;
  let score = "";

  if (minusResult === 1) { score = "Advantage player1"; }
  else if (minusResult === -1) { score = "Advantage player2"; }
  else if (minusResult >= 2) { score = "Win for player1"; }
  else { score = "Win for player2"; }

  return score;
}

function getScore(P1point, P2point) {
  var score = "";

  if (P1point === P2point) {
    score = P1point > 2 ? "Deuce" : `${convertPointsToScore(P1point)}-All`;
  } else if (P1point >= 4 || P2point >= 4) {
    score = determineAdvantageOrWinner(P1point, P2point);
  } else {
    score = `${convertPointsToScore(P1point)}-${convertPointsToScore(P2point)}`;
  }

  return score;
}

module.exports = getScore;