import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socketio = io("http://localhost:5000");
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
// const SOCKET_SERVER_URL = "http://localhost:5000";

const TestChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socket = io();

  useEffect(() => {
    socket.current = socketio(socket, {
      query: { roomId },
    });

    socket.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socket.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socket.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socket.current.id,
    });
  };

  return { messages, sendMessage };
};

export default TestChat;
