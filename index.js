const express = require('express');
const cors = require('cors');
const { response } = require('express');

const db = require('./db');
const recipeRouter = require('./routes/recipeRouter');

const app = express();
const apiPort = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req,res) => {
    res.send('Client successfully connected');
});

app.use('/api', recipeRouter);

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`));