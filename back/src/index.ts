// @ts-nocheck
import { app } from "./app";
import { start } from "./db/mongoose";
start();

const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});


const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket: { id: any; handshake: { query: { roomId: any; }; }; join: (arg0: any) => void; on: (arg0: string, arg1: { (data: string): void; (): void; }) => void; leave: (arg0: any) => void; }) => {
    console.log(`Client ${socket.id} connected`);

    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data: any) => {
        io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });

    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} diconnected`);
        socket.leave(roomId);
    });
});


let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
