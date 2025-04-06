console.log('Script starting...');

import express from 'express';
import http from 'http';

const app = express();
app.use(express.json());

// Route de test simple
app.get('/', (req, res) => {
  console.log('Root route hit');
  res.json({ message: 'Hello World' });
});

// Route de test
app.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Server is running!' });
});

const PORT = process.env.PORT || 3000;

console.log('About to start server...');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
