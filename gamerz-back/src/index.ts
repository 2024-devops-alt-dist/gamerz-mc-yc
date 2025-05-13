import app from "./app";
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const server = createServer(app)
const io = new Server(server, {
  // CORS pour les requêtes WebSocket
  cors: {
    origin: "http://localhost:5175",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// on utilisera le port 3000 pour accéder au serveur
const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);

    // Ici, on peut ajouter la logique pour stocker le message dans la base de données
    
  });

  socket.on('disconnect', () => {
    console.log('Client déconnecté');
  });
});

// démarrage du serveur sur le port défini
server.listen(port, () => {
    console.log(`Server socket listening on port ${port}`);
  })