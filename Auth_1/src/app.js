const express = require('express');
const authRoutes = require('./routes/auth.route');
const cookieParse = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParse());

app.use('/api/auth/',authRoutes);

module.exports = app;