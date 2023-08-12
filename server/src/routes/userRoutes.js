import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getUserById,
	getUsers,
	updateUser,
} from '../controllers/userControllers.js';
import {
	verifyId,
	verifyUpdateUser,
	verifyCreateUser,
	validatePassword,
} from '../middlewares/userValidators.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', verifyId, getUserById);
router.post('/', verifyCreateUser, validatePassword, createUser);
router.put('/:id', verifyId, verifyUpdateUser, validatePassword, updateUser);
router.delete('/:id', verifyId, deleteUser);

export default router;
