import * as cluster from "cluster";
import * as Http from "http";
import { cpus } from "os";

var numCPUs = cpus().length;

console.log(numCPUs);

if (cluster.isMaster) {
  console.log(`master cluster setting up ${numCPUs} workers...`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("online", worker => {
    console.log(`worker ${worker.process.pid} is online`);
  });
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `worker ${worker.process.pid} died with code ${code} and signal ${signal}`
    );
    console.log("starting new worker");
    cluster.fork();
  });
} else {
  Http.createServer((req, res) => {
    console.log("create server:", "process" + process.pid + "say hii");
    res.writeHead(200);
    res.end("process" + process.pid + "say hii");
  }).listen(4000);
}
