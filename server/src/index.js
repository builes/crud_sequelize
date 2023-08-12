import app from './app.js';

// call the database connection
import { sequelize } from './database/database.js';

// models
// import './models/userModel.js';

async function main() {
	try {
		// thus we prove the connection to the database
		// await sequelize.authenticate();

		// this is the way to sync the models with the database
		await sequelize.sync();

		app.listen(3000);
		console.log('Server on port 3000');
	} catch (error) {
		console.log(error);
	}
}

main();
