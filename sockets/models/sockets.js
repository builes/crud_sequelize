const Movies = require('./movies');

class Sockets {
	constructor(io) {
		// this.io hace referencia al servidor de sockets
		this.io = io;

		//Creamos una instancia de Movies para poder usar sus métodos
		this.movies = new Movies();

		// cuando se crea una instancia de esta clase, se ejecuta el método socketEvents()
		// que se encarga de escuchar los eventos que se emitan desde el cliente
		this.socketEvents();
	}

	socketEvents() {
		// Este evento se ejecuta cuando un cliente se conecta al servidor
		// socket es el cliente que se conecta
		this.io.on('connection', (socket) => {
			console.log('Cliente conectado');

			// Emitir al cliente conectado todas las bandas actuales
			socket.emit('current-movies', this.movies.getMovies());

			// Escuchar cuando un cliente agrega una película
			socket.on('add-movie', (data) => {
				// console.log(data);
				this.movies.addMovie(data);
				// console.log(this.movies.getMovies());
				// Emitir a todos los clientes conectados la nueva película
				this.io.emit('current-movies', this.movies.getMovies());
			});

			// cuando se desconecta un cliente
			socket.on('disconnect', () => {
				console.log('Cliente desconectado');
			});
		});
	}
}

module.exports = Sockets;
