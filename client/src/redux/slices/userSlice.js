//Aca manejamos la logica del estado de la aplicacion, en este caso el usuario

import { createSlice } from '@reduxjs/toolkit';

// Este es el estado inicial del slice
const initialState = {
	userName: '',
	surname: '',
	email: '',
};

export const userSlice = createSlice({
	// este es el nombre con que importamos el estado en otros archivos
	name: 'user',

	// El estado inicial
	initialState,

	// Las funciones reducers que son las que modifican el estado
	reducers: {
		// Esta función recibe el estado actual que es el state y la acción que se le pasa
		// La acción tiene un payload que es la información que se le pasa
		setUser: (state, action) => {
			// Estas funciones no pueden retornar nada, solo modificar el estado
			const { name, surname, email } = action.payload;
			state.userName = name;
			state.surname = surname;
			state.email = email;
		},
	},
});

// Exportamos las funciones reducers para poder usarlas en otros archivos
export const { setUser } = userSlice.actions;

// Exportamos el estado
export default userSlice.reducer;
