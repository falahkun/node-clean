const express = require('express');
const dotenv = require('dotenv').config();
const {config} = require('./config/config');
const {serverConfig} = require('./frameworks/webserver/server');

const app = express();
const server = require('http').createServer(app);

serverConfig(app, server, config).startServer();