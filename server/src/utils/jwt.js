//Payload es la información que queremos guardar en el token
const generateToken = (payload) => {
	// secret es la clave secreta que usaremos para encriptar el token
	const secret = 'secret';

	const options = {
		expiresIn: '1h',
	};

	// sing es el método que se encarga de encriptar el token
	const token = jwt.sign(payload, secret, options);

	return token;
};

export default generateToken;
