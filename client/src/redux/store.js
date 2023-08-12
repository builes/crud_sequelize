// configureStore es una función que configura el almacenamiento de la aplicación.
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import moviesReducer from './slices/moviesSlice';

const store = configureStore({
	reducer: {
		// Aquí vamos a importar los reducers
		user: userReducer,
		movies: moviesReducer,
	},
});

export default store;
