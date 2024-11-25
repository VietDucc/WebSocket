const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let connections = 0;

app.use(express.static("frontend/public"));

io.on("connection", (socket) => {
  connections++;
  console.log(`Client connected. Active connections: ${connections}`);

  const interval = setInterval(() => {
    const data = {
      time: new Date().toLocaleTimeString(),
      connections,
    };
    socket.emit("serverData", data);
  }, 1000);

  socket.on("disconnect", () => {
    connections--;
    clearInterval(interval);
    console.log(`Client disconnected. Active connections: ${connections}`);
  });
});

server.listen(4000, () =>
  console.log("WebSocket server running on http://localhost:4000")
);
