"use strict";
exports.__esModule = true;
var cluster = require("cluster");
var Http = require("http");
var os_1 = require("os");
var numCPUs = os_1.cpus().length;
console.log(numCPUs);
if (cluster.isMaster) {
    console.log("master: ");
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
        console.log("forked");
    }
}
else {
    Http.createServer(function (req, res) {
        console.log("create server:", "process" + process.pid + "say hii");
        res.writeHead(200);
        res.end("process" + process.pid + "say hii");
    }).listen(4000);
}
