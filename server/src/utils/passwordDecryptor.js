import bcrypt from 'bcryptjs';

async function comparePasswords(plainTextPassword, hashedPassword) {
	try {
		const match = await bcrypt.compare(plainTextPassword, hashedPassword);
		return match;
	} catch (error) {
		throw new Error('Error comparing passwords');
	}
}

export default comparePasswords;
