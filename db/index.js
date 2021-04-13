require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@main.uzttk.mongodb.net/home-recipes?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch((err) => {
        console.log(`Error connecting to database \n${err}`):
    });
const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to home-recipes database.");
});

module.exports = db;