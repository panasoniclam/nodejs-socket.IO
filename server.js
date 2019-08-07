const app = require('./app');
const server = require('http').Server(app)
require('dotenv').config();
server.listen(process.env.PORT)