'use strict';

// Original Code: https://github.com/emilybache/Tennis-Refactoring-Kata/blob/main/javascript-jest/tennis1.js

function convertPointsToEvenScore(point) {
  let score = "";

  switch (point) {
    case 0:
      score = "Love-All";
      break;
    case 1:
      score = "Fifteen-All";
      break;
    case 2:
      score = "Thirty-All";
      break;
    default:
      score = "Deuce";
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

function getScore(m_score1, m_score2) {
  let score = "";

  if (m_score1 === m_score2) {
    score = convertPointsToEvenScore(m_score1);
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    score = determineAdvantageOrWinner(m_score1, m_score2);
  } else {
    score = `${convertPointsToScore(m_score1)}-${convertPointsToScore(m_score2)}`;
  }

  return score;
}

module.exports = getScore;
