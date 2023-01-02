const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');
const dbUrl = config.get('dbUrl');
mongoose.set('strictQuery', true);

const start = () => {
    try {
        mongoose.connect(dbUrl);
        

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!`)
        })
    } catch (e) {
        
    }
}

start();