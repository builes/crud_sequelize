// redux/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
	name: 'movies',
	initialState: [],
	reducers: {
		setMovies: (state, action) => {
			return action.payload;
		},
		addMovie: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { setMovies, addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
