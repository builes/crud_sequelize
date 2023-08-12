import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const User = sequelize.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.TEXT,
			required: true,
		},
		surname: {
			type: DataTypes.TEXT,
			required: true,
		},
		email: {
			type: DataTypes.TEXT,
			required: true,
			unique: true,
		},
		password: {
			type: DataTypes.TEXT,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default User;
