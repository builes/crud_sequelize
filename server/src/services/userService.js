import UserRepository from '../repositories/userRepository.js';
import encryptPassword from '../utils/passwordEncryptor.js';
import comparePasswords from '../utils/passwordDecryptor.js';

export default class UserService {
	static async getUsersService() {
		try {
			const users = await UserRepository.getUsersRepository();
			return users;
		} catch (error) {
			throw error; // throw error to the controller
		}
	}

	static async getUserByIdService(userId) {
		try {
			const user = await UserRepository.getUserByIdRepository(userId);
			if (!user) {
				return;
			}
			return user;
		} catch (error) {
			throw error;
		}
	}

	static async createUserService(userData) {
		try {
			// verify that email is unique
			const existingUser = await UserRepository.getUserByEmailRepository(
				userData.email
			);

			if (existingUser) {
				return;
			}

			// encrypt password
			const hashedPassword = await encryptPassword(userData.password);
			userData.password = hashedPassword;

			const userSaved = await UserRepository.createUserRepository(userData);

			return userSaved;
		} catch (error) {
			throw error;
		}
	}

	static async updateUserService(userId, userData) {
		try {
			// verify that user exists by id
			const user = await UserRepository.getUserByIdRepository(userId);

			// if user does not exist, return undefined
			if (!user) {
				return;
			}

			// If email is being updated, verify that it is unique
			if (userData.email) {
				const existingUser = await UserRepository.getUserByEmailRepository(
					userData.email
				);

				if (existingUser) {
					return 'exists';
				}
			}

			//if password is being updated, encrypt it
			if (userData.password) {
				const hashedPassword = await encryptPassword(userData.password);
				userData.password = hashedPassword;
			}

			const userUpdated = await UserRepository.updateUserRepository(
				userId,
				userData
			);

			return userUpdated;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUserService(userId) {
		try {
			const userDeleted = await UserRepository.deleteUserRepository(userId);

			if (!userDeleted) {
				return;
			}

			return userDeleted;
		} catch (error) {
			throw error;
		}
	}

	static async validateUserService(email, password) {
		if (!email || !password) {
			return;
		}

		try {
			const user = await UserRepository.getUserByEmailRepository(email);

			if (!user) {
				return;
			}

			const validPassword = await comparePasswords(password, user.password);

			if (!validPassword) {
				return;
			}

			return user;
		} catch (error) {
			throw error;
		}
	}
}
