import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/api', // Aquí debes poner tu URL base
});

export default instance;
