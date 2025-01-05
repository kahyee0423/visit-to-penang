const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Function to read JSON data
function readJsonFile(filePath) {
    try {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
       const parsedData = JSON.parse(jsonData);
       console.log('Successfully read:', filePath)
      return parsedData;
    } catch (error) {
      console.error('Error reading JSON file:', filePath, error);
      return null;
    }
}

 app.get('/api/tourist-spots', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'tourist-spots-data.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load tourist spots data' });
    }
  });

app.get('/api/entertainment', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'entertainment.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load entertainment data' });
    }
  });

 app.get('/api/food', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'food.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load food data' });
    }
});

app.get('/api/team', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'team.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load team data' });
    }
  });

app.get('/api/tourist', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'tourist.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load tourist data' });
    }
  });

app.get('/api/entertainment-page', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'entertainment-page.json');
    const data = readJsonFile(filePath);
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load entertainment page data' });
    }
  });

  app.get('/api/food-page', (req, res) => { 
    const filePath = path.join(__dirname, 'data', 'food-page.json'); 
      const data = readJsonFile(filePath);
    if (data) {
        res.json(data);
    } else {
      res.status(500).json({ message: 'Failed to load food page data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});