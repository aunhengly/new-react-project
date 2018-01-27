const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

app.get('/api/v1/health', (req, res) => {
    res.json('I am healthy!');
});

app.listen(PORT, () => console.log('listening on port ', PORT));