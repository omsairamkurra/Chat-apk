const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

let votes = {
    option1: 0,
    option2: 0,
};

let messages = [];

app.get('/api/poll', (req, res) => {
    res.json({ votes });
});

app.post('/api/vote', (req, res) => {
    const { option } = req.body;
    votes[option]++;
    res.json({ success: true });
});

app.get('/api/chat', (req, res) => {
    res.json({ messages });
});

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    messages.push(message);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
