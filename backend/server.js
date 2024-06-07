import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is ready');
});

app.get('/api/jokes', (req, res) => { // Updated endpoint to /api/jokes
  const jokes = [
    { id: 1, title: 'A joke', content: 'This is a joke' },
    { id: 2, title: 'Another joke', content: 'this is another joke' },
    { id: 3, title: 'Third joke', content: 'This is third joke' },
    { id: 4, title: 'A fourth joke', content: 'This is fourth joke' },
    { id: 5, title: 'A fifth joke', content: 'This is a fifth joke' }
  ];
  res.send(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(`listening to the port ${process.env.PORT}`);
});
