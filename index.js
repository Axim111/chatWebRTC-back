import express from "express"
import path from "path"
import { createServer } from 'http';
import { Server } from "socket.io";
import cors from "cors"
const app = express()
app.use(cors())
const httpServer = createServer(app)

const io = new Server(httpServer, { cors: { origin: '*' } });
io.on("connection", socket => {
  console.log("socket: ", socket)
})
httpServer.listen(3000, () => {
  console.log("serverStart")
})