// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./models/server');

// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();
