const express = require('express');
const app = express();
const db = require("./models/index");

db.sequelize.sync({ force: false });

app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true }));

const tasks = require('./routes/tasks');
app.use('/api', tasks)

app.listen(3001, () => console.log("Server is fucking runnning"));