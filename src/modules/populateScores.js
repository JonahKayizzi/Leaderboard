import createHTMLElement from './createHTMLelement.js';

export default async () => {
  const gameID = localStorage.getItem('storedGame');
  if (gameID) {
    const scoresContainer = document.querySelector('.scores-list');
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    );
    const result = await response.json();
    scoresContainer.innerHTML = '';
    result.result.forEach((score) => {
      createHTMLElement(
        'li',
        'play-score',
        'player-score',
        `${score.user}: ${score.score}`,
        scoresContainer,
      );
    });
  }
};
