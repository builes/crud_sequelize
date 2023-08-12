import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

//import routes
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

//initialize socket.io
const server = http.createServer(app);

//create instance of socket.io
const io = new Server(server);

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

//socket.io
io.on('connection', (socket) => {
	console.log('a user connected');

	// Escucha el evento 'test'
	socket.on('test', (data) => {
		console.log('Mensaje recibido desde el cliente:', data);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

export default app;
