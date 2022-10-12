const data = { name: 'Game JS' };
export default async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  localStorage.setItem('storedGame', result.result.split(' ')[3]);
  return result.result.split(' ')[3];
};
