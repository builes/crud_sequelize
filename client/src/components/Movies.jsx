import { useSelector } from 'react-redux';

const Movies = () => {
	const movies = useSelector((state) => state.movies);

	return (
		<div>
			<h1>Movies</h1>
			{movies ? (
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>
							<h2>{movie.title}</h2>
							<p>{movie.description}</p>
						</li>
					))}
				</ul>
			) : (
				<p>No movies yet</p>
			)}
		</div>
	);
};

export default Movies;
