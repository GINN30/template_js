const express = require("express");
const Sequelize = require("sequelize");
const { sequelize } = require("./models");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Local Guys, running on port ${port}`);
});

sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }).catch((error) => {
        console.log("unable to connect to the database:", error);
    })