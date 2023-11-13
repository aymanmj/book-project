const http = require("http");

const app = require("./app");
const { port } = require("./config/config");

const myport = port || 5000;

const server = http.createServer(app);

server.listen(process.env.PORT || myport, () => {
  console.log(`listening on port ${myport}`);
});
