import axioxIntance from '../axios.config';

export const getUser = async (email, password) => {
	try {
		const response = await axioxIntance.post('/login', {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
