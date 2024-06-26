const express = require("express")
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const AccountRouter = require("./routes/AccountRouter")
const mongoose = require('mongoose');

// cofig request.body
app.use(express.urlencoded());
app.use(express.json());

// congif MOgo
const uri = process.env.DATABASE;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

//config env
require('dotenv').config();
app.use(morgan("common"));
app.use(cors());

app.use("/account", AccountRouter)

app.listen(8080, () => {
    console.log("Hello");
})