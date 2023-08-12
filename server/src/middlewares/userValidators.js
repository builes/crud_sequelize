// middleware to validate if the fields are correct
export const verifyCreateUser = (req, res, next) => {
	const { name, surname, email, password, ...rest } = req.body;

	if (Object.keys(rest).length > 0) {
		return res.status(400).json({ message: 'Invalid fields' });
	}

	if (!name || !surname || !email || !password) {
		return res.status(400).json({ message: 'Missing fields' });
	}

	//regex to validate email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		return res.status(400).json({ message: 'Invalid email' });
	}

	next();
};

// Middleware to validate if at least one field is sent
export const verifyUpdateUser = (req, res, next) => {
	const { name, surname, email, password, ...rest } = req.body;

	if (Object.keys(rest).length > 0) {
		return res.status(400).json({ message: 'Invalid fields' });
	}

	if (name === '') {
		if (name.length < 1) {
			return res
				.status(400)
				.json({ message: 'Name must have at least one characters' });
		}
	}

	if (surname === '') {
		if (surname.length < 1) {
			return res
				.status(400)
				.json({ message: 'Surname must have at least one characters' });
		}
	}

	if (email) {
		//regex to validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res.status(400).json({ message: 'Invalid email' });
		}
	}

	if (!email) {
		return next();
	}

	next();
};

// Middleware to validate if the id is a number
export const verifyId = async (req, res, next) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({ message: 'Missing id' });
	}

	if (isNaN(id)) {
		return res.status(400).json({ message: 'Invalid id' });
	}

	next();
};

export function validatePassword(req, res, next) {
	const { password } = req.body;

	// Verify the password length
	if (password && password.length < 4) {
		return res
			.status(400)
			.json({ message: 'Password must have at least four characters' });
	}

	next();
}
