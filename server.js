const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/update-color', (req, res) => {
    const { fontColor } = req.body;
  
    // Read content of the file
    fs.readFile('colors.json', 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file from disk: ${err}`);
      } else {
        // Parse JSON string to JSON object
        const colors = JSON.parse(data);
  
        // Add or update fontColor property
        colors.fontColor = fontColor;
  
        // Write updated color data back to file
        fs.writeFile('colors.json', JSON.stringify(colors, null, 4), (err) => {
          if (err) {
            console.error(`Error writing file to disk: ${err}`);
          }
        });
      }
    });
  
    res.send({ status: 'success' });
  });
app.listen(3001, () => console.log('Server listening on port 3001'));