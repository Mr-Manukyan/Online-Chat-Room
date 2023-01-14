import { createServer } from "http";
import { Server } from "socket.io";
import app from './app.js'


const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin:"https://online-chat.onrender.com/",
  }
});

io.on('connection', (socket) => {
  console.log('Socket Connected',socket.id)
})

export default httpServer

