console.log('Script starting...');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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

if (require.main === module) {
  console.log('About to start server...');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Pour Vercel, nous devons exporter l'app
module.exports = app;
