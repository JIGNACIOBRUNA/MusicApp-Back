const express = require("express");
const server = express();
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

server.use(express.json());
server.use(cookieParser());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use("/", router);

 module.exports = server;