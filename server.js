const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const connection = require('./db');

app.use(cors());
app.use(express.json());

app.get('/api/get-colors', (req, res) => {
  const selectQuery = 'SELECT * FROM color_selection';

  connection.query(selectQuery, (err, results) => {
      if (err) {
          console.error('Error retrieving data from MySQL:', err);
          res.status(500).json({ error: 'Error retrieving color settings' });
          return;
      }

      res.json(results);
  });
});

app.post('/api/update-color', (req, res) => {
    const {  fontColor, backgroundColor, BtnTextColor, BtnBgcolor, fontSize } = req.body;
  
  // Get the id of the latest record
  connection.query('SELECT color_id FROM color_selection ORDER BY color_id DESC LIMIT 1', (err, results) => {
    if (err) {
        console.error('Error getting latest id from MySQL:', err);
        res.status(500).json({ error: 'Error getting latest id' });
        return;
    }

    const color_id = results[0].color_id;

    // Read content of the file
    fs.readFile('colors.json', 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file from disk: ${err}`);
      } else {
        // Parse JSON string to JSON object
        const colors = JSON.parse(data);
        console.log(colors);
        // Add or update color properties only if they are provided in the request
        if (fontColor) colors.fontColor = fontColor;
        if (backgroundColor) colors.backgroundColor = backgroundColor;
        if (BtnTextColor) colors.BtnTextColor = BtnTextColor;
        if (BtnBgcolor) colors.BtnBgcolor = BtnBgcolor;
        if (fontSize) colors.fontSize = fontSize;
  
        // Write updated color data back to file
        fs.writeFile('colors.json', JSON.stringify(colors, null, 4), (err) => {
          if (err) {
            console.error(`Error writing file to disk: ${err}`);
          }
        });

        // Insert color data into the database
        const updateQuery = 'UPDATE color_selection SET fontColor = ?, backgroundColor = ?, BtnTextColor = ?, BtnBgcolor = ?, fontSize = ? WHERE color_id = ?';
        const values = [fontColor, backgroundColor, BtnTextColor, BtnBgcolor, fontSize, color_id];
    
        connection.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error('Error updating data in MySQL:', err);
                res.status(500).json({ error: 'Error updating color settings' });
                return;
            }
            res.json({ message: 'Color settings updated successfully' });
        });
      }
    });
    });
});

app.listen(3001, () => console.log('Server listening on port 3001'));