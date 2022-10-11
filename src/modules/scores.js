import Score from './score.js';

class Scores {
  constructor() {
    this.scores = [
      {
        player: 'Obwo James',
        score: 80,
      },
    ];
  }

  POST = (player, score) => {
    const playerScore = new Score(player, score);
    this.scores.push(playerScore);
  };

  GET = () => this.scores;
}

const gameScores = new Scores();

export default gameScores;
