import createHTMLElement from './createHTMLelement.js';

export default () => {
  const gameID = localStorage.getItem('storedGame');
  const scoresContainer = document.querySelector('.scores-list');

  const playScores = fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`
  );
  const yy = playScores.then((response) => response.json());

  yy.then((resolve) => {
    scoresContainer.innerHTML = '';
    resolve.result.forEach((score) => {
      createHTMLElement(
        'li',
        'play-score',
        'player-score',
        `${score.user}: ${score.score}`,
        scoresContainer
      );
    });
  });
};
