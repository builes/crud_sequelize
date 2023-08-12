// Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
	constructor() {
		this.app = express();
		this.port = 4000;

		// Http server (para usar socket.io)
		this.server = http.createServer(this.app);

		// Aca se configura el servidor de sockets
		this.io = socketio(this.server, {
			/* configuraciones */
		});
	}

	middlewares() {
		// CORS
		this.app.use(cors());
	}

	configurarSockets() {
		// this.io hace referencia al servidor de sockets
		// Cuando se crea una instancia de Socket, se ejecuta el método socketEvents()
		// que se encarga de escuchar los eventos que se emitan desde el cliente y emitir eventos
		new Sockets(this.io);
	}

	execute() {
		// Inicializar Middlewares
		this.middlewares();

		// Inicializar sockets
		this.configurarSockets();

		// Inicializar Server
		this.server.listen(this.port, () => {
			console.log('Server corriendo en puerto:', this.port);
		});
	}
}

module.exports = Server;
