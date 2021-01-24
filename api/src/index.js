const express = require('express');
const cors = require('cors');

const app = express();

const { router: UserRoutes } = require('./user/routes');

app.use(cors());
app.use(express.json());

app.use('/users', UserRoutes)

module.exports = app;