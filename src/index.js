import './styles.css';
import populateScores from './modules/populateScores.js';
import createNewGame from './modules/createGame.js';
import postScoresToAPI from './modules/addScore.js';

window.onload = () => {
  const addScore = document.querySelector('.submit-button');
  const refreshButton = document.querySelector('.refresh-button');
  populateScores();

  const gameID = localStorage.getItem('storedGame') || createNewGame();
  console.log(gameID);
  addScore.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = document.querySelector('.player-name');
    const theScore = document.querySelector('.player-score');
    postScoresToAPI(playerName.value, theScore.value, gameID);
    populateScores();
  });

  refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    populateScores();
  });
};
