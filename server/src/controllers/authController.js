import UserService from '../services/userService.js';

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserService.validateUserService(email, password);
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const { name, surname } = user;

		res.status(200).send({ name, surname, email });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
