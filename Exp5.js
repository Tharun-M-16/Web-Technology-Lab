const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;


const users = [
  { username: 'admin', password: '1234' },
  { username: 'Madhan', password: 'Kama@123' },
  { username: 'Tharun', password: '12345678' },
  { username: 'Yuvaraj', password: 'Yuva@2024' },
  { username: 'Ravi', password: 'Ravi@2025' },
  { username: 'Siva', password: 'Siva@2026' }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.redirect('/login');
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Exp5.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Exp2.html'));
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    
    res.redirect('/index');
  } else {

    res.send(`
      <h2 style="text-align:center; color: red;">Invalid credentials. Please try again.</h2>
      <div style="text-align:center; margin-top:20px;">
        <a href="/login" style="color: blue; text-decoration: underline;">Back to Login</a>
      </div>
    `);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
