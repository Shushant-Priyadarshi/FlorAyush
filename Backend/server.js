import express from 'express';
import fs from 'fs/promises'; // Use fs/promises for async/await
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize express app
const app = express();
//example
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Path to the users.json file
const usersFilePath = path.join(__dirname, 'users.json');

// Route to handle login
app.post('/login', async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);

    const { email, password } = req.body;
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
});

// Route to handle signup and update users.json
app.post('/update-users', async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);

    const newUser = req.body;
    if (!newUser || !newUser.email || !newUser.password) {
      return res.status(400).json({ message: 'Invalid data format' });
    }

    // Add new user and save
    users.push(newUser);

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    res.status(200).json({ message: 'Users updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
});

// Sample route to check the server
app.get('/route', (req, res) => {
  res.json({ message: 'Backend is running' });
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
