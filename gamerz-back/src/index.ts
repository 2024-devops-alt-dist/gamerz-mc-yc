import app from "./app";
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const server = createServer(app)
const io = new Server(server);

// on utilisera le port 3000 pour accéder au serveur
const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (msg) => {
    console.log('Message reçu :', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client déconnecté');
  });
});

// démarrage du serveur sur le port défini
server.listen(port, () => {
    console.log(`Server socket listening on port ${port}`);
  })