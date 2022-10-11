import createHTMLElement from './createHTMLelement.js';
import gameScores from './scores.js';

const playerScores = gameScores.GET();
const scoresContainer = document.querySelector('.scores-list');
export default () => {
  scoresContainer.innerHTML = '';
  playerScores.forEach((score, i) => {
    let scoreClass = '';
    if (i % 2 === 0) {
      scoreClass = 'player-score-even';
    } else {
      scoreClass = 'player-score-odd';
    }
    createHTMLElement(
      'li',
      `${scoreClass}`,
      'player-score',
      `${score.player}: ${score.score}`,
      scoresContainer
    );
  });
};
