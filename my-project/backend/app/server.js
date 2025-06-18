const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const { name } = req.body;
  console.log("Received:", name);
  // TODO: Save to DB here
  res.send("Received!");
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
