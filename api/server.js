const express = require('express');

const server = express();

const Projects = require("../routes/Projects");
const Actions = require("../routes/Actions");

server.use(express.json());

server.get('/',(req, res) => {
    res
    .send(`<h1>Api Challenge</h1>`)
 })
 server.use('/api/projects', Projects);
 server.use('/api/actions', Actions);

 module.exports = server;