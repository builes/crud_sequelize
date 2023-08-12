import bcrypt from 'bcryptjs';

async function encryptPassword(plainTextPassword) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
		return hashedPassword;
	} catch (error) {
		throw new Error('Error encrypting password');
	}
}

export default encryptPassword;
