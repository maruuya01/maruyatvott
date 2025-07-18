const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/token', (req, res) => {
  const token = generateToken();
  res.json({ usage: token });
});

function generateToken() {
  return Math.random().toString(36).substring(2, 12);
}

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});