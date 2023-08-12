import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import RoutesApp from './routes/RoutesApp';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setMovies } from './redux/slices/moviesSlice';

const App = () => {
	const [socket, setSocket] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		const socketConnection = io.connect('http://localhost:4000', {
			transports: ['websocket'],
		});

		setSocket(socketConnection);

		return () => {
			// Clean up: close the socket connection when the component is unmounted
			socketConnection.disconnect();
		};
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on('current-movies', (data) => {
				dispatch(setMovies(data));
			});
		}
	}, [socket]);

	const addMovie = (movie) => {
		socket.emit('add-movie', movie);
	};

	return (
		<div>
			<Navigation />
			<RoutesApp addMovie={addMovie} />
		</div>
	);
};

const Navigation = () => {
	const user = useSelector((state) => state.user);

	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default App;
