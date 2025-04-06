console.log('Script starting...');

import express from 'express';
import http from 'http';

const app = express();

// Middleware pour le CORS et JSON
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Route de test simple
app.get('/', (req, res) => {
  console.log('Root route hit');
  res.json({ message: 'API is running!' });
});

// Route de test
app.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Test endpoint working!' });
});

// Route temporaire pour les scores
app.get('/api/scores', (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 3000;

console.log('About to start server...');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Pour Vercel, nous devons exporter l'app
export default app;
