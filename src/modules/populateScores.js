import createHTMLElement from './createHTMLelement.js';
import gameScores from './scores.js';

const playerScores = gameScores.GET();
const scoresContainer = document.querySelector('.scores-list');
export default () => {
  scoresContainer.innerHTML = '';
  playerScores.forEach((score) => {
    createHTMLElement(
      'li',
      'play-score',
      'player-score',
      `${score.player}: ${score.score}`,
      scoresContainer,
    );
  });
};
