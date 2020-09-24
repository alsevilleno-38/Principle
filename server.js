const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
const server = express();
server.set("view engine", "pug");
server.set("views", "views");
server.use(bodyParser.urlencoded());
server.use(express.static("./public"));
server.get("/create", (req, res, next) => {
    console.log("/create");
    return res.sendFile(path.resolve(__dirname, "./create.html"));
})
server.get("/", (req, res, next) => {            
    return res.sendFile(path.resolve(__dirname, "./index.html"));    
});
server.post("/submit", (req, res, next) => {    
    return res.sendFile(path.resolve(__dirname, "./submit.html"));
})

server.listen(port);
console.log(`Listening to port ${port}...`)