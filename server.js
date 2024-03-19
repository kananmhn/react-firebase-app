const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('http://localhost:3001/api/update-color', (req, res) => {
  const { fontColor } = req.body;

  // Update the JSON file
  fs.writeFileSync('colors.json', JSON.stringify({ fontColor }));

  res.send({ status: 'success' });
});

app.listen(3001, () => console.log('Server listening on port 3001'));