import User from '../models/userModel.js';
import userService from '../services/userService.js';

export async function getUsers(req, res) {
	try {
		const users = await userService.getUsersService();
		res.status(200).json({
			users,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

export async function getUserById(req, res) {
	try {
		const user = await userService.getUserByIdService(req.params.id);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

export async function createUser(req, res) {
	try {
		const user = await userService.createUserService(req.body);

		if (!user) {
			return res.status(409).json({ message: 'User already exists' });
		}

		res.status(201).json({
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

export async function updateUser(req, res) {
	try {
		const user = await userService.updateUserService(req.params.id, req.body);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		if (user === 'exists') {
			return res.status(409).json({ message: 'Email already exists' });
		}

		res.status(200).json({
			message: 'User updated successfully',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

export async function deleteUser(req, res) {
	try {
		const user = await userService.deleteUserService(req.params.id);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({
			message: 'User deleted successfully',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}
