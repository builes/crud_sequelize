const Movie = require('../models/movie');

class Movies {
	constructor() {
		this.movies = [
			new Movie('The Lord of the Rings', 'A story about a hobbit'),
			new Movie('Harry Potter', 'A story about a wizard'),
			new Movie('The Matrix', 'A story about a hacker'),
		];
	}

	addMovie({ title, description }) {
		this.movies.push(new Movie(title, description));
	}

	deleteMovie(id) {
		this.movies = this.movies.filter((movie) => movie.id !== id);
	}

	getMovie(id) {
		return this.movies.find((movie) => movie.id === id);
	}

	getMovies() {
		return this.movies;
	}
}

module.exports = Movies;
