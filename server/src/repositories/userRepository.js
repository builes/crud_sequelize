import User from '../models/userModel.js';

class UserRepository {
	static async getUsersRepository() {
		return await User.findAll();
	}

	static async getUserByIdRepository(userId) {
		return await User.findByPk(userId);
	}

	static async getUserByEmailRepository(email) {
		return await User.findOne({ where: { email } });
	}

	static async createUserRepository(userData) {
		return await User.create(userData);
	}

	static async updateUserRepository(userId, updatedData) {
		return await User.update(updatedData, { where: { id: userId } });
	}

	static async deleteUserRepository(userId) {
		return await User.destroy({ where: { id: userId } });
	}
}

export default UserRepository;
