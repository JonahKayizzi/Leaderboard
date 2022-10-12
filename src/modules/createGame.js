const data = { name: 'Game JS' };

export default () => {
  const xx = fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const yy = xx.then((result) => result.json());

  yy.then((resolve) => {
    localStorage.setItem('storedGame', resolve.result.split(' ')[3]);
    return resolve.result.split(' ')[3];
  });
};
