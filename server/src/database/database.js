import Sequalize from 'sequelize';

export const sequelize = new Sequalize(
	'users_first_homework', // database_name we want to connect to
	'postgres', // username
	'1234', // password
	{
		host: 'localhost',
		dialect: 'postgres',
		logging: false,
	}
);
