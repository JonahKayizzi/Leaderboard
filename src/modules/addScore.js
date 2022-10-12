export default async (playerName, playerScore, gameID) => {
  const data = {
    user: playerName,
    score: playerScore,
  };
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
};
